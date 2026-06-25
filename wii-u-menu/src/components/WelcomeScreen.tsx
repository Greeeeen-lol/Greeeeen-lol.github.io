import React, { useState, useEffect, useRef, useCallback } from 'react';
import localforage from 'localforage';
import miiMakerIcon from '../../assets/mii-maker.png';
import { LoadingScreen } from './LoadingScreen';
import { PlazaMiiPanel } from './PlazaMiiPanel';
import {
  listInstalledDetailed,
  installTitle, listInstalledAll, getCatalog, getTitleLaunchSrc,
  bundleSize, ensureVfsServiceWorker, uninstallTitle, type CatalogTitle,
} from '../lib/gameFS';

// ── TV Audio Output (System Settings) ──────────────────────────────────────
// Routes every HTMLAudioElement through one Web Audio graph so the output mode
// (Stereo / Surround / Mono) can actually be applied. Mono downmixes L+R.
const MasterAudio = (() => {
  let ctx: any = null;
  let inputGain: any = null;
  let monoNode: any = null;
  let mode: 'stereo' | 'surround' | 'mono' = 'stereo';
  const registered = new WeakSet<HTMLAudioElement>();

  const ensure = () => {
    if (ctx) return;
    const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    try {
      ctx = new AC();
      inputGain = ctx.createGain();
      monoNode = ctx.createGain();
      monoNode.channelCount = 1;
      monoNode.channelCountMode = 'explicit';
      monoNode.channelInterpretation = 'speakers';
      monoNode.connect(ctx.destination);
      route();
      // Browsers start the context suspended until a user gesture.
      const resume = () => { try { ctx.resume(); } catch {} };
      ['pointerdown', 'keydown', 'click', 'touchstart'].forEach(ev =>
        window.addEventListener(ev, resume, { passive: true }));
    } catch { ctx = null; }
  };

  const route = () => {
    if (!ctx || !inputGain) return;
    try { inputGain.disconnect(); } catch {}
    if (mode === 'mono' && monoNode) inputGain.connect(monoNode);
    else inputGain.connect(ctx.destination);
  };

  const register = (el: HTMLAudioElement) => {
    try {
      ensure();
      if (!ctx || !inputGain || registered.has(el)) return el;
      registered.add(el);
      ctx.createMediaElementSource(el).connect(inputGain);
    } catch { /* already routed or unsupported */ }
    return el;
  };

  const setMode = (m: string) => {
    mode = (m === 'mono' || m === 'surround') ? m : 'stereo';
    ensure();
    route();
    if (ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch {} }
  };

  return { register, setMode };
})();

// Every app audio element goes through this so audio-output settings apply.
const newAudio = (src: string) => MasterAudio.register(new Audio(src));

// ── TV Resolution (System Settings) ────────────────────────────────────────
// Lower resolutions reduce the plaza renderer's backing-buffer resolution.
const RES_SCALE: Record<string, number> = { '1080p': 1.0, '1080i': 0.85, '720p': 0.66, '480p': 0.45 };
let plazaRenderer: any = null;
function applyPlazaResolution() {
  if (!plazaRenderer) return;
  let res = '1080p';
  try { res = localStorage.getItem('wiiuResolution') || '1080p'; } catch {}
  const scale = RES_SCALE[res] ?? 1.0;
  try {
    const base = Math.min(window.devicePixelRatio || 1, 2);
    plazaRenderer.setPixelRatio(Math.max(0.2, base * scale));
    const el = plazaRenderer.domElement;
    const host = el && el.parentElement;
    if (host) plazaRenderer.setSize(host.clientWidth, host.clientHeight, false);
  } catch {}
}

// Preload Wii U Menu Sound Effects
const hoverSfx = newAudio('/local-assets/audio/hover.wav');
hoverSfx.volume = 0.25;
const selectSfx = newAudio('/local-assets/audio/select.wav');
selectSfx.volume = 0.55;
const backSfx = newAudio('/local-assets/audio/back.wav');
backSfx.volume = 0.55;

// --- Wara Wara Plaza SFX (served from platform-server assets) ---------------
const PLAZA_SFX_BASE = '/local-assets/warawara-sfx/';
const playPlazaSfx = (file: string, vol = 0.6) => {
  try {
    const a = newAudio(encodeURI(PLAZA_SFX_BASE + file));
    a.volume = vol;
    a.play().catch(() => {});
  } catch { /* ignore */ }
};
// 240 Mii voice clips (cafe_barista_men_00000000..000000EF). Pick one at random.
const PLAZA_VOICE_COUNT = 240;
const playMiiVoice = (vol = 0.5) => {
  const i = (Math.random() * PLAZA_VOICE_COUNT) | 0;
  const name = `voices/cafe_barista_men_${i.toString(16).toUpperCase().padStart(8, '0')}.wav`;
  playPlazaSfx(name, vol);
};
const PLAZA_FOOTSTEPS = [
  '00265 - WAV_265_GUESS_BANK_MII.wav', '00266 - WAV_266_GUESS_BANK_MII.wav',
  '00267 - WAV_267_GUESS_BANK_MII.wav', '00268 - WAV_268_GUESS_BANK_MII.wav',
  '00269 - WAV_269_GUESS_BANK_MII.wav', '00270 - WAV_270_GUESS_BANK_MII.wav',
  '00271 - WAV_271_GUESS_BANK_MII.wav', '00272 - WAV_272_GUESS_BANK_MII.wav',
];
const playFootstep = (vol = 0.14) =>
  playPlazaSfx('footsteps/' + PLAZA_FOOTSTEPS[(Math.random() * PLAZA_FOOTSTEPS.length) | 0], vol);

let eshopBgm: HTMLAudioElement | null = null;
let menuBgm: HTMLAudioElement | null = null;
let systemSettingsBgm: HTMLAudioElement | null = null;

const playSystemSettingsBgm = () => {
  if (!systemSettingsBgm) {
    systemSettingsBgm = newAudio('/local-assets/audio/system-settings-bgm.mp3');
    systemSettingsBgm.loop = true;
    systemSettingsBgm.volume = 0.50;
  }
  if (systemSettingsBgm.paused) {
    systemSettingsBgm.play().catch((err) => console.warn("Failed to play System Settings BGM:", err));
  }
};

const stopSystemSettingsBgm = () => {
  if (systemSettingsBgm) {
    systemSettingsBgm.pause();
    systemSettingsBgm.currentTime = 0;
  }
};

const playMenuBgm = () => {
  if ((window as any).wiiuSoftwareActive) {
    return;
  }
  if (!menuBgm) {
    menuBgm = newAudio('/local-assets/audio/5. Wii U Menu - In Use  Wii U System Soundtrack.mp3');
    menuBgm.loop = true;
    menuBgm.volume = 0.50;
  }
  if (menuBgm.paused) {
    menuBgm.play().catch((err) => console.warn("Failed to play Wii U Menu BGM:", err));
  }
};

const stopMenuBgm = () => {
  if (menuBgm) {
    menuBgm.pause();
    menuBgm.currentTime = 0;
  }
};

const playEshopBgm = () => {
  if (!eshopBgm) {
    eshopBgm = newAudio('/local-assets/audio/September 2015 - Nintendo eShop Music.mp3');
    eshopBgm.loop = true;
    eshopBgm.volume = 0.45;
  }
  if (eshopBgm.paused) {
    eshopBgm.play().catch((err) => console.warn("Failed to play eShop BGM:", err));
  }
};

const stopEshopBgm = () => {
  if (eshopBgm) {
    eshopBgm.pause();
    eshopBgm.currentTime = 0;
  }
};

const playEshopSfx = (name: string) => {
  const sfxUrls: Record<string, string> = {
    'SE_WAVE_DRC_TOUCH_TRG': '/local-assets/audio/select.wav',
    'SE_WAVE_OK': '/local-assets/audio/select.wav',
    'SE_WAVE_BACK': '/local-assets/audio/back.wav',
    'SE_WAVE_HWKEY_MENU_TRG': '/local-assets/audio/hover.wav',
    'SE_WAVE_CHECKBOX_CHECK': '/local-assets/audio/select.wav',
    'SE_WAVE_CHECKBOX_UNCHECK': '/local-assets/audio/back.wav',
    'SE_WAVE_RADIOBUTTON_CHECK': '/local-assets/audio/select.wav',
    'SE_WAVE_RESET': '/local-assets/audio/back.wav',
    'SE_WAVE_EXIT': '/local-assets/audio/back.wav'
  };
  const sfxVolumes: Record<string, number> = {
    'SE_WAVE_DRC_TOUCH_TRG': 0.55,
    'SE_WAVE_OK': 0.55,
    'SE_WAVE_BACK': 0.55,
    'SE_WAVE_HWKEY_MENU_TRG': 0.25,
    'SE_WAVE_CHECKBOX_CHECK': 0.55,
    'SE_WAVE_CHECKBOX_UNCHECK': 0.55,
    'SE_WAVE_RADIOBUTTON_CHECK': 0.55,
    'SE_WAVE_RESET': 0.55,
    'SE_WAVE_EXIT': 0.55
  };
  const url = sfxUrls[name];
  if (url) {
    try {
      const audio = newAudio(url);
      audio.volume = sfxVolumes[name] || 0.55;
      audio.play().catch((err) => console.warn("Failed to play eShop SFX:", err));
    } catch (e) {
      console.error("Failed to play eShop SFX:", e);
    }
  }
};

const handleEshopSound = (name: string) => {
  if (name.indexOf('BGM_') === 0) {
    playEshopBgm();
  } else {
    playEshopSfx(name);
  }
};

const patchIframeWindow = (win: any) => {
  if (!win) return;
  win.suspendedAudioContexts = win.suspendedAudioContexts || [];
  win.capturedAudioElements = win.capturedAudioElements || [];

  // Monkey-patch AudioContext
  const OrigAudioContext = win.AudioContext || win.webkitAudioContext;
  if (OrigAudioContext && !OrigAudioContext.patched) {
    const PatchedAudioContext = function(this: any, ...args: any[]) {
      const ctx = new OrigAudioContext(...args);
      win.suspendedAudioContexts.push(ctx);
      return ctx;
    };
    PatchedAudioContext.prototype = OrigAudioContext.prototype;
    (PatchedAudioContext as any).patched = true;
    win.AudioContext = PatchedAudioContext;
    win.webkitAudioContext = PatchedAudioContext;
  }

  // Monkey-patch Audio constructor
  const OrigAudio = win.Audio;
  if (OrigAudio && !OrigAudio.patched) {
    const PatchedAudio = function(this: any, ...args: any[]) {
      const audio = new OrigAudio(...args);
      win.capturedAudioElements.push(audio);
      return audio;
    };
    PatchedAudio.prototype = OrigAudio.prototype;
    (PatchedAudio as any).patched = true;
    win.Audio = PatchedAudio;
  }
};

const pauseActiveSoftwareAudio = () => {
  // 1. Pause iframe audio contexts and elements
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    try {
      const win = iframe.contentWindow as any;
      if (win) {
        if (win.suspendedAudioContexts) {
          win.suspendedAudioContexts.forEach((ctx: any) => {
            if (ctx && ctx.state === 'running' && typeof ctx.suspend === 'function') {
              ctx.suspend();
            }
          });
        }
        if (win.capturedAudioElements) {
          win.capturedAudioElements.forEach((audio: any) => {
            if (audio && !audio.paused && typeof audio.pause === 'function') {
              audio.pause();
              audio.wasPlayingBeforeHome = true;
            }
          });
        }
        if (win.MusicManager && typeof win.MusicManager.mute === 'function') {
          win.MusicManager.mute();
        }
        if (win.soundManager && typeof win.soundManager.mute === 'function') {
          win.soundManager.mute();
        }
      }
    } catch (e) {
      console.warn("Failed to suspend iframe audio contexts:", e);
    }
  });

  // 2. Pause system settings audio
  if (typeof (window as any).suspendSettingsAudio === 'function') {
    (window as any).suspendSettingsAudio();
  }
};

const resumeActiveSoftwareAudio = () => {
  // 1. Resume iframe audio contexts and elements
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    try {
      const win = iframe.contentWindow as any;
      if (win) {
        if (win.suspendedAudioContexts) {
          win.suspendedAudioContexts.forEach((ctx: any) => {
            if (ctx && ctx.state === 'suspended' && typeof ctx.resume === 'function') {
              ctx.resume();
            }
          });
        }
        if (win.capturedAudioElements) {
          win.capturedAudioElements.forEach((audio: any) => {
            if (audio && audio.wasPlayingBeforeHome && typeof audio.play === 'function') {
              audio.play().catch(() => {});
              audio.wasPlayingBeforeHome = false;
            }
          });
        }
        if (win.MusicManager && typeof win.MusicManager.unmute === 'function') {
          win.MusicManager.unmute();
        }
        if (win.soundManager && typeof win.soundManager.unmute === 'function') {
          win.soundManager.unmute();
        }
      }
    } catch (e) {
      console.warn("Failed to resume iframe audio contexts:", e);
    }
  });

  // 2. Resume system settings audio
  if (typeof (window as any).resumeSettingsAudio === 'function') {
    (window as any).resumeSettingsAudio();
  }
};

const playSfx = (type: 'hover' | 'select' | 'back' | 'home-open' | 'home-close' | 'error' | 'software-select') => {
  try {
    let src = '';
    let volume = 0.55;
    if (type === 'hover') {
      src = '/local-assets/audio/hover.wav';
      volume = 0.25;
    } else if (type === 'select') {
      src = '/local-assets/audio/select.wav';
      volume = 0.55;
    } else if (type === 'back') {
      src = '/local-assets/audio/back.wav';
      volume = 0.55;
    } else if (type === 'home-open') {
      src = '/local-assets/audio/Home Button - Wii System Sounds.mp3';
      volume = 0.65;
    } else if (type === 'home-close') {
      src = '/local-assets/audio/close home menu or eshop.wav';
      volume = 0.65;
    } else if (type === 'error') {
      src = '/local-assets/audio/error.wav';
      volume = 0.60;
    } else if (type === 'software-select') {
      src = '/local-assets/audio/software select.wav';
      volume = 0.65;
    }
    const audio = newAudio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
  } catch (e) {
    console.error("Failed to play SFX:", e);
  }
};

interface Mii {
  id: string;
  nickname: string;
  creator: string;
  ffsd: string;
  data: string;
  studio: string;
}

const getMiiGradient = (name: string) => {
  const gradients = [
    'from-[#ffb400] to-[#ff7b00]',
    'from-[#58e01b] to-[#39ba00]',
    'from-[#ffd500] to-[#ffaa00]',
    'from-[#33ccff] to-[#0066ff]',
    'from-[#ff5b5b] to-[#ff2b2b]',
    'from-[#e1baff] to-[#a855f7]',
    'from-[#ffb3ba] to-[#ff6b8b]'
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return gradients[sum % gradients.length];
};

const GameIcon: React.FC<{ imageUrl: string; onStart: () => void }> = ({ imageUrl, onStart }) => (
  <div 
    className="wiiu-icon w-full max-w-[130px] aspect-square" 
    tabIndex={1}
    onMouseEnter={() => playSfx('hover')}
    onFocus={() => playSfx('hover')}
  >
    {imageUrl && <div className="reflection" style={{ '--img': `url('${imageUrl}')` } as React.CSSProperties}></div>}
    {imageUrl && <img className="game-icon" src={imageUrl} alt="Game Icon" />}
    <button 
      className="start-btn" 
      onClick={() => {
        playSfx('select');
        onStart();
      }}
    >
      <span>Start</span>
    </button>
  </div>
);

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

// ---------------------------------------------------------------------------
// Wara Wara Plaza: featured-game floating tiles + Guest Mii crowd.
// ---------------------------------------------------------------------------

// 6 Guest Miis that wander the plaza, grouped under the featured games.
const GUEST_MII_DATA: string[] = [
  'BAU32A5mMOYjMNAAAAD/o3LlQ+kAAAAAAAAAAAAAAAAAAAAAAAAAAEcAdQBlAHMAdAAgAEEAAAAAAAAACAAAAAAAQAMDCAYEBgIKCAQEAgIMBAAAAP8ABAAACAQACggARP///0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=',
  'BAU32A5mMOYjMNAAAABOnkIQ64YAAAAAAAAAAAAAAAAAAAAAAAAAAEcAdQBlAHMAdAAgAEIAAAAAAAAACAAAAAAAQAMDBgYEBgIKDAQEAgIMAAAAAP8ABQAACAQACgYAN////0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=',
  'BAU32A5mMOYjMNAAAACDkmUv8W0AAAAAAAAAAAAAAAAAAAAAAAAAAEcAdQBlAHMAdAAgAEMAAAAAAAAACAAAAAAAQAMDAQYEBgIKCAQEAgIMAQAAAP8AAAAACAQACgEAIf///0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=',
  'BAWW9tg9xI0Wd9AAAACVl/F2YIcAAAAAAAAAAAAAAAAAAAAAAAAAAEcAdQBlAHMAdAAgAEQAAAAAAAAACAAAAAAAQAMDCAYEAAIKCAMEBAIMAgAAAP8AAgABCAQACggAGP///0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=',
  'BAWW9tg9xI0Wd9AAAABgLLNCjt4AAAAAAAAAAAAAAAAAAAAAAAAAAEcAdQBlAHMAdAAgAEUAAAAAAAAACAAAAAAAQAMDBwYEAAIKDQMEBAIMAAAAAP8ABgABCAQACgcADv///0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=',
  'BAWW9tg9xI0Wd9AAAACRhL6o2pcAAAAAAAAAAAAAAAAAAAAAAAAAAEcAdQBlAHMAdAAgAEYAAAAAAAAACAAAAAAAQAMDAQYEAAIKCAMEBAIMAAAAAP8ABwABCAQACgEADP///0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=',
];

// Featured games arranged in a circle on the plaza floor (x, z ground coords).
// `kind` controls how the tile icon texture is produced.
type PlazaTile = {
  name: string;
  x: number;
  z: number;
  kind: 'image' | 'browser' | 'settings';
  src?: string;
};
// The 5 featured-game icon definitions; placed at 10 positions around the plaza
// (each icon appears twice) so there are 10 floating tiles.
const PLAZA_TILE_DEFS: Omit<PlazaTile, 'x' | 'z'>[] = [
  { name: 'Mii Maker',        kind: 'image', src: '/local-assets/icons/Mii Maker.png' },
  { name: 'Eaglercraft',      kind: 'image', src: '/local-assets/icons/eaglercraft.png' },
  { name: 'Nintendo eShop',   kind: 'image', src: '/local-assets/icons/ESHOP ICON.png' },
  { name: 'Internet Browser', kind: 'browser' },
  { name: 'System Settings',  kind: 'settings' },
];
// Ambient plaza chatter: 50 lines (10 per featured app) that wandering Miis
// randomly say in a speech bubble about whichever app they're standing under.
const MII_APP_MESSAGES: Record<string, string[]> = {
  'Mii Maker': [
    'I just made a Mii of my whole family!',
    'Making a Mii of my dog next.',
    'Can eyebrows get any bushier than this?',
    'My Mii finally looks like me!',
    'So many hairstyles to choose from.',
    'I spent an hour on the nose alone.',
    'Check out my celebrity Mii!',
    'Mingle mode is the best part.',
    'I gave my Mii a tiny mustache.',
    'Mii Maker is weirdly relaxing.',
  ],
  'Eaglercraft': [
    'Building a castle right now!',
    'Watch out for creepers tonight.',
    'I finally found diamonds!',
    'Anyone want to join my server?',
    'My house got blown up... again.',
    'Mining all day, every day.',
    'I tamed a wolf!',
    'Survival mode is brutal.',
    'Just need a little more redstone.',
    'It runs right in the browser?!',
  ],
  'Nintendo eShop': [
    "There's a sale on today!",
    "I'm saving up for a new game.",
    'So many demos to try out.',
    'Just spent all my points.',
    'Did you see the new release?',
    'My wishlist is getting too long.',
    'Indie games are the best deals.',
    'Pre-ordered already!',
    'My download is finally done.',
    'The eShop music is so chill.',
  ],
  'Internet Browser': [
    'Just looking some stuff up online.',
    'The browser is faster than I expected.',
    'Watching videos in the plaza.',
    "I'm bookmarking everything I find.",
    'I lost an hour reading wikis.',
    'Tabs, tabs, and more tabs.',
    'Searching for game tips.',
    'Found a great recipe online.',
    'The internet, on my Wii U!',
    'Just checking the news.',
  ],
  'System Settings': [
    'Tweaking my settings real quick.',
    'Changed my user icon today.',
    "I'm organizing my home menu.",
    'Updating the system software.',
    'Adjusting the parental controls.',
    'I changed the theme color.',
    'Managing my storage space.',
    'Setting up my internet connection.',
    'So many options in here.',
    'Just backed up my save data.',
  ],
};

// Click/hover hit radius (screen px) around a floating icon's projected center.
const PLAZA_ICON_HIT_R = 101;

// Nearest crowd member to a screen point, with a hit radius that scales to the
// Mii's on-screen height — so the hitbox tracks the Mii as the camera zooms in
// (a fixed pixel radius reads as "off"/too-small when dollied in). Samples
// mid-body for the center and foot→head for the size. `V` is a reusable Vector3.
const nearestPlazaMember = (
  camera: any, crowd: any[], W: number, H: number, px: number, py: number, V: any,
): any => {
  const HEAD_Y = 34;
  const proj = (x: number, y: number, z: number): [number, number] | null => {
    V.set(x, y, z); V.project(camera);
    if (V.z > 1) return null;
    return [(V.x * 0.5 + 0.5) * W, (-V.y * 0.5 + 0.5) * H];
  };
  let best: any = null, bestD = Infinity;
  for (const m of crowd) {
    if (!m) continue;
    const c = proj(m.x, 18, m.z); if (!c) continue;
    const f = proj(m.x, 0, m.z), h = proj(m.x, HEAD_Y, m.z);
    const hpx = f && h ? Math.abs(f[1] - h[1]) : 0;
    const rad = Math.max(40, hpx * 0.5);   // ~half the Mii's screen height
    const d = Math.hypot(c[0] - px, c[1] - py);
    if (d < rad && d < bestD) { bestD = d; best = m; }
  }
  return best;
};
const PLAZA_TILE_COUNT = 10;
// Oval (ellipse) ring, like the Wii U plaza — wider across (X) than deep (Z).
const PLAZA_TILE_RX = 195;
const PLAZA_TILE_RZ = 118;
const PLAZA_TILES: PlazaTile[] = Array.from({ length: PLAZA_TILE_COUNT }, (_, i) => {
  const ang = (i / PLAZA_TILE_COUNT) * Math.PI * 2;
  const def = PLAZA_TILE_DEFS[i % PLAZA_TILE_DEFS.length];
  return {
    ...def,
    x: Math.sin(ang) * PLAZA_TILE_RX,
    z: -Math.cos(ang) * PLAZA_TILE_RZ,
  };
});

// Procedural "studio" cube env map so the glass tiles get real reflections in the
// unlit plaza scene (MeshBasic.envMap reflects without any lights).
const makeTileEnvMap = (THREE: any): any => {
  const face = (stops: [number, string][]) => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createLinearGradient(0, 0, 0, 128);
    stops.forEach(([o, col]) => g.addColorStop(o, col));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return c;
  };
  const horizon: [number, string][] = [[0, '#cfe0ee'], [0.45, '#aec6d8'], [0.5, '#90aabf'], [1, '#6f8aa0']];
  const up: [number, string][] = [[0, '#dbe8f2'], [1, '#b9cfe0']];
  const down: [number, string][] = [[0, '#6b7e8d'], [1, '#586c7b']];
  // order: px, nx, py, ny, pz, nz
  const faces = [face(horizon), face(horizon), face(up), face(down), face(horizon), face(horizon)];
  const tex = new THREE.CubeTexture(faces);
  tex.needsUpdate = true;
  if ('colorSpace' in tex) tex.colorSpace = THREE.LinearSRGBColorSpace;
  return tex;
};

// Glossy glass surface: a faint tint + the Wii U corner glints (top-left +
// bottom-right) + a diagonal sheen streak, so the cover reads as shiny glass
// (paired with the env map for the mirror/reflection).
const makeGlassSurfaceTexture = (THREE: any): any => {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d')!;
  // Faint glass tint (mostly see-through).
  const base = ctx.createLinearGradient(0, 0, 0, 256);
  base.addColorStop(0, 'rgba(190,214,232,0.30)');
  base.addColorStop(1, 'rgba(120,150,172,0.22)');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 256, 256);
  // Diagonal sheen streak.
  ctx.save();
  ctx.translate(128, 128); ctx.rotate(-Math.PI / 5); ctx.translate(-128, -128);
  const streak = ctx.createLinearGradient(0, 70, 0, 150);
  streak.addColorStop(0, 'rgba(255,255,255,0)');
  streak.addColorStop(0.5, 'rgba(255,255,255,0.5)');
  streak.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = streak;
  ctx.fillRect(-60, 70, 376, 80);
  ctx.restore();
  // Corner glints (match .wiiu-icon::before).
  const glint = (x: number, y: number) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, 110);
    g.addColorStop(0, 'rgba(255,255,255,0.85)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.25)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
  };
  glint(28, 28);
  glint(228, 228);
  const tex = new THREE.CanvasTexture(c);
  if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

// Dark env with a bright top, for a polished-floor (basketball-court) gloss: the
// floor's albedo stays solid and this adds a reflective sheen, brightest where the
// reflection points up.
const makeFloorEnvMap = (THREE: any): any => {
  const face = (stops: [number, string][]) => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createLinearGradient(0, 0, 0, 128);
    stops.forEach(([o, col]) => g.addColorStop(o, col));
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
    return c;
  };
  const horizon: [number, string][] = [[0, '#eef4fa'], [0.4, '#9fb1c0'], [0.55, '#3c454e'], [1, '#1b2026']];
  const up: [number, string][] = [[0, '#ffffff'], [1, '#cdd8e2']];
  const down: [number, string][] = [[0, '#15191e'], [1, '#0f1216']];
  const faces = [face(horizon), face(horizon), face(up), face(down), face(horizon), face(horizon)];
  const tex = new THREE.CubeTexture(faces);
  tex.needsUpdate = true;
  if ('colorSpace' in tex) tex.colorSpace = THREE.LinearSRGBColorSpace;
  return tex;
};

// Soft round shadow texture (fallback when the icon model carries no shadow map).
const makeRadialShadowTexture = (THREE: any): any => {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(0.6, 'rgba(0,0,0,0.55)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

// Canvas-drawn icon for the Internet Browser tile (no source PNG available).
const createBrowserIconTexture = (THREE: any): any => {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d')!;
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#2aa6e8');
  g.addColorStop(1, '#1668c8');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  // Globe
  const cx = 128, cy = 128, R = 84;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#1668c8';
  ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
  // Meridians + equator
  ctx.beginPath(); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
  for (const k of [0.5]) {
    ctx.beginPath(); ctx.ellipse(cx, cy, R * k, R, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx, cy, R, R * k, 0, 0, Math.PI * 2); ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

// Canvas-drawn icon for the System Settings tile (no source PNG available).
const createSettingsIconTexture = (THREE: any): any => {
  // Use the real System Settings app icon artwork.
  const tex = new THREE.TextureLoader().load('/local-assets/icons/settings.png');
  if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

// Loads the Mii Maker FFL resources exactly once. The engine (`/src/main.ts`)
// is a module, so it may not be on `window` yet when React mounts — poll for it,
// then call nh()/m5() which fetch + initialize FFL and populate the `AC` promise
// that z9() returns. Cached on window so every render reuses the same load.
const ensureMiiResources = (): Promise<void> => {
  const w = window as any;
  if (w.__miiResourcesPromise) return w.__miiResourcesPromise;

  w.__miiResourcesPromise = (async () => {
    // Wait (up to ~10s) for the engine to attach to window.
    for (let i = 0; i < 200; i++) {
      if (w.Mii && w.MiiRenderer && typeof w.nh === 'function') break;
      await new Promise((r) => setTimeout(r, 50));
    }
    if (!w.Mii || !w.MiiRenderer || typeof w.nh !== 'function') {
      throw new Error('Mii engine never attached to window (is /src/main.ts loaded?)');
    }
    if (typeof w.m5 === 'function') {
      try { await w.m5(true); } catch (e) { console.warn('[WelcomeScreen] m5() failed (non-fatal):', e); }
    }
    // nh() fetches + initializes the FFL resource and sets the AC promise.
    await w.nh(true);
    // z9() resolves once AC (resource init) is fulfilled.
    if (typeof w.z9 === 'function') await w.z9();

    // Silence the engine's BGM — the plaza uses the menu's own music, not the
    // Mii Maker theme. mute()/setVolume don't stick (updateVolume() writes the
    // gain directly, and playMusic() re-runs it on the first user gesture), so
    // zero volMultiplier: every volume path multiplies by it. Done after m5 set
    // the theme. Only affects this page, not the Mii Maker app (separate iframe).
    if (typeof w.jQ === 'function') {
      try {
        const bgm = w.jQ();
        bgm.volMultiplier = 0;
        bgm.muted = true;
        if (bgm.gainNode) bgm.gainNode.gain.value = 0;
      } catch (e) {
        console.warn('[WelcomeScreen] BGM mute failed:', e);
      }
    }
    console.log('[WelcomeScreen] Mii engine resources successfully initialized.');
  })();

  // If loading fails, clear the cache so a later attempt can retry.
  w.__miiResourcesPromise.catch(() => { w.__miiResourcesPromise = null; });
  return w.__miiResourcesPromise;
};

export function WelcomeScreen({
  onStart,
  onResetFirstBoot,
}: {
  onStart: () => void;
  onResetFirstBoot: () => void;
}) {
  const [personalMii, setPersonalMii] = useState<Mii | null>(null);
  const [personalMiiIcon, setPersonalMiiIcon] = useState<string | null>(null);
  // The plaza is always mounted (so the 3D scene preloads in the background);
  // plazaIn just slides it in/out of view.
  const [plazaIn, setPlazaIn] = useState(false);
  const plazaInRef = useRef(false);
  useEffect(() => { plazaInRef.current = plazaIn; }, [plazaIn]);

  const SLIDE_MS = 550;
  const openPlaza = useCallback(() => setPlazaIn(true), []);
  const closePlaza = useCallback(() => setPlazaIn(false), []);
  const plazaCanvasContainerRef = useRef<HTMLDivElement>(null);

  // Wara Wara Plaza: clicking a Mii opens its detail panel (warawara_plaza_ui).
  const [selectedPlazaMii, setSelectedPlazaMii] = useState<{ name: string; game: string } | null>(null);
  const plazaPickRef = useRef<{
    camera: any; crowd: any[]; THREE: any; tiles?: any[];
    focus?: (m: any) => void; focusTile?: (t: any) => void;
    clearFocus?: () => void; setBubble?: (el: any) => void;
    setOutline?: (m: any, on: boolean) => void;
  } | null>(null);
  // DOM layer where ambient "what they're playing" bubbles are positioned.
  const plazaBubbleLayerRef = useRef<HTMLDivElement>(null);


  // Project every crowd member to screen space and select the nearest one to the
  // click (within a small radius). Avoids fragile skinned-mesh raycasting.
  const handlePlazaPick = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const pick = plazaPickRef.current;
    if (!pick || !pick.camera || !pick.THREE) return;
    const { camera, crowd, THREE } = pick;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const v = new THREE.Vector3();
    const screenDist = (x: number, y: number, z: number) => {
      v.set(x, y, z); v.project(camera);
      if (v.z > 1) return Infinity; // behind the camera
      const sx = (v.x * 0.5 + 0.5) * rect.width;
      const sy = (-v.y * 0.5 + 0.5) * rect.height;
      return Math.hypot(sx - px, sy - py);
    };

    // Nearest Mii (hit radius scales with on-screen size, so it works zoomed in).
    const bestM = nearestPlazaMember(camera, crowd, rect.width, rect.height, px, py, v);
    // Nearest floating game icon.
    let bestT: any = null, bestTD = Infinity;
    for (const t of pick.tiles || []) {
      if (!t) continue;
      const d = screenDist(t.cx ?? t.x, t.cy ?? 30, t.cz ?? t.z);
      if (d < bestTD) { bestTD = d; bestT = t; }
    }

    // Floating icons take priority within their hit radius (Miis cluster right
    // under them, so otherwise a nearby Mii always steals the click).
    if (bestT && bestTD < PLAZA_ICON_HIT_R) {
      playPlazaSfx('Select Mii.wav', 0.6);
      pick.focusTile?.(bestT);
      setSelectedPlazaMii({ name: bestT.name || '', game: bestT.name || '' });
    } else if (bestM) {
      playPlazaSfx('Select Mii.wav', 0.6);
      playMiiVoice(0.6); // the clicked Mii says one line
      pick.focus?.(bestM);
      setSelectedPlazaMii({ name: bestM.name || 'Mii', game: bestM.game || '' });
    }
  }, []);

  // Hovering a different Mii plays the hover blip (throttled projection pick).
  const lastHoverRef = useRef<any>(null);
  const lastHoverMemberRef = useRef<any>(null); // member currently showing the hover outline
  const hoverThrottleRef = useRef(0);
  const handlePlazaHover = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now < hoverThrottleRef.current) return;
    hoverThrottleRef.current = now + 90;
    const pick = plazaPickRef.current;
    if (!pick || !pick.camera || !pick.THREE) return;
    const { camera, crowd, THREE } = pick;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    const v = new THREE.Vector3();
    const sd = (x: number, y: number, z: number) => {
      v.set(x, y, z); v.project(camera);
      if (v.z > 1) return Infinity;
      return Math.hypot((v.x * 0.5 + 0.5) * rect.width - px, (-v.y * 0.5 + 0.5) * rect.height - py);
    };
    let best: any = null, bestD = Infinity;
    for (const t of pick.tiles || []) { if (!t) continue; const d = sd(t.cx ?? t.x, t.cy ?? 30, t.cz ?? t.z); if (d < PLAZA_ICON_HIT_R && d < bestD) { bestD = d; best = t; } }
    if (!best) best = nearestPlazaMember(camera, crowd, rect.width, rect.height, px, py, v);
    const hit = best;
    if (hit && hit !== lastHoverRef.current) playPlazaSfx('Hover Mii.wav', 0.35);
    lastHoverRef.current = hit;
    // Selection outline follows the hovered Mii (tiles have no .body).
    const hoverMember = hit && hit.body ? hit : null;
    if (hoverMember !== lastHoverMemberRef.current) {
      pick.setOutline?.(lastHoverMemberRef.current, false);
      pick.setOutline?.(hoverMember, true);
      lastHoverMemberRef.current = hoverMember;
    }
  }, []);
  // Pointer leaving the plaza canvas clears the hover outline.
  const handlePlazaLeave = useCallback(() => {
    if (lastHoverMemberRef.current) {
      plazaPickRef.current?.setOutline?.(lastHoverMemberRef.current, false);
      lastHoverMemberRef.current = null;
    }
    lastHoverRef.current = null;
  }, []);

  const closePlazaMii = useCallback(() => {
    playSfx('back');
    plazaPickRef.current?.clearFocus?.();
    setSelectedPlazaMii(null);
  }, []);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const [purchasedCount, setPurchasedCount] = useState(0);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [changePassSuccess, setChangePassSuccess] = useState('');
  const [changePassError, setChangePassError] = useState('');
  const [libraryMiis, setLibraryMiis] = useState<Mii[]>([]);
  const [libraryIcons, setLibraryIcons] = useState<Record<string, string>>({});
  const [showMiiLoading, setShowMiiLoading] = useState(false);
  const [showMiiIframe, setShowMiiIframe] = useState(false);
  const [miiIframeLoaded, setMiiIframeLoaded] = useState(false);

  const [showEshopLoading, setShowEshopLoading] = useState(false);
  const [showEshopIframe, setShowEshopIframe] = useState(false);
  const [eshopIframeLoaded, setEshopIframeLoaded] = useState(false);

  const [showMinecraftLoading, setShowMinecraftLoading] = useState(false);
  const [showMinecraftIframe, setShowMinecraftIframe] = useState(false);
  const [minecraftIframeLoaded, setMinecraftIframeLoaded] = useState(false);
  // iframe src for the running title: a blob: URL (single payload) or a
  // /vfs/<id>/<entry> path served by the SW (bundle).
  const [minecraftSrc, setMinecraftSrc] = useState<string | null>(null);
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  // Per-game launch loading screen art + jingle (from the catalog).
  const [activeGameSplash, setActiveGameSplash] = useState<string | null>(null);
  const [activeGameJingle, setActiveGameJingle] = useState<string | null>(null);
  const [showHomeMenu, setShowHomeMenu] = useState(false);

  const [showSystemSettingsLoading, setShowSystemSettingsLoading] = useState(false);
  const [showSystemSettingsIframe, setShowSystemSettingsIframe] = useState(false);
  const [systemSettingsIframeLoaded, setSystemSettingsIframeLoaded] = useState(false);

  const [installedGames, setInstalledGames] = useState<{titleId: string; type: 'single' | 'bundle'; name: string; icon?: string | null}[]>([]);

  // Focus ref for Minecraft iframe to ensure keyboard controls work
  const minecraftIframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-focus Minecraft iframe when returning from Home menu or when loaded
  useEffect(() => {
    if (showMinecraftIframe && minecraftIframeLoaded && !showHomeMenu && minecraftIframeRef.current) {
      minecraftIframeRef.current.focus();
      if (minecraftIframeRef.current.contentWindow) {
        minecraftIframeRef.current.contentWindow.focus();
      }
    }
  }, [showMinecraftIframe, minecraftIframeLoaded, showHomeMenu]);

  // Real-time clock for HOME Menu
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Nintendo eShop exit transition state
  const [eshopExitState, setEshopExitState] = useState<'none' | 'white-screen' | 'loading-menu'>('none');
  
  // Wii U Manual dialog state
  const [showManualModal, setShowManualModal] = useState(false);

  // Toast message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dynamic time updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mii Creator Engine Setup & Resource Loader (Phase 1)
  // Start loading FFL resources on mount (waits for the engine internally).
  useEffect(() => {
    ensureMiiResources().catch((error) => {
      console.error("[WelcomeScreen] Failed to initialize Mii engine resources:", error);
    });
  }, []);

  // Render Mii in Wara Wara Plaza view. Runs on mount (and when the personal Mii
  // changes) so the 3D scene preloads in the background before the plaza opens.
  useEffect(() => {
    const w = window as any;

    let scene: any = null;
    let floorMesh: any = null;
    let wanderRaf = 0;
    let panKeyHandler: ((e: KeyboardEvent) => void) | null = null;
    let devPanel: HTMLElement | null = null;
    let zoomUiEl: HTMLElement | null = null;
    // Registry of every dev-panel control's current value, for Download JSON.
    const panelDump: Record<string, () => any> = {};
    let cancelled = false;
    // Wara Wara Plaza extras: featured-game tiles + the Guest Mii crowd.
    let tileGroup: any = null;
    const tiles: any[] = [];          // { mesh, baseY, phase, spin }
    const guests: any[] = [];         // { renderer, scene, hidden, bodyRoots, ... }
    const container = plazaCanvasContainerRef.current;
    if (!container) return;
    container.innerHTML = '';

    (async () => {
      try {
        // Block until FFL resources are loaded — otherwise the Mii meshes can't
        // be built and only the shadow plane renders.
        await ensureMiiResources();
        if (cancelled) return;

        const miiData = personalMii ? personalMii.data : "BAXGigDvV8wSNID/cJl869TJwxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAQAMDAQYEBgIKCAQEAgIMAAAAAP8AAAAACAQACgEAIf///0D/BAACFAMTBBcNBAAKBAEJ//8A/wAAAP////8=";
        const miiInstance = new w.Mii(miiData, 1);
        // 6th arg is the editor. The renderer's fadeIn()/interaction handlers
        // read editor.source / editor.ui / editor.enableUI; passing undefined
        // crashes fadeIn ("reading 'source' of undefined"). Provide a no-op stub.
        // source:0 selects the normal (non-"received Mii") entry path.
        const editorStub = {
          source: 0,
          enableUI: () => {},
          ui: { mii: { qsa: () => [] } },
        };
        // Disable the engine's editor ground shadow before the renderer reads the
        // setting: it loads shd.glb parked at the origin (where the singleton body
        // sits) and never follows our cloned crowd, so it's stuck in the centre.
        // The ground reflections ground the Miis instead. Use the engine's own
        // localforage store so its C1("useEditorShadow") reader sees the value.
        try {
          const lf = (window as any).localforage || localforage;
          await lf.setItem('settings_useEditorShadow', false);
        } catch {}

        scene = new w.MiiRenderer(miiInstance, container, 0, undefined, false, editorStub);

        // Attach the renderer canvas up front so the render loop (started in the
        // constructor) draws into an on-screen element.
        const elm = scene.getRendererElement();
        if (elm) {
          elm.style.width = '100%';
          elm.style.height = '100%';
          container.appendChild(elm);
        }

        await scene.init();
        if (cancelled) return;

        // init() forces the canvas to opacity:0 while loading and never
        // restores it for setupType 0 (the editor does this externally).
        // Without this the Mii renders but stays invisible.
        if (elm) elm.style.opacity = '1';

        // Expose the renderer so the TV Resolution setting can scale its buffer.
        try { plazaRenderer = scene.getRenderer(); applyPlazaResolution(); } catch {}

        // init() builds the body. updateMiiHead() builds the head/hat AND, while
        // headReady is false, runs fadeIn() — which fires focusCamera(2) (face
        // close-up) and a clothing re-bake (updateBody(1)) immediately after the
        // FFL face render. That re-bake calls readRenderTargetPixels while a
        // PIXEL_PACK buffer is still bound, throws, and replaces the body's good
        // texture with a broken one (body disappears, only shadow remains).
        //
        // Pre-set headReady so updateMiiHead skips fadeIn(); we then do the head
        // finalize steps ourselves, in order, with the GL state cleaned up.
        scene.headReady = true;
        if (scene.updateMiiHead) await scene.updateMiiHead();
        if (cancelled) return;

        // updateMiiHead's FFL face render starts an ASYNC GPU readback that keeps
        // the PIXEL_PACK buffer bound for a few frames. The engine also schedules
        // its own clothing re-bake (setTimeout ~11ms). Any clothing bake during
        // that window fails (readPixels error) and blanks the body — which is why
        // the body shows for a moment, then vanishes leaving a floating head.
        //
        // Wait for the readback to settle, cancel the engine's pending re-bake,
        // then bake once cleanly. The last successful bake wins.
        await new Promise((r) => setTimeout(r, 350));
        if (cancelled) return;
        scene.needsClothingUpdate = false;
        try {
          const gl = scene.getRenderer().getContext();
          if (gl && gl.PIXEL_PACK_BUFFER !== undefined) {
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
          }
        } catch (e) {
          console.warn('[WelcomeScreen] Could not unbind PIXEL_PACK buffer:', e);
        }

        // Re-bake clothing now that the head's charModel exists -> correct skin
        // color and a properly textured, visible body.
        if (scene.updateBody) await scene.updateBody(1);
        if (cancelled) return;

        // Hide the stray "Icosphere" mesh baked into the body GLB. It renders as
        // a black sphere at the Mii's feet; the Mii Maker app keeps it hidden.
        const hideIcosphere = () => {
          const sc = scene.getScene && scene.getScene();
          if (!sc) return;
          sc.traverse((o: any) => {
            if (o.isMesh && /icosphere/i.test(o.name || '')) o.visible = false;
          });
        };
        hideIcosphere();
        [150, 500, 1200].forEach((t) =>
          setTimeout(() => { if (!cancelled) hideIcosphere(); }, t)
        );

        // Build the Wara Wara Plaza floor under the Mii from the supplied maps
        // The plaza floor texture is a seamless tiling grid, so we map it onto a single plane
        // and repeat it, adding lights to support normal/specular reflections.
        const THREE = (window as any).THREE;
        if (THREE && scene.getScene) {
          const loader = new THREE.TextureLoader();
          const base = '/local-assets/plaza-floor/';
          
          // DAE provides its own UVs (range ~-7.2..7.2). Wrap modes per the .dae:
          // diffuse/emission/specular = MIRROR, normal/bump = WRAP (repeat).
          const loadTex = (name: string, wrap: number) => {
            const tex = loader.load(base + name);
            tex.wrapS = wrap;
            tex.wrapT = wrap;
            return tex;
          };

          const alb = loadTex('Floor_Alb.png', THREE.MirroredRepeatWrapping);
          // One emm copy, centred on the floor and scaled out to its edges. Floor
          // UVs run ~-7.2..7.2 (span ~14.4), so map that whole range to 0..1 and
          // clamp so it doesn't tile.
          const emm = loadTex('Floor_Emm.png', THREE.ClampToEdgeWrapping);
          emm.center.set(0, 0);
          emm.repeat.set(0.095, 0.095);
          emm.offset.set(0.5, 0.5);
          const nom = loadTex('Floor_Nom.png', THREE.RepeatWrapping);
          // Spm is white=glossy, but roughnessMap is white=rough — invert it.
          const rough = (() => {
            const tex = new THREE.CanvasTexture(document.createElement('canvas'));
            tex.wrapS = tex.wrapT = THREE.MirroredRepeatWrapping;
            const img = new Image();
            img.onload = () => {
              const cv = tex.image as HTMLCanvasElement;
              cv.width = img.width; cv.height = img.height;
              const cx = cv.getContext('2d')!;
              cx.filter = 'invert(1)';
              cx.drawImage(img, 0, 0);
              tex.needsUpdate = true;
            };
            img.src = base + 'Floor_Spm.png';
            return tex;
          })();

          // Albedo/emissive render right as linear in this renderer; normal + rough
          // are data maps (no colour transform).
          if ('colorSpace' in alb) {
            alb.colorSpace = THREE.LinearSRGBColorSpace;
            emm.colorSpace = THREE.LinearSRGBColorSpace;
            nom.colorSpace = THREE.NoColorSpace;
            rough.colorSpace = THREE.NoColorSpace;
          }

          // Lit floor: a directional key light + soft ambient bring out the normal
          // (bump) and roughness (gloss) maps. The Miis use their own shaders and
          // ignore scene lights, so this only affects the floor/tiles.
          const sun = new THREE.DirectionalLight(0xc2e4ff, 1.25);
          sun.position.set(105, -400, 400);
          const amb = new THREE.AmbientLight(0xf7f6fe, 3.9);

          const mat = new THREE.MeshStandardMaterial({
            map: alb,
            normalMap: nom,
            roughnessMap: rough,
            roughness: 0.24,
            metalness: 0,
            fog: true,
            // Don't write depth: the ground reflections live just below y=0 and the
            // floor would otherwise depth-occlude them. Nothing else is below the
            // floor, so skipping its depth write is safe — and Miis (which DO write
            // depth) still correctly occlude reflections they pass in front of.
            depthWrite: false,
          });
          // Emissive map layered additively over the albedo (dark areas add nothing,
          // glowing areas brighten) — a single static copy centred on the floor.
          const emmMat = new THREE.MeshBasicMaterial({
            map: emm,
            transparent: true,
            opacity: 0.02,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            fog: true,
          });

          floorMesh = new THREE.Group();
          floorMesh.name = 'WaraWaraFloor';

          // Load the actual plaza floor model (Collada). Apply our material so it
          // uses the supplied textures consistently.
          try {
            const { ColladaLoader } = await import('three/examples/jsm/loaders/ColladaLoader.js');
            const collada: any = await new ColladaLoader().loadAsync(base + 'LoungeFloor.dae');
            if (cancelled) return;
            const model = collada.scene;
            const floorMeshesForGlow: any[] = [];
            model.traverse((o: any) => {
              if (o.isMesh) {
                o.material = mat;
                o.frustumCulled = false;
                if (o.geometry && !o.geometry.attributes.normal) {
                  o.geometry.computeVertexNormals();
                }
                floorMeshesForGlow.push(o);
              }
            });
            // Add the emissive overlay as a sibling clone (shares geometry/transform).
            for (const o of floorMeshesForGlow) {
              const glow = o.clone();
              glow.material = emmMat;
              glow.frustumCulled = false;
              glow.renderOrder = 2;
              if (o.parent) o.parent.add(glow);
            }
            const FLOOR_SCALE = 1; // tune to match the Mii's size
            model.scale.setScalar(FLOOR_SCALE);
            floorMesh.add(model);
          } catch (e) {
            console.error('[WelcomeScreen] Failed to load LoungeFloor.dae:', e);
          }

          const sceneObj = scene.getScene();
          // Push the floor forward (toward the camera/front of the plaza).
          floorMesh.position.z = -120;
          sceneObj.add(floorMesh);
          floorMesh.updateMatrixWorld(true); // scene autoupdate is off
          sceneObj.add(sun);
          sceneObj.add(amb);

          const bgColor = 0xe9f0ee;
          const fog = new THREE.Fog(bgColor, 300, 900); // light haze (was 120–500)
          sceneObj.fog = fog;
          sceneObj.background = new THREE.Color(bgColor);

          // --- Dev tuning panel: live sliders + Download JSON ----------------------
          mat.normalScale = mat.normalScale || new THREE.Vector2(1, 1);
          const panel = document.createElement('div');
          panel.style.cssText =
            'position:fixed;top:8px;right:8px;z-index:99999;width:250px;max-height:92vh;overflow:auto;' +
            'background:rgba(20,24,28,0.92);color:#e8eef2;font:11px/1.4 monospace;padding:10px;border-radius:8px;' +
            'box-shadow:0 4px 16px rgba(0,0,0,0.4);opacity:0;pointer-events:none;';
          const fields: { label: string; min: number; max: number; step: number; get: () => number; set: (v: number) => void }[] = [
            { label: 'sun.intensity', min: 0, max: 12, step: 0.05, get: () => sun.intensity, set: (v) => (sun.intensity = v) },
            { label: 'sun.pos.x', min: -400, max: 400, step: 1, get: () => sun.position.x, set: (v) => (sun.position.x = v) },
            { label: 'sun.pos.y', min: -400, max: 600, step: 1, get: () => sun.position.y, set: (v) => (sun.position.y = v) },
            { label: 'sun.pos.z', min: -400, max: 400, step: 1, get: () => sun.position.z, set: (v) => (sun.position.z = v) },
            { label: 'ambient.intensity', min: 0, max: 8, step: 0.05, get: () => amb.intensity, set: (v) => (amb.intensity = v) },
            { label: 'floor.roughness', min: 0, max: 1, step: 0.01, get: () => mat.roughness, set: (v) => (mat.roughness = v) },
            { label: 'floor.metalness', min: 0, max: 1, step: 0.01, get: () => mat.metalness, set: (v) => (mat.metalness = v) },
            { label: 'floor.normalScale', min: 0, max: 4, step: 0.05, get: () => mat.normalScale.x, set: (v) => mat.normalScale.set(v, v) },
            { label: 'floor.envMapIntensity', min: 0, max: 4, step: 0.05, get: () => mat.envMapIntensity, set: (v) => (mat.envMapIntensity = v) },
            { label: 'emm.opacity', min: 0, max: 1, step: 0.01, get: () => emmMat.opacity, set: (v) => (emmMat.opacity = v) },
            { label: 'emm.repeat', min: 0.01, max: 1, step: 0.005, get: () => emm.repeat.x, set: (v) => emm.repeat.set(v, v) },
            { label: 'fog.near', min: 0, max: 1200, step: 5, get: () => fog.near, set: (v) => (fog.near = v) },
            { label: 'fog.far', min: 50, max: 2500, step: 5, get: () => fog.far, set: (v) => (fog.far = v) },
          ];
          const title = document.createElement('div');
          title.textContent = 'Plaza Floor / Lighting';
          title.style.cssText = 'font-weight:bold;margin-bottom:8px;font-size:12px;';
          panel.appendChild(title);
          const addSliderRow = (panelEl: HTMLElement, f: { label: string; min: number; max: number; step: number; get: () => number; set: (v: number) => void }) => {
            const row = document.createElement('div');
            row.style.cssText = 'margin-bottom:6px;';
            const lab = document.createElement('label');
            lab.style.cssText = 'display:flex;justify-content:space-between;';
            const name = document.createElement('span'); name.textContent = f.label;
            const val = document.createElement('span'); val.textContent = f.get().toFixed(3);
            lab.appendChild(name); lab.appendChild(val);
            const inp = document.createElement('input');
            inp.type = 'range'; inp.min = String(f.min); inp.max = String(f.max); inp.step = String(f.step);
            inp.value = String(f.get()); inp.style.cssText = 'width:100%;';
            inp.addEventListener('input', () => { const v = parseFloat(inp.value); f.set(v); val.textContent = v.toFixed(3); });
            row.appendChild(lab); row.appendChild(inp); panelEl.appendChild(row);
            panelDump[f.label] = f.get;
          };
          const addColorRow = (panelEl: HTMLElement, label: string, color: any) => {
            const row = document.createElement('div');
            row.style.cssText = 'margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;';
            const name = document.createElement('span'); name.textContent = label;
            const inp = document.createElement('input');
            inp.type = 'color'; inp.value = '#' + color.getHexString();
            inp.style.cssText = 'width:48px;height:20px;padding:0;border:none;background:none;cursor:pointer;';
            inp.addEventListener('input', () => color.set(inp.value));
            row.appendChild(name); row.appendChild(inp); panelEl.appendChild(row);
            panelDump[label] = () => '#' + color.getHexString();
          };
          for (const f of fields) addSliderRow(panel, f);
          addColorRow(panel, 'sun.color', sun.color);
          addColorRow(panel, 'ambient.color', amb.color);

          // --- Floor material: base/emissive color + texture tiling ---------------
          const floorSub = document.createElement('div');
          floorSub.textContent = 'Floor material';
          floorSub.style.cssText = 'font-weight:bold;margin:10px 0 6px;font-size:12px;border-top:1px solid #444;padding-top:8px;';
          panel.appendChild(floorSub);
          addColorRow(panel, 'floor.color', mat.color);
          addColorRow(panel, 'floor.emissive', mat.emissive);
          addSliderRow(panel, { label: 'floor.emissiveInt', min: 0, max: 4, step: 0.05, get: () => mat.emissiveIntensity, set: (v) => (mat.emissiveIntensity = v) });
          // Texture tiling: repeat the albedo/normal/roughness maps together.
          const setFloorTile = (v: number) => {
            for (const t of [alb, nom, rough]) {
              if (!t) continue;
              t.wrapS = t.wrapT = THREE.RepeatWrapping;
              t.repeat.set(v, v);
              t.needsUpdate = true;
            }
          };
          addSliderRow(panel, { label: 'floor.tile', min: 0.1, max: 8, step: 0.1, get: () => (alb ? alb.repeat.x : 1), set: setFloorTile });
          addSliderRow(panel, { label: 'floor.z', min: -500, max: 300, step: 5,
            get: () => floorMesh.position.z,
            set: (v) => { floorMesh.position.z = v; floorMesh.updateMatrixWorld(true); } });
          const dl = document.createElement('button');
          dl.textContent = 'Download JSON';
          dl.style.cssText = 'width:100%;margin-top:6px;padding:6px;cursor:pointer;background:#3aa6c8;border:none;color:#fff;border-radius:5px;font:bold 11px monospace;';
          dl.addEventListener('click', () => {
            const out: Record<string, any> = {};
            for (const k of Object.keys(panelDump)) out[k] = panelDump[k]();
            const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'plaza-floor-settings.json';
            a.click();
            URL.revokeObjectURL(a.href);
          });
          panel.appendChild(dl);
          document.body.appendChild(panel);
          devPanel = panel;
        }

        // Birds-eye, angled camera. The constructor clamps polar angle and dolly
        // distance, so relax those, then frame the Mii from above-and-front.
        const controls = scene.getControls && scene.getControls();
        if (controls) {
          // Locked 2D-ish camera (long lens fov 15, fixed angle). The default frame
          // below is the most zoomed-out; you can only zoom IN, pan with arrow keys,
          // and NOT rotate. Extend the far plane so nothing clips at this distance.
          const cam: any = (controls as any).camera;
          if (cam && cam.isPerspectiveCamera) {
            cam.fov = 15;
            // Tight near/far for good depth precision (was 0.1/20000 → bad z-buffer
            // resolution → the FFL face decal z-fought the head). Camera distance maxes
            // ~1110 and content sits within a few hundred units, so this range is safe.
            cam.near = 30;
            cam.far = 3000;
            cam.updateProjectionMatrix();
          }

          // Discrete zoom levels from tuned presets. +/- buttons step between them;
          // index 0 = fully zoomed out, last = closest. Each pins polar angle, target
          // depth, dolly distance and fog. No free rotate, no wheel zoom.
          const ZOOM_LEVELS = [
            { polar: 69, targetZ: -65,  dist: 1110, fogNear: 1200, fogFar: 1440 },
            { polar: 75, targetZ: -145, dist: 1010, fogNear: 915,  fogFar: 1330 },
            { polar: 77, targetZ: -65,  dist: 610,  fogNear: 1200, fogFar: 1440 },
            { polar: 77, targetZ: -65,  dist: 330,  fogNear: 1200, fogFar: 1440 },
          ];
          let zoomLevel = 1; // start at "normal"
          const DIST_OUT = ZOOM_LEVELS[0].dist;
          const DIST_IN = ZOOM_LEVELS[ZOOM_LEVELS.length - 1].dist;
          const MAX_PAN = 150;          // ground pan range at the closest zoom
          let ox = 0, oz = 0;           // current pan offset (L/R, fwd/back)
          let panLimX = 0, panLimZ = 0; // pan limits — scale with zoom distance

          const sObjForFog: any = scene.getScene && scene.getScene();

          // Lock azimuth (no rotation around the plaza). Allow polar + distance to
          // span every level's range so transitions can animate within them (pinning
          // min==max per level would clamp-snap the value instead of easing).
          controls.minAzimuthAngle = 0;
          controls.maxAzimuthAngle = 0;
          const _polars = ZOOM_LEVELS.map((l) => l.polar * Math.PI / 180);
          controls.minPolarAngle = Math.min(..._polars);
          controls.maxPolarAngle = Math.max(..._polars);
          controls.minDistance = DIST_IN;
          controls.maxDistance = DIST_OUT;

          const applyLevel = (i: number, immediate = false) => {
            zoomLevel = Math.max(0, Math.min(ZOOM_LEVELS.length - 1, i));
            const L = ZOOM_LEVELS[zoomLevel];
            const polar = L.polar * Math.PI / 180;
            // Pan range grows as we zoom IN: 0 at the most-out level, MAX_PAN at closest.
            const t = (DIST_OUT - L.dist) / Math.max(1, DIST_OUT - DIST_IN);
            panLimX = MAX_PAN * t; panLimZ = MAX_PAN * t;
            ox = Math.max(-panLimX, Math.min(panLimX, ox));
            oz = Math.max(-panLimZ, Math.min(panLimZ, oz));
            // Pin angle + distance to this level (min==max → wheel can't change it).
            // 2nd arg = enableTransition: smooth on button clicks, instant on init.
            const smooth = !immediate;
            controls.rotateTo(0, polar, smooth);
            controls.dollyTo(L.dist, smooth);
            controls.moveTo(ox, 0, L.targetZ + oz, smooth);
            if (sObjForFog && sObjForFog.fog) { sObjForFog.fog.near = L.fogNear; sObjForFog.fog.far = L.fogFar; }
          };
          applyLevel(zoomLevel, true);

          // --- Live camera controls in the dev panel --------------------------------
          if (devPanel && cam) {
            const camTitle = document.createElement('div');
            camTitle.textContent = 'Camera';
            camTitle.style.cssText = 'font-weight:bold;margin:10px 0 6px;font-size:12px;border-top:1px solid #444;padding-top:8px;';
            devPanel.appendChild(camTitle);
            const camFields = [
              { label: 'cam.fov', min: 5, max: 60, step: 0.5, get: () => cam.fov, set: (v: number) => { cam.fov = v; cam.updateProjectionMatrix(); } },
            ];
            for (const f of camFields) {
              const row = document.createElement('div'); row.style.cssText = 'margin-bottom:6px;';
              const lab = document.createElement('label'); lab.style.cssText = 'display:flex;justify-content:space-between;';
              const name = document.createElement('span'); name.textContent = f.label;
              const val = document.createElement('span'); val.textContent = f.get().toFixed(2);
              lab.appendChild(name); lab.appendChild(val);
              const inp = document.createElement('input');
              inp.type = 'range'; inp.min = String(f.min); inp.max = String(f.max); inp.step = String(f.step);
              inp.value = String(f.get()); inp.style.cssText = 'width:100%;';
              inp.addEventListener('input', () => { const v = parseFloat(inp.value); f.set(v); val.textContent = v.toFixed(2); });
              row.appendChild(lab); row.appendChild(inp); devPanel.appendChild(row);
              panelDump[f.label] = f.get;
            }
          }

          // No mouse/touch camera control — zoom is the +/- buttons, pan is arrow keys.
          const ACTION = (controls.constructor as any).ACTION || {};
          controls.mouseButtons.left = ACTION.NONE ?? 0;
          controls.mouseButtons.right = ACTION.NONE ?? 0;
          controls.mouseButtons.wheel = ACTION.NONE ?? 0;
          controls.mouseButtons.middle = ACTION.NONE ?? 0;
          controls.touches.one = ACTION.NONE ?? 0;
          controls.touches.two = ACTION.NONE ?? 0;
          controls.touches.three = ACTION.NONE ?? 0;

          // Arrow keys pan, clamped to the current zoom's pan range (more room the
          // further you've zoomed in; none when fully zoomed out).
          const STEP = 8;
          const applyPan = () => {
            ox = Math.max(-panLimX, Math.min(panLimX, ox));
            oz = Math.max(-panLimZ, Math.min(panLimZ, oz));
            controls.moveTo(ox, 0, ZOOM_LEVELS[zoomLevel].targetZ + oz, true);
          };
          panKeyHandler = (e: KeyboardEvent) => {
            if (!plazaInRef.current) return; // only pan while the plaza is open
            let used = true;
            switch (e.key) {
              case 'ArrowLeft':  ox -= STEP; break;
              case 'ArrowRight': ox += STEP; break;
              case 'ArrowUp':    oz -= STEP; break;
              case 'ArrowDown':  oz += STEP; break;
              default: used = false;
            }
            if (used) { e.preventDefault(); e.stopPropagation(); applyPan(); }
          };
          // Capture phase so it beats the menu's arrow-key focus navigation.
          window.addEventListener('keydown', panKeyHandler, true);

          // On-screen +/- zoom buttons (the only way to change zoom level).
          const zoomUI = document.createElement('div');
          zoomUI.style.cssText = 'position:fixed;right:16px;bottom:96px;z-index:99990;display:none;flex-direction:column;gap:10px;';
          const mkZoomBtn = (txt: string) => {
            const b = document.createElement('button');
            b.textContent = txt;
            b.style.cssText = 'width:46px;height:46px;border-radius:50%;border:none;background:rgba(255,255,255,0.88);color:#222;font:bold 24px sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.3);user-select:none;';
            return b;
          };
          const plusBtn = mkZoomBtn('+');
          const minusBtn = mkZoomBtn('−');
          plusBtn.addEventListener('click', () => { playPlazaSfx('Zoom In.wav', 0.5); applyLevel(zoomLevel + 1); });  // + = zoom in
          minusBtn.addEventListener('click', () => { playPlazaSfx('Zoom out.wav', 0.5); applyLevel(zoomLevel - 1); }); // - = zoom out
          zoomUI.appendChild(plusBtn);
          zoomUI.appendChild(minusBtn);
          document.body.appendChild(zoomUI);
          zoomUiEl = zoomUI;
        }

        scene.resize();

        // NOTE: do NOT call focusCamera() — for setupType 0 it clamps the dolly
        // distance to maxDistance (35-40) and zooms onto the head, pushing the
        // body out of frame (you see head + the feet shadow only). The default
        // camera set up in the constructor already frames the full body.
        if (scene.setExpression) scene.setExpression(0);

        // Skinned Mii meshes have unreliable bounding volumes, so the three.js
        // frustum culler drops them and the canvas stays blank (no error).
        if (scene.getScene) {
          scene.getScene().traverse((obj: any) => {
            if (obj.isMesh) obj.frustumCulled = false;
          });
        }

        // ------------------------------------------------------------------
        // Multi-Mii crowd. The engine shares ONE body model across every
        // MiiRenderer (window.bodyModels), so live renderers can't each pose a
        // body. Instead every Mii is baked once (head + clothing), then its body
        // is SkeletonUtils-cloned into an independent skinned mesh with its own
        // AnimationMixer. The personal renderer becomes a plain renderer of the
        // shared scene; this tick drives every clone (personal + guests).
        // ------------------------------------------------------------------
        const mainScene = scene.getScene();

        // Independent skinned clone using the ENGINE's three (window.THREE). We
        // must NOT use the app's npm three/SkeletonUtils here: two three instances
        // are loaded, and mixing them silently breaks skeleton binding. This is
        // SkeletonUtils.clone's algorithm (identity-mapped bone remap, not by
        // name) reimplemented with engine three so each SkinnedMesh rebinds to the
        // exact cloned bone objects the mixer animates.
        const cloneSkinned = (src: any) => {
          const sourceLookup = new Map<any, any>();
          const cloneLookup = new Map<any, any>();
          const clone = src.clone(true);
          const par = (a: any, b: any) => {
            sourceLookup.set(b, a); cloneLookup.set(a, b);
            for (let i = 0; i < a.children.length; i++) par(a.children[i], b.children[i]);
          };
          par(src, clone);
          clone.traverse((node: any) => {
            if (!node.isSkinnedMesh) return;
            const sourceMesh = sourceLookup.get(node);
            const sourceBones = sourceMesh.skeleton.bones;
            node.skeleton = sourceMesh.skeleton.clone();
            node.bindMatrix.copy(sourceMesh.bindMatrix);
            node.skeleton.bones = sourceBones.map((b: any) => cloneLookup.get(b));
            node.bind(node.skeleton, node.bindMatrix);
          });
          return clone;
        };

        // --- Texture decoupling -------------------------------------------------
        // A cloned Mii survives its baker's disposal only if every texture it uses
        // has a CPU source: three re-uploads Canvas/Image-backed textures to the
        // main context automatically. The FFL face is the exception — it lives in a
        // WebGL render target (no CPU pixels), so disposing its baker would blank it.
        // Read those back into a CanvasTexture once, swap it in, THEN free the baker
        // — so peak live contexts stay at ~2 (personal + the one baking) instead of
        // one per Mii. That's what lifts the ~16-context ceiling.
        const isCpuBacked = (t: any) =>
          !!t && !t.isRenderTargetTexture && !!t.image &&
          (t.image.width > 0 || (t.image.data && t.image.data.length > 0));

        const _tcScene = new THREE.Scene();
        const _tcCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const _tcQuad = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          new THREE.MeshBasicMaterial({ depthTest: false, depthWrite: false }),
        );
        (_tcQuad.material as any).blending = THREE.NoBlending; // copy raw RGBA, no premultiply
        _tcScene.add(_tcQuad);

        // Render a GPU-only texture through a flat quad into a fresh target, read the
        // pixels back, and wrap them in a CanvasTexture (CPU-backed, context-portable).
        const readbackTexture = (gl: any, src: any): any => {
          const w = (src.image && src.image.width) || 256;
          const h = (src.image && src.image.height) || 256;
          const rt = new THREE.WebGLRenderTarget(w, h);
          (_tcQuad.material as any).map = src;
          (_tcQuad.material as any).needsUpdate = true;
          const prevRT = gl.getRenderTarget();
          gl.setRenderTarget(rt);
          gl.setClearColor(0x000000, 0);
          gl.clear(true, true, true);
          gl.render(_tcScene, _tcCam);
          const buf = new Uint8Array(w * h * 4);
          gl.readRenderTargetPixels(rt, 0, 0, w, h, buf);
          gl.setRenderTarget(prevRT);
          rt.dispose();
          // Keep readRenderTargetPixels' bottom-up rows as-is and read the texture
          // with flipY=false — matching the engine's face textures (also flipY=false,
          // GL bottom-up). Flipping rows here would invert the face (mouth on top).
          const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
          const ctx = cv.getContext('2d')!;
          const img = ctx.createImageData(w, h);
          img.data.set(buf);
          ctx.putImageData(img, 0, 0);
          const out = new THREE.CanvasTexture(cv);
          out.colorSpace = src.colorSpace;
          out.flipY = false;
          out.wrapS = src.wrapS; out.wrapT = src.wrapT;
          out.minFilter = src.minFilter; out.magFilter = src.magFilter;
          out.anisotropy = src.anisotropy || 1;
          out.needsUpdate = true;
          return out;
        };

        // Clone each material (so swaps can't leak onto the shared singleton body or
        // the next Mii baked through it), then replace any GPU-only texture — both
        // `.map` and ShaderMaterial sampler uniforms — with a CPU readback copy.
        const decoupleTextures = (gl: any, root: any, cache: Map<any, any>) => {
          root.traverse((o: any) => {
            if (!o.material) return;
            const fix = (t: any) => {
              if (!t || !t.isTexture || isCpuBacked(t)) return t;
              if (cache.has(t)) return cache.get(t);
              let cp = t;
              try { cp = readbackTexture(gl, t); } catch (e) { console.warn('[PLAZA] tex readback failed', e); }
              cache.set(t, cp);
              return cp;
            };
            const mats = Array.isArray(o.material) ? o.material : [o.material];
            const out = mats.map((m: any) => {
              const mat = m.clone ? m.clone() : m;
              if (mat.map) mat.map = fix(mat.map);
              if (mat.uniforms) {
                for (const k in mat.uniforms) {
                  const u = mat.uniforms[k];
                  if (u && u.value && u.value.isTexture) u.value = fix(u.value);
                }
              }
              mat.needsUpdate = true;
              return mat;
            });
            o.material = Array.isArray(o.material) ? out : out[0];
          });
        };

        type Member = {
          name: string; game: string;        // for the plaza Mii-detail panel
          body: any; head: any; mixer: any;
          actions: Map<string, any>; current: string;
          home: { x: number; z: number }; minR: number; radius: number; speed: number;
          state: 'idle' | 'walk' | 'chat'; x: number; z: number; tx: number; tz: number;
          idleUntil: number; miitomo: boolean;
          scaler: any; sf: any;
          // Interaction (only set on "social" Miis that can pair up and talk).
          social: boolean; faceMesh: any; faceClosed: any; faceOpen: any;
          partner: Member | null; chatUntil: number;     // when this chat ends
          talking: boolean; talkSwapUntil: number;        // whose turn to talk + when to hand off
          mouthUntil: number; mouthOpen: boolean;         // mouth toggle timer/state
          refl: { grp: any; pairs: { r: any; s: any }[] } | null; // ground reflection
          shadow: any; // soft ground shadow decal that follows the feet
          outline: any[] | null; // selection-outline hull meshes (lazy, toggled on focus)
        };
        const crowd: Member[] = [];
        // Body poses available for chatting (filtered per Mii to what its model has).
        const POSE_CLIPS = ['Pose.01', 'Pose.02', 'Pose.03', 'Pose.04', 'Pose.05'];

        // Ground reflection (legs only, like a wet/water floor).
        const REFLECTIONS = true;
        const REFL_OPACITY = 0.16;
        const REFL_LEG_FRAC = 0.28;  // reflect only the lower 28% of body height (legs)
        const LEG_NAME_RE = /leg|foot|shoe|knee|thigh|calf|shin|ankle/i; // legs-only meshes
        let reflClipReady = false;
        // Per-Mii reflection material: flat tint, translucent, clipped to that Mii's
        // own leg height (so tall and short Miis crop correctly), with a depth fade
        // (alpha → 0 toward the clip edge) for a soft, water-like reflection. All
        // these materials share one compiled program (identical shader source).
        const makeReflMat = (T: any, fadeDepth: number) => {
          const plane = new T.Plane(new T.Vector3(0, 1, 0), fadeDepth); // keep y >= -fadeDepth
          const mat = new T.MeshBasicMaterial({
            // depthTest ON so Miis passing in front occlude the reflection; depthWrite
            // OFF so reflections don't block each other or get z-order artifacts.
            color: 0x1b2530, transparent: true, opacity: REFL_OPACITY,
            depthWrite: false, depthTest: true, side: T.DoubleSide,
            clippingPlanes: [plane], fog: false,
          });
          mat.onBeforeCompile = (shader: any) => {
            shader.uniforms.uFadeDepth = { value: fadeDepth };
            shader.vertexShader = 'varying float vWY;\n' + shader.vertexShader.replace(
              '#include <project_vertex>',
              '#include <project_vertex>\n  vWY = (modelMatrix * vec4(transformed, 1.0)).y;',
            );
            shader.fragmentShader = 'uniform float uFadeDepth;\nvarying float vWY;\n' + shader.fragmentShader.replace(
              '#include <dithering_fragment>',
              '#include <dithering_fragment>\n  gl_FragColor.a *= clamp((vWY + uFadeDepth) / uFadeDepth, 0.0, 1.0);',
            );
          };
          return mat;
        };
        // Build a mirrored (scale.y=-1) skinned copy of a member's body that SHARES
        // its skeleton + geometry (so it animates for free), tinted/translucent and
        // clipped to the legs. matrixWorld = R * src.matrixWorld → correct planar
        // mirror across the floor; updated each frame in commitMember.
        const addReflection = (m: Member) => {
          if (!REFLECTIONS || !m.body) return;
          const T = (window as any).THREE; // engine three — must match the skeleton
          if (!T) return;
          if (!reflClipReady) {
            try { scene.getRenderer().localClippingEnabled = true; reflClipReady = true; } catch {}
          }
          // Per-Mii crop: clip + fade to THIS Mii's own leg height (feet at y=0, body
          // spans [0,H]; reflection spans [-H,0]; legs = part nearest 0).
          const box = new T.Box3().setFromObject(m.body);
          const H = Math.max(0.001, box.max.y - box.min.y);
          const reflMat = makeReflMat(T, H * REFL_LEG_FRAC);
          const grp = new T.Group();
          grp.matrixAutoUpdate = false;
          grp.matrix.makeScale(1, -1, 1);   // R: mirror across the floor (y = 0)
          grp.renderOrder = 2;
          scene.getScene().add(grp);
          const pairs: { r: any; s: any }[] = [];
          // Reflect only leg meshes (no clothing/upper body). Fall back to all meshes
          // if the body's naming doesn't match, so the reflection never disappears.
          const allSkinned: any[] = [];
          m.body.traverse((o: any) => { if (o.isSkinnedMesh) allSkinned.push(o); });
          if (!(window as any).__reflNamesLogged) {
            (window as any).__reflNamesLogged = true;
            console.log('[refl] body skinned mesh names:', allSkinned.map((o) => o.name));
          }
          let legMeshes = allSkinned.filter((o) => LEG_NAME_RE.test(o.name || ''));
          if (!legMeshes.length) legMeshes = allSkinned;
          for (const o of legMeshes) {
            const r = new T.SkinnedMesh(o.geometry, reflMat);
            // detached bindMode keeps bindMatrixInverse fixed (= bindMatrix⁻¹) instead
            // of being recomputed from matrixWorld each frame — which in attached mode
            // cancels matrixWorld and pins the copy onto the body. With it fixed and
            // matrixWorld = R·bindMatrix, the rendered position is R·(bone world) =
            // a true mirror across the floor. Animation rides the shared skeleton.
            r.bindMode = 'detached';
            r.bind(o.skeleton, o.bindMatrix);
            r.matrixAutoUpdate = false;
            r.matrix.copy(o.bindMatrix);     // → matrixWorld = grp(R) · bindMatrix
            r.frustumCulled = false;
            r.renderOrder = 2;
            grp.add(r);
            pairs.push({ r, s: o });
          }
          grp.updateMatrixWorld(true);       // bake R·bindMatrix onto each child (constant)
          m.refl = { grp, pairs };
        };

        // Per-Mii soft ground shadow: a radial decal flat on the floor that tracks the
        // Mii's feet each frame (replaces the engine's singleton shd.glb, which was
        // stuck at the origin). Added to the scene (not the body) so it's immune to the
        // body's proportion scale.
        const SHADOWS = true;
        const SHADOW_SIZE = 16;
        const SHADOW_OPACITY = 0.33;
        let shadowMat: any = null;
        const addShadow = (m: Member) => {
          if (!SHADOWS || !m.body) return;
          const T = (window as any).THREE;
          if (!T) return;
          if (!shadowMat) {
            shadowMat = new T.MeshBasicMaterial({
              map: makeRadialShadowTexture(T), color: 0x000000,
              transparent: true, opacity: SHADOW_OPACITY,
              depthWrite: false, fog: false,
            });
          }
          const s = new T.Mesh(new T.PlaneGeometry(SHADOW_SIZE, SHADOW_SIZE), shadowMat);
          s.rotation.x = -Math.PI / 2;       // lay flat on the ground
          s.position.set(m.x, 0.05, m.z);    // just above y=0 to avoid z-fighting
          s.frustumCulled = false;
          s.renderOrder = 1;                 // under the reflections/Miis, over the floor
          scene.getScene().add(s);
          s.updateMatrixWorld(true);
          m.shadow = s;
        };

        // Push the FFL face decal slightly toward the camera so it always wins the
        // depth test against the head surface (kills z-fighting at this long-lens fov).
        const polishFace = (m: Member) => {
          const fm = m.faceMesh || findFaceMesh(m.head);
          if (!fm || !fm.material) return;
          const mats = Array.isArray(fm.material) ? fm.material : [fm.material];
          for (const mat of mats) {
            mat.polygonOffset = true;
            mat.polygonOffsetFactor = -1;
            mat.polygonOffsetUnits = -1;
            mat.needsUpdate = true;
          }
        };

        // --- Selection outline (#12e9e4) -------------------------------------
        // A backface "hull": clone each Mii mesh, inflate it along its normals, and
        // draw only its back faces in the outline colour. The hull pokes out past
        // the silhouette as a rim; inside the silhouette the real mesh (nearer the
        // camera) wins the depth test and hides it. Skinned body hulls share the
        // body's skeleton so they animate for free (same trick as the reflection).
        const OUTLINE_COLOR = 0x12e9e4;
        const makeOutlineMat = (T: any, thick: number) => {
          const mat = new T.MeshBasicMaterial({ color: OUTLINE_COLOR, side: T.BackSide, fog: false });
          mat.onBeforeCompile = (sh: any) => {
            sh.uniforms.uThick = { value: thick };
            sh.vertexShader = 'uniform float uThick;\n' + sh.vertexShader.replace(
              '#include <begin_vertex>',
              '#include <begin_vertex>\n  transformed += normalize(normal) * uThick;'
            );
          };
          return mat;
        };
        const buildOutline = (m: Member) => {
          if (m.outline || !m.body) return;
          const T = (window as any).THREE;
          if (!T) return;
          const meshes: any[] = [];
          const addHull = (src: any, thick: number) => {
            if (!src.geometry) return;
            let h: any;
            if (src.isSkinnedMesh) {
              h = new T.SkinnedMesh(src.geometry, makeOutlineMat(T, thick));
              h.bind(src.skeleton, src.bindMatrix);
            } else {
              h = new T.Mesh(src.geometry, makeOutlineMat(T, thick));
            }
            h.matrixAutoUpdate = src.matrixAutoUpdate;
            h.matrixWorldAutoUpdate = true;
            h.matrix.copy(src.matrix);
            h.frustumCulled = false;
            h.renderOrder = (src.renderOrder || 0) - 1; // draw behind the real mesh
            h.visible = false;
            src.parent.add(h);
            meshes.push(h);
          };
          // Only outline what the Mii is actually wearing: skip meshes hidden by
          // their own .visible flag or any hidden ancestor group (the body model
          // carries every clothing variant; only the worn ones are visible).
          const isShown = (o: any, root: any): boolean => {
            let n = o;
            while (n && n !== root.parent) { if (n.visible === false) return false; n = n.parent; }
            return true;
          };
          // Non-clothing helpers in the body tree we never want to outline.
          const SKIP_RE = /persp|icosphere|shadow|caustic/i;
          const bbox = new T.Box3().setFromObject(m.body);
          const bThick = Math.max(0.12, (bbox.max.y - bbox.min.y) * 0.03);
          m.body.traverse((o: any) => {
            if (o.isMesh && o.geometry && isShown(o, m.body) && !SKIP_RE.test(o.name || '')) addHull(o, bThick);
          });
          if (m.head) {
            m.head.updateMatrixWorld(true);
            const hbox = new T.Box3().setFromObject(m.head);
            const hThick = Math.max(0.09, (hbox.max.y - hbox.min.y) * 0.085);
            // Average world scale of a face mesh → the world-space rim the face
            // shows. The hat lives under a differently-scaled "HatScene" group, so
            // its hull thickness (applied in local space) must be rescaled to that
            // same world rim, else the constant inflate vanishes at the hat's scale.
            const _ws = new T.Vector3();
            const avgScale = (o: any) => { o.getWorldScale(_ws); return (Math.abs(_ws.x) + Math.abs(_ws.y) + Math.abs(_ws.z)) / 3 || 1; };
            const faceRef = m.head.getObjectByName('Faceline') || m.head.getObjectByName('Hair');
            const faceWorldRim = hThick * (faceRef ? avgScale(faceRef) : 0.14);
            const underHatScene = (o: any) => {
              let p = o.parent; while (p && p !== m.head) { if ((p.name || '') === 'HatScene') return true; p = p.parent; } return false;
            };
            m.head.traverse((o: any) => {
              if (!o.isMesh || !o.geometry || !isShown(o, m.head)) return;
              // Skip the flat FFL face decal (modulateType 6 = mask): its hull is a
              // big quad that shows the face texture poking through the outline.
              if (o.geometry.userData && o.geometry.userData.modulateType === 6) return;
              const thick = underHatScene(o) ? faceWorldRim / avgScale(o) : hThick;
              addHull(o, thick);
            });
          }
          m.outline = meshes;
        };
        const setOutline = (m: Member | null, on: boolean) => {
          if (!m) return;
          if (on && !m.outline) buildOutline(m);
          if (m.outline) for (const h of m.outline) h.visible = on;
        };

        // The FFL face/mask mesh inside a MiiHead — the one the engine swaps in
        // setExpression (geometry.userData.modulateType === 6).
        const findFaceMesh = (head: any): any => {
          let face: any = null;
          if (head) head.traverse((o: any) => {
            if (face || !o.isMesh) return;
            const ud = o.geometry && o.geometry.userData;
            if (ud && ud.modulateType === 6) face = o;
          });
          return face;
        };

        // Capture one expression's face as a CPU CanvasTexture from a LIVE baker
        // (before its head is moved out / its context disposed). setExpression
        // re-renders the face async (fire-and-forget), so wait, then read it back.
        const captureFace = async (r: any, gl: any, expr: number): Promise<any> => {
          try {
            r.setExpression(expr);
            await new Promise((res) => setTimeout(res, 150));
            const fm = findFaceMesh(r.getHead && r.getHead());
            const map = fm && fm.material && fm.material.map;
            return map ? readbackTexture(gl, map) : null;
          } catch (e) { console.warn('[PLAZA] captureFace failed', e); return null; }
        };
        const _hv = new THREE.Vector3(), _hq = new THREE.Quaternion(), _hs = new THREE.Vector3();
        const _one = new THREE.Vector3(1, 1, 1);

        // Build an independent crowd member from a freshly-baked renderer.
        const cloneMember = (
          renderer: any, gender: number,
          home: { x: number; z: number }, minR: number, radius: number, speed: number,
          isStage = false,
        ): Member | null => {
          const rScene = renderer.getScene();
          const rootName = gender === 1 ? 'f-body-root' : 'm-body-root';
          const srcBody = rScene.getObjectByName(rootName);
          if (!srcBody) return null;

          // Apply THIS Mii's proportions (height/weight) to the shared body before
          // snapshotting. The engine does this every frame via the "zzz" animator;
          // guests never run a loop, so without this they'd inherit whoever last
          // posed the shared body. Run it once so the clone freezes the right scale.
          try { const zzz = renderer.animators && renderer.animators.get('zzz'); if (zzz) zzz(); } catch {}

          const body = cloneSkinned(srcBody);
          // The engine runs its singleton body with matrixWorldAutoUpdate OFF and
          // hand-updates it. clone(true) copies that flag onto every cloned bone, and
          // three r173's updateMatrixWorld(force) SKIPS recomputing matrixWorld on any
          // node with matrixWorldAutoUpdate=false even when force=true — so our bones'
          // locals animated but their world matrices (and thus the boneTexture) stayed
          // frozen at bind. Re-enable it so updateMatrixWorld(true) actually propagates.
          // The engine sets EACH bone's matrixAutoUpdate=false (src/main.ts:163) AND
          // runs the body with matrixWorldAutoUpdate off — it bakes pose into bone
          // .matrix by hand. clone(true) copies both flags. With matrixAutoUpdate
          // false, updateMatrix() never rebuilds bone.matrix from the mixer-written
          // .position/.quaternion, so updateMatrixWorld composes a stale .matrix and
          // the world stays at bind (locals animate, world frozen). Re-enable BOTH so
          // three's standard mixer→matrix→matrixWorld→boneTexture path runs per clone.
          body.traverse((o: any) => {
            o.matrixAutoUpdate = true;
            o.matrixWorldAutoUpdate = true;
            if (o.isMesh) o.frustumCulled = false;
          });

          // Per-Mii proportions (height/weight). The engine never bakes these once:
          // its per-frame animator runs mixer.update() THEN boneScaler.apply(...) so
          // the animation can't wipe them (src/main.ts:11821), plus an overall root
          // scale = scaleFactors via #G() (src/main.ts:12149). Now that our mixer is
          // live it overwrites the bone transforms every frame, so we must do the same:
          // (a) set the clone root scale, (b) build a clone-bound boneScaler (reuse the
          // engine's gZ class via an existing instance's ctor — it maps bones by name,
          // which our identity-named clone bones satisfy) and re-apply it each frame.
          const sf = renderer.scaleFactors;
          let scaler: any = null;
          if (sf) {
            // NOTE: do NOT set body.scale here. gZ.apply() bakes proportions straight
            // into each bone.matrix (src/main.ts:11326), and the clone already copied
            // the correct root scale from m-body-root. Setting root scale too would
            // compound with the per-bone scaling and shrink the whole body.
            let cloneMesh: any = null;
            body.traverse((o: any) => { if (!cloneMesh && o.isSkinnedMesh) cloneMesh = o; });
            const refBS = renderer.boneScaler && renderer.boneScaler.values().next().value;
            if (refBS && cloneMesh) {
              try {
                const GZ = refBS.constructor;
                scaler = new GZ(cloneMesh, { headBoneName: 'head', sklRootName: 'skl_root' }, renderer.bodyModel);
              } catch (e) { console.warn('[PLAZA] boneScaler clone failed', e); }
            }
          }
          const sfCopy = sf ? new THREE.Vector3(sf.x, sf.y, sf.z) : null;

          const head = rScene.getObjectByName('MiiHead');

          // Body + head go straight into the shared scene (mirrors the engine,
          // whose body-root + MiiHead both live at scene level). The body root
          // carries position + facing; the head is synced onto the neck bone.
          mainScene.add(body);
          if (head) mainScene.add(head);

          // Detach the shared singleton body + neutralise this renderer's per-Mii
          // animators so it can't fight over the body. On the on-screen (stage)
          // renderer we MUST keep "cameraControls" — it drives camera-controls'
          // per-frame update(); dropping it freezes the camera zoomed-in.
          if (srcBody.parent) srcBody.parent.remove(srcBody);
          const cam = renderer.animators && renderer.animators.get('cameraControls');
          renderer.animators = new Map();
          if (isStage && cam) renderer.animators.set('cameraControls', cam);

          // Own mixer with the shared body clips (Walk / Wait / Pose.*).
          const U = renderer.bodyModels && renderer.bodyModels.get(gender);
          const mixer = new THREE.AnimationMixer(body);
          const actions = new Map<string, any>();
          if (U && U.clips) U.clips.forEach((clip: any, name: string) => {
            actions.set(name, mixer.clipAction(clip, body));
          });
          const start = actions.has('Wait') ? 'Wait' : (actions.keys().next().value as string);
          if (start && actions.get(start)) actions.get(start).reset().play();

          return {
            name: '', game: '',
            body, head, mixer, actions, current: start,
            home, minR, radius, speed,
            state: 'idle', x: home.x, z: home.z, tx: home.x, tz: home.z,
            idleUntil: performance.now() + Math.random() * 1500,
            miitomo: renderer.bodyModel === 'miitomo',
            scaler, sf: sfCopy,
            social: false, faceMesh: null, faceClosed: null, faceOpen: null,
            partner: null, chatUntil: 0, talking: false, talkSwapUntil: 0,
            mouthUntil: 0, mouthOpen: false, refl: null, shadow: null, outline: null,
          };
        };

        const play = (m: Member, name: string) => {
          if (m.current === name || !m.actions.has(name)) return;
          const prev = m.actions.get(m.current);
          if (prev) prev.fadeOut(0.2);
          m.actions.get(name).reset().fadeIn(0.2).play();
          m.current = name;
        };

        // Talking = swap the face mask between the baked closed/open-mouth textures.
        const setMouth = (m: Member, open: boolean) => {
          if (!m.faceMesh || !m.faceMesh.material) return;
          const tex = open ? m.faceOpen : m.faceClosed;
          // Swap the bound texture only — both are non-null, so no USE_MAP define
          // change, so NO material.needsUpdate (that would recompile the shader each
          // flap). The renderer rebinds material.map every frame on its own.
          if (tex) m.faceMesh.material.map = tex;
          m.mouthOpen = open;
        };
        const randomPose = (m: Member): string => {
          const avail = POSE_CLIPS.filter((p) => m.actions.has(p));
          return avail.length ? avail[(Math.random() * avail.length) | 0] : 'Wait';
        };
        const beginChat = (a: Member, b: Member, now: number) => {
          const dur = now + 4000 + Math.random() * 4000;
          ([[a, b], [b, a]] as [Member, Member][]).forEach(([m, o]) => {
            m.state = 'chat'; m.partner = o; m.chatUntil = dur;
            m.talking = false; m.talkSwapUntil = now; m.mouthUntil = now;
            setMouth(m, false);
            play(m, randomPose(m));
          });
          a.talking = true; // someone opens the conversation
        };
        const endChat = (m: Member, now: number) => {
          m.state = 'idle'; m.partner = null;
          m.idleUntil = now + 800 + Math.random() * 2000;
          setMouth(m, false);
          play(m, 'Wait');
        };

        // Sync a member's floating MiiHead onto its body's neck bone each frame,
        // exactly as the engine's head animator does (scene-level, world space).
        const syncHead = (m: Member) => {
          if (!m.head) return;
          const bone = m.body.getObjectByName('head') || m.body.getObjectByName('Head');
          if (!bone) return;
          bone.updateMatrixWorld(true);
          bone.matrixWorld.decompose(_hv, _hq, _hs);
          m.head.position.copy(_hv);
          m.head.setRotationFromQuaternion(_hq);
          if (m.miitomo) { m.head.rotation.z -= Math.PI / 2; m.head.position.y += 0.05; }
        };

        const stepMember = (m: Member, now: number, dt: number) => {
          if (m.state === 'chat') {
            const p = m.partner;
            if (!p || p.state !== 'chat' || p.partner !== m || now >= m.chatUntil) {
              endChat(m, now);
            } else {
              // Face the partner; alternate who's talking; flap the talker's mouth.
              m.body.rotation.y = Math.atan2(p.x - m.x, p.z - m.z);
              if (now >= m.talkSwapUntil) {
                m.talking = !m.talking;
                m.talkSwapUntil = now + 1200 + Math.random() * 1500;
                if (!m.talking) setMouth(m, false);
              }
              if (m.talking && now >= m.mouthUntil) {
                setMouth(m, !m.mouthOpen);
                m.mouthUntil = now + 110 + Math.random() * 120;
              }
            }
          } else if (m.state === 'idle') {
            if (now >= m.idleUntil) {
              const ang = Math.random() * Math.PI * 2;
              const rr = m.minR + Math.random() * (m.radius - m.minR);
              m.tx = m.home.x + Math.cos(ang) * rr;
              m.tz = m.home.z + Math.sin(ang) * rr;
              m.body.rotation.y = Math.atan2(m.tx - m.x, m.tz - m.z);
              m.state = 'walk';
              play(m, 'Walk');
            }
          } else {
            const dx = m.tx - m.x, dz = m.tz - m.z;
            const dist = Math.hypot(dx, dz);
            const stp = m.speed * dt;
            if (dist <= stp) {
              m.x = m.tx; m.z = m.tz; m.state = 'idle';
              m.idleUntil = now + 1500 + Math.random() * 3000;
              play(m, 'Wait');
            } else {
              m.x += (dx / dist) * stp; m.z += (dz / dist) * stp;
            }
          }
        };

        // Commit a member's resolved position + animation to the GPU. Split from
        // stepMember so collision separation can adjust x/z AFTER the movement logic
        // but BEFORE the transform/matrix/head are baked for the frame.
        const commitMember = (m: Member, dt: number) => {
          m.body.position.set(m.x, 0, m.z);
          m.mixer.update(dt);
          // Re-impose per-Mii proportions on top of the animation, exactly as the
          // engine's "mix" animator does (mixer.update → boneScaler.apply) so the
          // walk/idle clips don't reset height/weight to the default body each frame.
          if (m.scaler && m.sf) { try { m.scaler.apply(m.sf, _one); } catch {} }
          // The shared scene has matrixWorldAutoUpdate off (the engine updates its
          // own objects by hand), so the mixer moves bone *locals* but their world
          // matrices stay stale and GPU skinning never deforms. Force the update.
          m.body.updateMatrixWorld(true);
          syncHead(m);
          // Reflection needs no per-frame matrix work: its matrixWorld (R·bindMatrix)
          // is constant and the mirrored pose rides the shared skeleton's bone matrices.
          if (m.shadow) {
            m.shadow.position.set(m.x, 0.05, m.z);
            m.shadow.updateMatrixWorld(true); // scene autoupdate is off
          }
        };

        // Personal Mii = member 0, wandering the centre. isStage=true keeps the
        // camera-controls animator alive on the on-screen renderer.
        const personalMember = cloneMember(scene, (miiInstance as any).gender, { x: 0, z: 0 }, 8, 28, 7, true);
        if (personalMember) {
          personalMember.name = (miiInstance as any).name || (miiInstance as any).miiName || 'Your Mii';
          personalMember.game = 'Wii U Menu';
          crowd.push(personalMember); addReflection(personalMember); addShadow(personalMember); polishFace(personalMember);
          // Wire click-to-talk for the personal Mii too: closed = the live face map,
          // open = a CPU snapshot of expression 6 captured from the on-screen baker.
          const pfm = findFaceMesh(personalMember.head);
          if (pfm && pfm.material) {
            personalMember.faceMesh = pfm;
            personalMember.faceClosed = pfm.material.map;
            try {
              personalMember.faceOpen = await captureFace(scene, scene.getRenderer(), 6);
              scene.setExpression(0);
            } catch (e) { console.warn('[PLAZA] personal faceOpen capture failed', e); }
          }
        }

        // ---- Plaza Mii focus: click a Mii → camera zooms onto it, it turns to
        // face the camera, and a speech bubble tracks its head. ----------------
        let focusedM: Member | null = null;
        let focusedTile = false;     // a floating game icon is focused (no Mii)
        let bubbleEl: HTMLElement | null = null;
        let savedCam: any = null;
        const _camW = new THREE.Vector3();
        const _headV = new THREE.Vector3();
        const FOCUS_DIST = 150;       // how close the camera dollies in
        const FOCUS_TARGET_Y = 16;    // aim at mid-body so the head sits high in frame
        const TILE_TARGET_Y = 30;     // floating icons sit higher than Miis (fallback)
        const TILE_DIST = 244;        // dolly distance when focusing an icon
        const TILE_TDX = 14;          // look-at X/Y nudge to frame the icon nicely
        const TILE_TDY = -4;
        const HEAD_Y = 34;            // approx head world height for bubble anchoring

        // Shared camera focus: save current view (once), then dolly onto a point.
        const focusAt = (x: number, y: number, z: number, dist: number) => {
          const controls: any = scene.getControls && scene.getControls();
          if (!controls) return;
          if (!savedCam) {
            const t = controls.getTarget(new THREE.Vector3());
            savedCam = { tx: t.x, ty: t.y, tz: t.z, dist: controls.distance, minD: controls.minDistance };
          }
          controls.minDistance = 0;
          controls.moveTo(x, y, z, true);
          controls.dollyTo(dist, true);
        };
        // Stop a Mii talking (on deselect or switching targets). The selection
        // outline is hover-driven (handlePlazaHover), not tied to focus.
        const unfocusMember = (prev: Member | null) => {
          if (!prev) return;
          prev.talking = false;
          setMouth(prev, false);
          if (prev.state !== 'chat') play(prev, 'Wait');
        };
        const focusMember = (m: Member) => {
          if (focusedM && focusedM !== m) unfocusMember(focusedM);
          focusedTile = false;
          focusedM = m;
          focusAt(m.x, FOCUS_TARGET_Y, m.z, FOCUS_DIST);
          // Start talking (mouth flap driven in the tick loop).
          m.talking = true;
          m.mouthUntil = 0;
          play(m, randomPose(m)); // talk gesture (falls back to 'Wait' if no poses)
        };
        const focusTile = (t: any) => {
          if (focusedM) unfocusMember(focusedM);
          focusedM = null;
          focusedTile = true;
          if (bubbleEl) bubbleEl.style.opacity = '0'; // icons have no speech bubble
          focusAt((t.cx ?? t.x) + TILE_TDX, (t.cy ?? TILE_TARGET_Y) + TILE_TDY, t.cz ?? t.z, TILE_DIST);
        };
        const clearFocusM = () => {
          unfocusMember(focusedM);
          focusedM = null;
          focusedTile = false;
          if (bubbleEl) bubbleEl.style.opacity = '0';
          const controls: any = scene.getControls && scene.getControls();
          if (savedCam && controls) {
            controls.minDistance = savedCam.minD;
            controls.moveTo(savedCam.tx, savedCam.ty, savedCam.tz, true);
            controls.dollyTo(savedCam.dist, true);
          }
          savedCam = null;
        };
        const updateBubble = () => {
          if (!focusedM || !bubbleEl) return;
          const controls: any = scene.getControls && scene.getControls();
          const el = plazaCanvasContainerRef.current;
          if (!controls || !controls.camera || !el) return;
          _headV.set(focusedM.x, HEAD_Y, focusedM.z);
          _headV.project(controls.camera);
          const rect = el.getBoundingClientRect();
          const sx = (_headV.x * 0.5 + 0.5) * rect.width;
          const sy = (-_headV.y * 0.5 + 0.5) * rect.height;
          // Scale the bubble with the camera zoom: on-screen Mii size ∝ 1/distance,
          // so the bubble grows as the camera dollies in and shrinks as it pulls out.
          const dist = controls.distance || FOCUS_DIST;
          const scale = Math.max(0.25, Math.min(2.4, 290 / dist));
          bubbleEl.style.left = sx + 'px';
          bubbleEl.style.top = sy + 'px';
          bubbleEl.style.transform = `translate(-50%, 60%) scale(${scale})`;
          bubbleEl.style.opacity = _headV.z < 1 ? '1' : '0';
        };

        // Expose the picking + focus API to the React click handler / panel.
        {
          const _c: any = scene.getControls && scene.getControls();
          plazaPickRef.current = {
            camera: _c && _c.camera, crowd, THREE, tiles,
            focus: focusMember, focusTile, clearFocus: clearFocusM,
            setBubble: (el: any) => { bubbleEl = el; },
            setOutline,
          };
        }

        // ---- Ambient chatter: random Miis say a line about the app they stand
        // under, in the same bubble style. ------------------------------------
        const APP_ICONS: Record<string, string> = {
          'Mii Maker': '/local-assets/icons/Mii Maker.png',
          'Eaglercraft': '/local-assets/icons/eaglercraft.png',
          'Nintendo eShop': '/local-assets/icons/ESHOP ICON.png',
        };
        const MAX_BUBBLES = 4;
        const BUBBLE_MS = 4200;
        const ambient: { el: HTMLElement; m: Member; until: number }[] = [];
        let nextSpawn = 0;
        const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        const spawnAmbient = (now: number) => {
          const layer = plazaBubbleLayerRef.current;
          if (!layer) return;
          const used = new Set(ambient.map((a) => a.m));
          const cands = crowd.filter(
            (m) => m && m !== focusedM && !used.has(m) && m.state !== 'walk' && MII_APP_MESSAGES[m.game],
          );
          if (!cands.length) return;
          const m = cands[(Math.random() * cands.length) | 0];
          const msgs = MII_APP_MESSAGES[m.game];
          const msg = msgs[(Math.random() * msgs.length) | 0];
          const icon = APP_ICONS[m.game];
          const el = document.createElement('div');
          el.className = 'absolute z-30 drop-shadow-lg pointer-events-none';
          el.style.cssText = 'left:0;top:0;transform-origin:top center;opacity:0;will-change:left,top,transform;';
          el.innerHTML =
            `<div class="absolute -top-3 left-2 bg-[#222] text-white text-[11px] font-bold px-3 py-0.5 rounded-full z-30 shadow-md border border-[#444] tracking-wide whitespace-nowrap">${esc(m.name || 'Mii')}</div>` +
            `<div class="bg-white/55 backdrop-blur-md rounded-[22px] p-2 pr-4 flex items-center gap-2 relative border border-white/50 max-w-[230px]">` +
            `<div class="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white/55 backdrop-blur-md rotate-45 border-r border-b border-white/50"></div>` +
            (icon
              ? `<div class="w-[40px] h-[40px] bg-white/40 border border-white/50 rounded-[12px] flex items-center justify-center p-[2px] shadow-sm overflow-hidden shrink-0"><img src="${icon}" class="w-full h-full object-cover rounded-[9px]"/></div>`
              : '') +
            `<span class="text-black text-[13px] font-medium leading-snug">${esc(msg)}</span>` +
            `</div>`;
          layer.appendChild(el);
          ambient.push({ el, m, until: now + BUBBLE_MS });
          // A Mii with a bubble over its head "says" two lines.
          playMiiVoice(0.45);
          setTimeout(() => playMiiVoice(0.45), 170);
        };

        const updateAmbient = (now: number) => {
          const controls: any = scene.getControls && scene.getControls();
          const host = plazaCanvasContainerRef.current;
          if (!controls || !controls.camera || !host) return;
          const rect = host.getBoundingClientRect();
          const dist = controls.distance || 600;
          // Scale with zoom but keep a floor so bubbles stay readable at the
          // normal (zoomed-out) plaza distance, with a modest cap so they don't
          // balloon when the camera is dollied in.
          const scale = Math.max(1.3, Math.min(2.2, 1200 / dist));
          for (let i = ambient.length - 1; i >= 0; i--) {
            const a = ambient[i];
            if (now >= a.until || a.m === focusedM) { a.el.remove(); ambient.splice(i, 1); continue; }
            _headV.set(a.m.x, HEAD_Y, a.m.z);
            _headV.project(controls.camera);
            if (_headV.z > 1) { a.el.style.opacity = '0'; continue; }
            a.el.style.left = ((_headV.x * 0.5 + 0.5) * rect.width) + 'px';
            a.el.style.top = ((-_headV.y * 0.5 + 0.5) * rect.height) + 'px';
            // Sit above the head so the bubble's tail points down at it.
            a.el.style.transform = `translate(-50%, -95%) scale(${scale})`;
            a.el.style.opacity = '1';
          }
        };
        const clearAmbient = () => { for (const a of ambient) a.el.remove(); ambient.length = 0; };

        {
          let last = performance.now();
          let nextPairScan = 0;
          let lastFoot = 0;       // throttle for ambient footstep SFX
          const CHAT_DIST = 40;   // how close two idle social Miis must be to start talking
          const COLLISION_R = 7;  // min center-to-center spacing before they push apart
          const tick = () => {
            if (cancelled) return;
            wanderRaf = requestAnimationFrame(tick);
            const now = performance.now();
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;

            // Pair up nearby idle social Miis into a chat (throttled, not every frame).
            if (now >= nextPairScan) {
              nextPairScan = now + 700;
              const free = crowd.filter((m) => m.social && m.state === 'idle' && !m.partner);
              for (let i = 0; i < free.length; i++) {
                const a = free[i];
                if (a.partner) continue;
                for (let j = i + 1; j < free.length; j++) {
                  const b = free[j];
                  if (b.partner) continue;
                  if (Math.hypot(a.x - b.x, a.z - b.z) < CHAT_DIST && Math.random() < 0.5) {
                    beginChat(a, b, now);
                    break;
                  }
                }
              }
            }

            if (zoomUiEl) zoomUiEl.style.display = plazaInRef.current ? 'flex' : 'none';

            // Focused Mii freezes in place and turns to face the camera; every
            // other Mii keeps wandering.
            for (const m of crowd) { if (m === focusedM) continue; stepMember(m, now, dt); }
            if (focusedM) {
              const controls: any = scene.getControls && scene.getControls();
              if (controls && controls.camera) {
                controls.camera.getWorldPosition(_camW);
                focusedM.body.rotation.y = Math.atan2(_camW.x - focusedM.x, _camW.z - focusedM.z);
              }
              // Talking: flap the mouth open/closed while selected (stepMember, which
              // normally drives chat flapping, is skipped for the focused Mii).
              if (focusedM.talking && focusedM.faceOpen && now >= focusedM.mouthUntil) {
                setMouth(focusedM, !focusedM.mouthOpen);
                focusedM.mouthUntil = now + 110 + Math.random() * 120;
              }
            }

            // --- Simple collision: push overlapping Miis apart (circle separation).
            // O(n²) but n≈101 → ~5k cheap checks, nothing vs the draw cost. The
            // focused Mii is anchored (never pushed) so its bubble stays put. ---
            for (let i = 0; i < crowd.length; i++) {
              const a = crowd[i];
              if (a === focusedM) continue;
              for (let j = i + 1; j < crowd.length; j++) {
                const b = crowd[j];
                if (b === focusedM) continue;
                const dx = b.x - a.x, dz = b.z - a.z;
                const d2 = dx * dx + dz * dz;
                if (d2 < COLLISION_R * COLLISION_R && d2 > 1e-4) {
                  const d = Math.sqrt(d2);
                  const push = (COLLISION_R - d) / 2;
                  const nx = dx / d, nz = dz / d;
                  a.x -= nx * push; a.z -= nz * push;
                  b.x += nx * push; b.z += nz * push;
                }
              }
            }

            for (const m of crowd) commitMember(m, dt);
            updateBubble();

            // Ambient app chatter — only while the plaza is open.
            if (plazaInRef.current) {
              if (now >= nextSpawn && ambient.length < MAX_BUBBLES) {
                spawnAmbient(now);
                nextSpawn = now + 1400 + Math.random() * 1800;
              }
              updateAmbient(now);
              // Ambient footsteps while anyone is walking (throttled).
              if (now - lastFoot > 240 && crowd.some((m) => m.state === 'walk')) {
                playFootstep();
                lastFoot = now + Math.random() * 140;
              }
            } else if (ambient.length) {
              clearAmbient();
            }

            // --- Featured-game tiles: gentle up/down bob only (no spin) ---
            for (const t of tiles) {
              t.mesh.position.y = t.baseY + Math.sin(now * 0.0015 + t.phase) * 3;
            }

          };
          tick();
        }

        // Load the featured-game tiles and the Guest Mii crowd in the background
        // so the personal Mii + plaza appear immediately. Guests are baked one at
        // a time: concurrent FFL/clothing bakes share WebGL state and blank each
        // other out (only the last survives) — sequencing keeps every body visible.
        const THREE2 = (window as any).THREE;
        const loadExtras = async () => {
          if (!THREE2 || !scene.getScene) return;
          const mainScene = scene.getScene();

          tileGroup = new THREE2.Group();
          tileGroup.name = 'PlazaTiles';
          mainScene.add(tileGroup);

          const { ColladaLoader } = await import('three/examples/jsm/loaders/ColladaLoader.js');
          const DAE_URL = '/local-assets/models/floating-icon/Cube01.dae';
          const tileEnvMap = makeTileEnvMap(THREE2);          // reflections for the glass
          const glassSurfaceTex = makeGlassSurfaceTexture(THREE2); // glints + sheen

          const makeTileTexture = async (tile: PlazaTile) => {
            if (tile.kind === 'browser') return createBrowserIconTexture(THREE2);
            if (tile.kind === 'settings') return createSettingsIconTexture(THREE2);
            const tex = await new Promise<any>((res, rej) =>
              new THREE2.TextureLoader().load(tile.src!, res, undefined, rej));
            if ('colorSpace' in tex) tex.colorSpace = THREE2.SRGBColorSpace;
            return tex;
          };

          // Tiles — independent DAE loads (cloning a single Collada scene hits a
          // three.js shallow-clone bug), each with its own app-icon texture.
          for (let i = 0; i < PLAZA_TILES.length; i++) {
            if (cancelled) return;
            const tile = PLAZA_TILES[i];
            try {
              const map = await makeTileTexture(tile);
              const collada: any = await new ColladaLoader().loadAsync(DAE_URL);
              if (cancelled) return;
              const model = collada.scene;
              let shadowTex: any = null;
              // ColladaLoader leaves material names blank here, so classify by the
              // MESH name (DAE node names like Icon__m_Icon / FrontCover__m_CoverFront
              // / shadow__m_Shadow). The plaza is unlit, so use MeshBasic (the icon's
              // app texture, the cube's own map otherwise) and keep the cover glassy.
              model.traverse((o: any) => {
                if (!o.isMesh) return;
                o.frustumCulled = false;
                const name = o.name || '';
                const isGroundMesh = /shadow|caustic/i.test(name);
                const isIconMesh = /icon/i.test(name);
                const isCoverMesh = /cover/i.test(name);
                if (isIconMesh) o.scale.multiplyScalar(1.25); // a bit bigger logo
                const mats = Array.isArray(o.material) ? o.material : [o.material];
                if (isGroundMesh) {
                  // Shadow/caustics ride under the tile; grab the shadow texture for
                  // the floor decal, then hide them in the floating copy.
                  for (const m of mats) {
                    if (/shadow/i.test(name) && m && m.map && !shadowTex) shadowTex = m.map;
                  }
                  o.visible = false;
                  return;
                }
                const toBasic = (m: any) => {
                  if (!m) return m;
                  if (isCoverMesh) {
                    // Clear, reflective liquid glass: no albedo (see-through to the
                    // icon), reflections from the env cube map, light additive shine.
                    // Real refractive glass: transmission renders what's behind the
                    // cover (the icon) distorted by ior/thickness; env map adds the
                    // mirror; the glints/sheen texture rides on top as emissive.
                    const glass = new THREE2.MeshPhysicalMaterial({
                      color: 0xffffff, // white = no color tint on the transmitted icon
                      metalness: 0,
                      roughness: 0.02,
                      transmission: 1.0,
                      ior: 1.3,
                      thickness: 5,
                      envMap: tileEnvMap,
                      envMapIntensity: 0.85,
                      emissive: new THREE2.Color(0xffffff),
                      emissiveMap: glassSurfaceTex,
                      emissiveIntensity: 0.45,
                      fog: true,
                    });
                    return glass;
                  }
                  const srcMap = isIconMesh ? map : (m.map || m.emissiveMap || m.specularMap || null);
                  if (srcMap && 'colorSpace' in srcMap) {
                    // Icon = sRGB (keep the logo saturated); cube body = linear (floor).
                    srcMap.colorSpace = isIconMesh ? THREE2.SRGBColorSpace : THREE2.LinearSRGBColorSpace;
                    srcMap.needsUpdate = true;
                  }
                  const basic = new THREE2.MeshBasicMaterial({
                    map: srcMap || null,
                    color: 0xffffff,
                    side: m.side,
                    fog: true,
                  });
                  if (isIconMesh) {
                    basic.transparent = false;
                    basic.depthWrite = true;
                  } else {
                    basic.transparent = !!m.transparent;
                    basic.alphaTest = m.alphaTest || 0;
                  }
                  return basic;
                };
                o.material = Array.isArray(o.material) ? o.material.map(toBasic) : toBasic(o.material);
              });

              // Frame + scale on the visible (floating) meshes only, then bob it high.
              const box = new THREE2.Box3();
              model.traverse((o: any) => { if (o.isMesh && o.visible) box.expandByObject(o); });
              const center = box.getCenter(new THREE2.Vector3());
              const size = box.getSize(new THREE2.Vector3());
              model.position.sub(center);
              const maxDim = Math.max(size.x, size.y, size.z) || 1;
              model.scale.setScalar(42 / maxDim);
              const holder = new THREE2.Group();
              holder.add(model);
              const baseY = 30;
              holder.position.set(tile.x, baseY, tile.z);
              tileGroup.add(holder);
              // True visible-content world center for click/hover picking. The
              // centering above (sub(center) before scale) leaves the icon offset
              // from the holder origin, so sampling baseY=30 picks too low. Expand
              // over VISIBLE meshes only — the hidden ground/shadow plane sits low
              // and would drag the center down (Box3.setFromObject ignores .visible).
              holder.updateMatrixWorld(true);
              const wbox = new THREE2.Box3();
              holder.traverse((o: any) => { if (o.isMesh && o.visible) wbox.expandByObject(o); });
              const wc = wbox.getCenter(new THREE2.Vector3());
              // Empirical +47 world-Y lift: the visible logo the user reads as "the
              // icon" sits well above the cube's AABB center, so the bare center
              // picks/aims too low. Tuned via the in-app hitbox editor.
              const ICON_HIT_Y = 47;
              tiles.push({ mesh: holder, baseY, phase: i * 1.3, name: tile.name, x: tile.x, z: tile.z, cx: wc.x, cy: wc.y + ICON_HIT_Y, cz: wc.z });

              // Ground shadow decal. The model's CubeShadow texture is a quarter
              // (built to be mirrored 4x in the original rig) so it reads broken on a
              // flat plane — use the full radial soft shadow instead.
              void shadowTex;
              const shadowMap = makeRadialShadowTexture(THREE2);
              const decalMat = new THREE2.MeshBasicMaterial({
                map: shadowMap, transparent: true, opacity: 0.55,
                depthWrite: false, color: 0x000000,
              });
              const decal = new THREE2.Mesh(new THREE2.PlaneGeometry(48, 48), decalMat);
              decal.rotation.x = -Math.PI / 2;
              decal.position.set(tile.x, 0.5, tile.z);
              decal.renderOrder = -1;
              tileGroup.add(decal);
            } catch (e) {
              console.error('[WelcomeScreen] Failed to load tile:', tile.name, e);
            }
          }

          // Guests — sequential bake, then add each scene to the main scene.
          // Bakers are disposed right after each clone (textures copied to CPU), so
          // live contexts never pile up — push well past the old ~16 ceiling.
          // Crowd size is driven by the System Settings → Performance section.
          // Ultra 100 / High 70 / Medium 45 (default) / Low 20 guest Miis.
          const PERF_MII: Record<string, number> = { ultra: 100, high: 70, medium: 45, low: 20 };
          let perfLevel = 'medium';
          try { perfLevel = localStorage.getItem('wiiuPerformance') || 'medium'; } catch {}
          const GUEST_COUNT = PERF_MII[perfLevel] ?? 45; // guests + 1 personal, all full 3D
          // Fraction of guests that can pair up and talk. Each social Mii costs one
          // extra ~300ms expression bake at load, so keep it modest.
          const SOCIAL_FRACTION = 0.5;
          for (let i = 0; i < GUEST_COUNT; i++) {
            if (cancelled) return;
            const tile = PLAZA_TILES[i % PLAZA_TILES.length];
            const a = (i / GUEST_COUNT) * Math.PI * 2;
            const home = { x: tile.x + Math.cos(a) * 8, z: tile.z + Math.sin(a) * 8 };
            const hidden = document.createElement('div');
            hidden.style.cssText =
              'position:absolute;left:-9999px;top:-9999px;width:96px;height:96px;pointer-events:none;opacity:0;';
            document.body.appendChild(hidden);
            try {
              const miiInstance = new w.Mii(GUEST_MII_DATA[i % GUEST_MII_DATA.length], 1);
              const editorStub = { source: 0, enableUI: () => {}, ui: { mii: { qsa: () => [] } } };
              const r = new w.MiiRenderer(miiInstance, hidden, 0, undefined, false, editorStub);
              // Stop its own render loop immediately — it's only used to bake.
              r.stopAnimating = true;
              await r.init();
              if (cancelled) { try { r.shutdown(); } catch {} hidden.remove(); return; }
              // Same head/clothing finalize dance as the personal Mii (see above):
              // pre-set headReady, build head, let the FFL readback settle, unbind
              // the PIXEL_PACK buffer, then bake clothing once cleanly.
              r.headReady = true;
              if (r.updateMiiHead) await r.updateMiiHead();
              // FFL renders the face async; wait for it to settle before readback.
              // 150ms works; bump back toward 350 if any face comes out blank/half-baked.
              await new Promise((res) => setTimeout(res, 150));
              if (cancelled) { try { r.shutdown(); } catch {} hidden.remove(); return; }
              r.needsClothingUpdate = false;
              try {
                const gl = r.getRenderer().getContext();
                if (gl && gl.PIXEL_PACK_BUFFER !== undefined) gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
              } catch {}
              if (r.updateBody) await r.updateBody(1);
              if (cancelled) { try { r.shutdown(); } catch {} hidden.remove(); return; }

              // Hide the stray body Icosphere on the source so the clone inherits it.
              r.getScene().traverse((o: any) => {
                if (o.isMesh && /icosphere/i.test(o.name || '')) o.visible = false;
              });

              // Capture the open-mouth face NOW — while the head is still in the baker
              // scene and its context is alive — then restore the closed mouth so the
              // clone's default is closed. Every Mii gets this so clicking any of them
              // makes it talk; `social` only gates ambient pair-up chatter.
              const gl = r.getRenderer();
              const social = Math.random() < SOCIAL_FRACTION;
              const faceOpen = await captureFace(r, gl, 6);  // 6 = Normal (open mouth)
              r.setExpression(0);                            // restore Normal for the clone
              await new Promise((res) => setTimeout(res, 150));

              // Clone this baked Mii into an independent crowd member at its tile.
              // Wide roam radius so guests drift between icon areas and chat across
              // them, not just within their spawn cluster.
              const member = cloneMember(r, (miiInstance as any).gender, home, 6, 55, 6);
              if (member) {
                member.name = (miiInstance as any).name || (miiInstance as any).miiName || `Guest ${String.fromCharCode(65 + (i % GUEST_MII_DATA.length))}`;
                member.game = tile.name;
                crowd.push(member);
                // Copy this Mii's GPU-only textures (FFL face) to CPU CanvasTextures,
                // then free the baker's WebGL context entirely. The clone now owns
                // CPU-backed textures the main context re-uploads on its own, so we
                // never accumulate live contexts → no ~16-Mii cap.
                try {
                  const cache = new Map<any, any>();
                  decoupleTextures(gl, member.body, cache);
                  if (member.head) decoupleTextures(gl, member.head, cache);
                  // Wire talking: closed face = the decoupled map now on the head.
                  // faceOpen on every Mii (click-to-talk); social gates pairing only.
                  if (faceOpen) {
                    const fm = findFaceMesh(member.head);
                    if (fm && fm.material) {
                      member.social = social;
                      member.faceMesh = fm;
                      member.faceClosed = fm.material.map;
                      member.faceOpen = faceOpen;
                    }
                  } else {
                    member.social = social;
                  }
                  gl.dispose();
                  gl.forceContextLoss && gl.forceContextLoss();
                } catch (e) { console.warn('[PLAZA] baker decouple/dispose failed for #' + i, e); }
                addReflection(member);
                addShadow(member);
                polishFace(member);
              }
              hidden.remove();
            } catch (e) {
              console.error('[WelcomeScreen] Failed to load Guest Mii #' + i, e);
              hidden.remove();
            }
            // Each bake is fully awaited and its baker disposed before we continue,
            // so no fixed gap is needed — just yield one frame so the disposed GL
            // context's teardown lands and the UI stays responsive during load.
            await new Promise((res) => requestAnimationFrame(() => res(null)));
          }
        };
        loadExtras().catch((e) => console.error('[WelcomeScreen] loadExtras failed:', e));
      } catch (err) {
        console.error("[WelcomeScreen] Failed to render Mii:", err);
      }
    })();

    return () => {
      cancelled = true;
      if (wanderRaf) cancelAnimationFrame(wanderRaf);
      if (panKeyHandler) window.removeEventListener('keydown', panKeyHandler, true);
      if (devPanel) { devPanel.remove(); devPanel = null; }
      if (zoomUiEl) { zoomUiEl.remove(); zoomUiEl = null; }
      if (floorMesh) {
        try {
          floorMesh.parent && floorMesh.parent.remove(floorMesh);
          floorMesh.traverse((o: any) => {
            o.geometry && o.geometry.dispose();
            if (o.material) {
              o.material.map && o.material.map.dispose();
              o.material.dispose();
            }
          });
        } catch (e) {
          console.error("Error disposing floor:", e);
        }
      }
      // Guest Miis: detach their scenes and shut down their renderers/canvases.
      for (const g of guests) {
        try {
          g.scene && g.scene.parent && g.scene.parent.remove(g.scene);
          if (g.renderer && typeof g.renderer.shutdown === 'function') g.renderer.shutdown();
          g.hidden && g.hidden.remove();
        } catch (e) {
          console.error("Error disposing Guest Mii:", e);
        }
      }
      // Featured-game tiles: dispose geometries, materials and textures.
      if (tileGroup) {
        try {
          tileGroup.parent && tileGroup.parent.remove(tileGroup);
          tileGroup.traverse((o: any) => {
            o.geometry && o.geometry.dispose();
            const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
            mats.forEach((m: any) => { m.map && m.map.dispose(); m.dispose && m.dispose(); });
          });
        } catch (e) {
          console.error("Error disposing plaza tiles:", e);
        }
      }
      if (scene && typeof scene.shutdown === 'function') {
        try {
          scene.shutdown();
        } catch (e) {
          console.error("Error shutting down MiiRenderer:", e);
        }
      }
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [personalMii]);


  const formatHomeMenuTime = (date: Date) => {
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[date.getDay()];
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampmStr = hours >= 12 ? 'p.m.' : 'a.m.';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${m}/${d} (${dayName})  ${hours}:${minutes} ${ampmStr}`;
  };

  const handleReturnTransitionDone = useCallback(() => {
    setEshopExitState('none');
    playMenuBgm();
  }, []);

  const startReturnTransition = useCallback(() => {
    (window as any).wiiuSoftwareActive = false;
    playSfx('home-close');
    setEshopExitState('white-screen');

    setTimeout(() => {
      setShowMiiIframe(false);
      setMiiIframeLoaded(false);
      setShowMinecraftIframe(false);
      setMinecraftIframeLoaded(false);
      setShowSystemSettingsIframe(false);
      setSystemSettingsIframeLoaded(false);
      setShowEshopIframe(false);
      setEshopIframeLoaded(false);
      stopEshopBgm();
      stopSystemSettingsBgm();

      setEshopExitState('loading-menu');
    }, 500);
  }, []);

  const handleEscapePress = () => {
    if (showHomeMenu) {
      playSfx('home-close');
      setShowHomeMenu(false);
      resumeActiveSoftwareAudio();
    } else if (showEshopIframe || showSystemSettingsIframe) {
      playSfx('home-close');
      startReturnTransition();
    } else {
      playSfx('home-open');
      setShowHomeMenu(true);
      pauseActiveSoftwareAudio();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleEscapePress();
      }
      if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        const focusable = Array.from(document.querySelectorAll<HTMLElement>('[tabIndex="1"]'));
        const current = document.activeElement as HTMLElement;
        const currentIndex = focusable.indexOf(current);
        if (currentIndex === -1 && focusable.length > 0) {
          focusable[0].focus();
          return;
        }
        
        let cols = window.innerWidth >= 768 ? 6 : window.innerWidth >= 640 ? 5 : 4;
        
        let nextIndex = currentIndex;
        if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % focusable.length;
        if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + focusable.length) % focusable.length;
        if (e.key === 'ArrowDown') nextIndex = Math.min(currentIndex + cols, focusable.length - 1);
        if (e.key === 'ArrowUp') nextIndex = Math.max(currentIndex - cols, 0);

        if (nextIndex >= 0 && nextIndex < focusable.length) {
          focusable[nextIndex].focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHomeMenu, showEshopIframe]);

  const handleMiiIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    setMiiIframeLoaded(true);
    const iframe = e.currentTarget;
    if (iframe.contentWindow) {
      patchIframeWindow(iframe.contentWindow);
    }
    try {
      iframe.contentWindow?.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          handleEscapePress();
        }
      });
    } catch (err) {
      console.warn("Could not attach keydown listener to Mii Maker iframe:", err);
    }
  };

  const handleSystemSettingsIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    setSystemSettingsIframeLoaded(true);
  };

  const handleEshopIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    setEshopIframeLoaded(true);
    const iframe = e.currentTarget;
    if (iframe.contentWindow) {
      patchIframeWindow(iframe.contentWindow);
    }
    try {
      iframe.contentWindow?.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          handleEscapePress();
        }
      });
    } catch (err) {
      console.warn("Could not attach keydown listener to eShop iframe:", err);
    }
  };

  // Titles that signal real readiness themselves (postMessage 'game-ready')
  // instead of relying on the iframe's document-load event. Small games load
  // their HTML well before the engine can render, so we keep the loading screen
  // up until they say they're ready.
  const DEFERRED_READY_TITLES = new Set(['20010000030006']); // Super Mario 64

  const handleMinecraftIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    if (!(activeGameId && DEFERRED_READY_TITLES.has(activeGameId))) {
      setMinecraftIframeLoaded(true);
    }
    const iframe = e.currentTarget;
    if (iframe.contentWindow) {
      patchIframeWindow(iframe.contentWindow);
    }
    try {
      iframe.contentWindow?.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          handleEscapePress();
        }
      });
    } catch (err) {
      console.warn("Could not attach keydown listener to Minecraft iframe:", err);
    }
  };

  const showToast = (msg: string) => {
    playSfx('error');
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleReturnToWiiUMenu = () => {
    setShowHomeMenu(false);
    setShowManualModal(false);
    startReturnTransition();
  };

  const renderHomeMenu = () => {
    let suspendedName = "";
    let suspendedIcon = null;

    if (showMiiIframe) {
      suspendedName = "Mii Maker";
      suspendedIcon = (
        <img src={miiMakerIcon} className="w-16 h-16 object-cover rounded-xl shadow-md border border-white/20" alt="Mii Maker" />
      );
    } else if (showMinecraftIframe) {
      suspendedName = "Eaglercraft (Minecraft)";
      suspendedIcon = (
        <img src="/local-assets/icons/eaglercraft.png" className="w-16 h-16 object-cover rounded-xl shadow-md border border-white/20" alt="Minecraft" />
      );
    } else if (showSystemSettingsIframe) {
      suspendedName = "System Settings";
      suspendedIcon = (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-[#00d8ff] to-[#0088cc] flex flex-col items-center justify-center border border-white/20 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2"></div>
          <div className="w-[55%] h-[55%] rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow">
            <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 z-[9995] bg-[#3a3a3a]/60 backdrop-blur-md animate-fade-in pointer-events-auto flex flex-col h-full w-full select-none text-white font-['Nunito',sans-serif]">
        {/* Top Bar */}
        <div className="w-full h-14 bg-gradient-to-b from-[#323232]/95 to-[#242424]/95 border-b border-black/45 px-6 flex items-center justify-between z-[9996]">
          {/* Top Left Profile & Date/Time */}
          <div className="flex items-center gap-3">
            <div className="cursor-pointer hover:scale-105 active:scale-95 transition-all">
              {personalMiiIcon ? (
                <img src={personalMiiIcon} className="w-9 h-9 rounded-xl object-cover border border-white/25 shadow-md bg-white" alt="Mii" />
              ) : (
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${personalMii ? getMiiGradient(personalMii.nickname) : 'from-gray-400 to-gray-500'} flex items-center justify-center text-white text-base font-black shadow-inner border border-white/10`}>
                  {personalMii ? personalMii.nickname.charAt(0).toUpperCase() : 'G'}
                </div>
              )}
            </div>
            <span className="text-[14px] font-extrabold text-gray-200 tracking-tight select-none">
              {formatHomeMenuTime(currentTime)}
            </span>
          </div>

          {/* Top Middle Console Status Symbols */}
          <div className="flex items-center gap-6">
            {/* GamePad silhouette */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 64 36" className="w-11 h-[26px] text-gray-300 fill-current opacity-90">
                <rect x="2" y="2" width="60" height="32" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="14" y="6" width="36" height="24" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="8" cy="14" r="2" fill="currentColor" />
                <circle cx="56" cy="14" r="2" fill="currentColor" />
                <path d="M6 22h4m-2-2v4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="53" cy="22" r="0.75" fill="currentColor" />
                <circle cx="57" cy="22" r="0.75" fill="currentColor" />
                <circle cx="55" cy="20" r="0.75" fill="currentColor" />
                <circle cx="55" cy="24" r="0.75" fill="currentColor" />
              </svg>
              {/* Battery level */}
              <div className="flex gap-[2px] border border-gray-400 p-[2px] rounded-sm h-3.5 w-6 items-center bg-black/35">
                <div className="bg-emerald-400 h-full w-[4px] rounded-sm"></div>
                <div className="bg-emerald-400 h-full w-[4px] rounded-sm"></div>
                <div className="bg-emerald-400 h-full w-[4px] rounded-sm"></div>
              </div>
            </div>

            {/* Stylus silhouette */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 fill-current opacity-85 -rotate-45">
              <path d="M21 3L3 21l1.5 1.5L22.5 4.5 21 3z M4.5 21h1.5v-1.5H4.5V21z" />
            </svg>

            {/* Controllers slots */}
            <div className="flex items-center gap-1.5">
              {/* Player 1 Active with battery */}
              <div className="flex items-center gap-0.5 bg-sky-500/25 border border-sky-400/40 px-1 py-0.5 rounded text-[10px] text-sky-300 font-extrabold h-6">
                <span>1</span>
                <div className="flex gap-[1px] border border-sky-300/40 p-[1px] rounded-xs h-2.5 w-3 items-center bg-black/25">
                  <div className="bg-sky-400 h-full w-[2px]"></div>
                  <div className="bg-sky-400 h-full w-[2px]"></div>
                </div>
              </div>
              <div className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-[10px] text-white/35 font-bold bg-black/15">2</div>
              <div className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-[10px] text-white/35 font-bold bg-black/15">3</div>
              <div className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-[10px] text-white/35 font-bold bg-black/15">4</div>
            </div>
          </div>

          {/* Top Right Controller Settings Button */}
          <button
            onClick={() => {
              playSfx('select');
              showToast("Keyboard and gamepad bindings are automatically managed!");
            }}
            onMouseEnter={() => playSfx('hover')}
            className="bg-[#383838] hover:bg-[#484848] active:scale-95 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5 transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] cursor-pointer select-none"
          >
            {/* Wrench SVG */}
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <div className="flex flex-col items-start leading-[1] text-left">
              <span>Controller</span>
              <span className="text-[8px] opacity-70">Settings</span>
            </div>
          </button>
        </div>

        {/* Center Suspended Software Area */}
        <div className="flex-1 flex flex-col items-center justify-center pb-24 px-4">
          <div className="w-full max-w-[560px] flex flex-col items-center">
            {suspendedName ? (
              <div 
                onClick={() => {
                  playSfx('select');
                  setShowHomeMenu(false);
                  resumeActiveSoftwareAudio();
                }}
                onMouseEnter={() => playSfx('hover')}
                className="bg-white/10 hover:bg-white/15 transition-all backdrop-blur-sm border border-white/20 rounded-[32px] px-8 py-6 flex items-center gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-full mb-8 animate-scale-up cursor-pointer"
              >
                {suspendedIcon}
                <div className="flex flex-col items-start text-left">
                  <h2 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                    {suspendedName}
                  </h2>
                  <p className="text-xs font-bold text-gray-300 mt-1 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                    Software Suspended (Click to Resume)
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center mb-12">
                <span className="text-xl font-bold tracking-wide text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  You have no suspended software.
                </span>
              </div>
            )}

            {/* Two Big White Tactile Buttons */}
            <div className="flex gap-6 w-full justify-center">
              {/* Wii U Menu Button */}
              <button
                onClick={handleReturnToWiiUMenu}
                onMouseEnter={() => playSfx('hover')}
                className="flex-1 py-4 bg-gradient-to-b from-white to-gray-150 hover:from-white hover:to-gray-100 text-gray-800 font-extrabold text-base rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.2)] border-b-4 border-gray-300 hover:border-gray-250 active:border-b-0 active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-3 select-none"
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                  {/* Home Circle SVG */}
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-500 flex items-center justify-center">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 16v-4h6v4h2v-5l-5-4.5-5 4.5v5z" fill="currentColor" />
                  </svg>
                </div>
                <span>Wii U Menu</span>
              </button>

              {/* Wii U Manual Button */}
              <button
                onClick={() => {
                  playSfx('select');
                  setShowManualModal(true);
                }}
                onMouseEnter={() => playSfx('hover')}
                className="flex-1 py-4 bg-gradient-to-b from-white to-gray-150 hover:from-white hover:to-gray-100 text-gray-800 font-extrabold text-base rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.2)] border-b-4 border-gray-300 hover:border-gray-250 active:border-b-0 active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-3 select-none"
              >
                <div className="w-8 h-8 rounded-lg bg-[#58e01b] border border-green-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
                  ?
                </div>
                <span>Wii U Manual</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Shortcut Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-28 bg-white/70 backdrop-blur-md border-t border-white/35 flex items-center justify-center gap-6 z-[9996]">
          {/* Friend List */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div 
              className="sys-icon rounded-2xl bg-gradient-to-b from-[#ffb400] to-[#ff7b00] w-12 h-12 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-md border border-white/10"
              onMouseEnter={() => playSfx('hover')}
              onClick={() => { playSfx('select'); showToast("Friend List is currently offline."); }}
            >
               <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
               <svg viewBox="0 0 100 100" className="w-[65%] h-[65%] text-white fill-current relative z-10">
                 <rect x="25" y="30" width="12" height="15" rx="6" />
                 <rect x="63" y="30" width="12" height="15" rx="6" />
                 <path d="M 25 65 Q 50 85 75 65" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
               </svg>
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 tracking-tight">Friend List</span>
          </div>

          {/* Miiverse */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div 
              className="sys-icon rounded-full bg-gradient-to-b from-[#58e01b] to-[#39ba00] shadow-[0_4px_8px_rgba(57,186,0,0.3)] w-12 h-12 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all hover:scale-105 active:scale-95 border border-white/10"
              onMouseEnter={() => playSfx('hover')}
              onClick={() => { playSfx('select'); showToast("Miiverse services have ended."); }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
              <svg viewBox="0 0 100 100" className="relative w-[70%] h-[70%] text-white z-10 mt-1">
                <circle cx="20" cy="30" r="12" fill="currentColor"/>
                <path d="M 0 80 Q 20 40 40 80 Z" fill="currentColor"/>
                <circle cx="80" cy="30" r="12" fill="currentColor"/>
                <path d="M 60 80 Q 80 40 100 80 Z" fill="currentColor"/>
                <circle cx="50" cy="40" r="15" fill="currentColor" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}/>
                <path d="M 25 90 Q 50 45 75 90 Z" fill="currentColor" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}/>
              </svg>
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 tracking-tight">Miiverse</span>
          </div>

          {/* Nintendo eShop */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div 
              className="sys-icon rounded-2xl w-12 h-12 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-md border border-white/10 bg-white"
              onMouseEnter={() => playSfx('hover')}
              onClick={() => {
                playSfx('select');
                setShowHomeMenu(false);
                launchEshop();
              }}
            >
              <img 
                src="/local-assets/icons/ESHOP ICON.png" 
                alt="Nintendo eShop" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 tracking-tight">Nintendo eShop</span>
          </div>

          {/* Internet Browser */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div 
              className="sys-icon rounded-full bg-gradient-to-b from-[#33ccff] to-[#0066ff] shadow-[0_4px_8px_rgba(0,102,255,0.3)] w-12 h-12 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all hover:scale-105 active:scale-95 border border-white/10"
              onMouseEnter={() => playSfx('hover')}
              onClick={() => { playSfx('select'); showToast("Internet Browser is loading..."); }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] text-white relative z-10">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6"/>
                <ellipse cx="50" cy="50" rx="16" ry="40" fill="none" stroke="currentColor" strokeWidth="6"/>
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="6"/>
                <line x1="28" y1="20" x2="72" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                <line x1="28" y1="80" x2="72" y2="80" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 tracking-tight">Internet Browser</span>
          </div>

          {/* Notifications */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div 
              className="sys-icon w-12 h-12 flex items-center justify-center cursor-pointer relative transition-all hover:scale-105 active:scale-95"
              onMouseEnter={() => playSfx('hover')}
              onClick={() => { playSfx('select'); showToast("No new system notifications."); }}
            >
              <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] text-[#00bfff] drop-shadow-[0_4px_6px_rgba(0,191,255,0.3)]">
                <defs>
                  <linearGradient id="homeChatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#33ccff" />
                    <stop offset="100%" stopColor="#0088ff" />
                  </linearGradient>
                </defs>
                <path d="M 15 25 Q 15 15 30 15 L 70 15 Q 85 15 85 25 L 85 65 Q 85 75 70 75 L 60 75 L 50 95 L 40 75 L 30 75 Q 15 75 15 65 Z" fill="url(#homeChatGrad)"/>
                <line x1="30" y1="35" x2="70" y2="35" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                <line x1="30" y1="52" x2="60" y2="52" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                <path d="M 20 25 Q 20 20 30 20 L 70 20 Q 80 20 80 25 L 80 40 Q 50 35 20 40 Z" fill="white" opacity={0.3}/>
              </svg>
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 tracking-tight">Notifications</span>
          </div>

          {/* Download Management */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div 
              className="sys-icon w-12 h-12 flex items-center justify-center cursor-pointer relative transition-all hover:scale-105 active:scale-95"
              onMouseEnter={() => playSfx('hover')}
              onClick={() => { playSfx('select'); showToast("Download queue is empty."); }}
            >
              <svg viewBox="0 0 100 100" className="w-[100%] h-[100%] drop-shadow-[0_4px_6px_rgba(0,191,255,0.3)]">
                <rect x="20" y="45" width="60" height="40" rx="4" fill="#0088ff"/>
                <path d="M 20 45 L 35 30 L 85 30 L 80 45 Z" fill="#33b3ff"/>
                <path d="M 85 30 L 85 70 L 80 85 L 80 45 Z" fill="#0066cc"/>
                <path d="M 40 10 L 60 10 L 60 40 L 75 40 L 50 70 L 25 40 L 40 40 Z" fill="white" stroke="#e6e6e6" strokeWidth="1"/>
              </svg>
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 tracking-tight">Download Mgmt</span>
          </div>
        </div>
      </div>
    );
  };

  const launchMiiMaker = () => {
    (window as any).wiiuSoftwareActive = true;
    playSfx('software-select');
    stopMenuBgm();
    setShowMiiLoading(true);
    setShowMiiIframe(true);
    setMiiIframeLoaded(false);
  };
  const handleMiiLoadingDone = () => {
    setShowMiiLoading(false);
    
    // Resume iframe AudioContext(s) (Mii Creator background audio)
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      try {
        const win = iframe.contentWindow as any;
        win.allowAudioResume = true;
        if (win.suspendedAudioContexts) {
          win.suspendedAudioContexts.forEach((ctx: any) => {
            if (ctx && typeof ctx.resume === 'function') {
              ctx.resume();
            }
          });
        }
        if (win.MusicManager && typeof win.MusicManager.unmute === 'function') {
          win.MusicManager.unmute();
        }
        if (win.soundManager && typeof win.soundManager.unmute === 'function') {
          win.soundManager.unmute();
        }
      } catch (e) {
        console.error("Failed to resume iframe audio contexts", e);
      }
    }
  };

  const launchEshop = () => {
    (window as any).wiiuSoftwareActive = true;
    playSfx('software-select');
    stopMenuBgm();
    setShowEshopLoading(true);
    setShowEshopIframe(true);
    setEshopIframeLoaded(false);
  };
  const handleEshopLoadingDone = () => {
    setShowEshopLoading(false);
  };

  // Generic launcher for any installed title (single VFS payload or multi-file
  // bundle). Reuses the full-screen game iframe + loading overlay.
  const launchTitle = async (titleId: string) => {
    (window as any).wiiuSoftwareActive = true;
    playSfx('software-select');
    stopMenuBgm();
    setActiveGameId(titleId);
    // Pull this title's splash + jingle from the catalog for the loading screen.
    try {
      const meta = (await getCatalog()).find(c => c.titleId === titleId);
      setActiveGameSplash(meta?.loadSplash || null);
      setActiveGameJingle(meta?.jingle || null);
    } catch { setActiveGameSplash(null); setActiveGameJingle(null); }
    setShowMinecraftLoading(true);
    setShowMinecraftIframe(true);
    setMinecraftIframeLoaded(false);
    try {
      // single → blob: URL from the VFS; bundle → /vfs/<id>/<entry> via the SW.
      const { src } = await getTitleLaunchSrc(titleId);
      setMinecraftSrc(src);
    } catch (err) {
      console.error('Failed to launch title from local install:', err);
    }
  };
  const launchMinecraft = () => launchTitle('20010000020451');
  const handleMinecraftLoadingDone = () => {
    setShowMinecraftLoading(false);
  };

  // Release the game's blob: object URL when its iframe is torn down. Bundle
  // titles use a /vfs/ path (not a blob), so only revoke blob: URLs.
  useEffect(() => {
    if (!showMinecraftIframe && minecraftSrc) {
      if (minecraftSrc.startsWith('blob:')) URL.revokeObjectURL(minecraftSrc);
      setMinecraftSrc(null);
      setActiveGameId(null);
    }
  }, [showMinecraftIframe]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data) {
        if (event.data.type === 'miic-data-finalize') {
          setShowMiiIframe(false);
          setMiiIframeLoaded(false);
          fetchPersonalMii();
          fetchLibrary();
        } else if (event.data.type === 'eshop-close') {
          fetchInstalledGames();
          startReturnTransition();
        } else if (event.data.type === 'CLOSE_SYSTEM_SETTINGS') {
          startReturnTransition();
        } else if (event.data.type === 'APPLY_SYSTEM_SETTING') {
          // System Settings (iframe) changed a setting — apply it live.
          const { key, value } = event.data;
          if (key === 'wiiuResolution') applyPlazaResolution();
          else if (key === 'wiiuAudioOutput') MasterAudio.setMode(value);
        } else if (event.data.type === 'REQUEST_INSTALLED_GAMES') {
          // The System Settings → Data Management screen (an iframe) asks for the
          // list of locally-installed games (titleId, display name, byte size).
          (async () => {
            try {
              const [singles, installedAll, catalog] = await Promise.all([
                listInstalledDetailed(),
                listInstalledAll(),
                getCatalog().catch(() => [] as CatalogTitle[]),
              ]);
              const sizeOf = new Map(singles.map(s => [s.titleId, s.size]));
              const games = await Promise.all(installedAll.map(async g => {
                const meta = catalog.find(c => c.titleId === g.titleId);
                const size = g.type === 'bundle' ? await bundleSize(g.titleId) : (sizeOf.get(g.titleId) || 0);
                return { titleId: g.titleId, size, name: meta?.name || g.titleId, icon: meta?.icon || null };
              }));
              (event.source as Window | null)?.postMessage({ type: 'INSTALLED_GAMES', games }, '*');
            } catch (err) {
              (event.source as Window | null)?.postMessage({ type: 'INSTALLED_GAMES', games: [] }, '*');
            }
          })();
        } else if (event.data.type === 'DELETE_GAME') {
          // Data Management → confirmed delete. Uninstall locally, refresh the
          // home menu, and send the settings iframe the updated list.
          const target = event.source as Window | null;
          (async () => {
            try {
              await uninstallTitle(event.data.id);
              await fetchInstalledGames();
              const [singles, installedAll, catalog] = await Promise.all([
                listInstalledDetailed(),
                listInstalledAll(),
                getCatalog().catch(() => [] as CatalogTitle[]),
              ]);
              const sizeOf = new Map(singles.map(s => [s.titleId, s.size]));
              const games = await Promise.all(installedAll.map(async g => {
                const meta = catalog.find(c => c.titleId === g.titleId);
                const size = g.type === 'bundle' ? await bundleSize(g.titleId) : (sizeOf.get(g.titleId) || 0);
                return { titleId: g.titleId, size, name: meta?.name || g.titleId, icon: meta?.icon || null };
              }));
              target?.postMessage({ type: 'INSTALLED_GAMES', games }, '*');
            } catch (err) {
              console.error('Failed to delete game data:', err);
              target?.postMessage({ type: 'INSTALLED_GAMES', games: [] }, '*');
            }
          })();
        } else if (event.data.type === 'eshop-sound') {
          handleEshopSound(event.data.name);
        } else if (event.data.type === 'game-ready') {
          // A title (e.g. SM64) reports its engine is actually ready — now
          // dismiss the loading screen.
          setMinecraftIframeLoaded(true);
        } else if (event.data.type === 'eshop-download') {
          // Install the title locally (per-browser). installTitle branches by
          // catalog type: single → VFS payload, bundle → unzip into Cache.
          installTitle(event.data.id)
            .then(() => {
              setToastMessage(`Download Complete: ${event.data.id}`);
              setTimeout(() => setToastMessage(null), 3000);
              fetchInstalledGames(); // Refresh installed state
            })
            .catch(err => console.error("Error downloading game:", err));
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [libraryIcons, startReturnTransition]);

  const fetchInstalledGames = async () => {
    try {
      // Install state lives locally (VFS for single payloads, Cache Storage for
      // bundles) — never on the server. Merge with the catalog for name/icon.
      const [installed, catalog] = await Promise.all([listInstalledAll(), getCatalog().catch(() => [] as CatalogTitle[])]);
      setInstalledGames(installed.map(g => {
        const meta = catalog.find(c => c.titleId === g.titleId);
        return { titleId: g.titleId, type: g.type, name: meta?.name || g.titleId, icon: meta?.icon };
      }));
    } catch(err) {
      console.error("Failed to read installed games", err);
    }
  };

  // Register the service worker that serves installed bundle games (/vfs/*).
  useEffect(() => { ensureVfsServiceWorker().catch(err => console.warn('VFS SW register failed:', err)); }, []);

  useEffect(() => {
    fetchInstalledGames();
    // Apply the saved TV Audio Output mode (Stereo / Surround / Mono).
    try { MasterAudio.setMode(localStorage.getItem('wiiuAudioOutput') || 'stereo'); } catch {}
  }, []);

  const fetchPersonalMii = async () => {
    try {
      const res = await fetch('/api/personal_mii');
      if (res.ok) {
        const mii = await res.json();
        
        let purchasedTitles: string[] = [];
        let balance = 0;
        let loggedInUsername = '';
        
        const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const profRes = await fetch('/api/stats/profile');
            if (profRes.ok) {
              const profData = await profRes.json();
              if (profData.user) {
                purchasedTitles = profData.user.purchasedTitles || [];
                balance = profData.user.balance || 0;
                loggedInUsername = profData.user.username || '';
              }
            }
          } catch(e) {
            console.error("Failed to fetch server profile:", e);
          }
        }

        if (mii && mii.id) {
          setPersonalMii(mii);
          
          if (loggedInUsername) {
            localStorage.setItem('loggedInUsername', loggedInUsername);
            setIsLoggedIn(true);
            setLoggedInUser(loggedInUsername);
            setUserBalance(balance);
            setPurchasedCount(purchasedTitles.length);
          } else {
            localStorage.removeItem('loggedInUsername');
            setIsLoggedIn(false);
            setLoggedInUser('');
            setUserBalance(0);
            setPurchasedCount(0);
          }

          const cached = await localforage.getItem<{ icon: Blob }>(`icon-${mii.id}`);
          if (cached && cached.icon) {
            setPersonalMiiIcon(URL.createObjectURL(cached.icon));
            try {
              const base64 = await blobToBase64(cached.icon);
              sessionStorage.setItem('ninja_session', JSON.stringify({
                mii: { name: mii.nickname, icon_url: base64 },
                purchasedTitles: purchasedTitles
              }));
              sessionStorage.setItem('balance_raw', String(balance));
              sessionStorage.setItem('balance', '¥' + balance.toLocaleString());
            } catch (err) {
              console.error("Failed to convert Mii icon to base64", err);
            }
          } else {
            setPersonalMiiIcon(null);
            sessionStorage.setItem('ninja_session', JSON.stringify({
              mii: { name: mii.nickname, icon_url: '' },
              purchasedTitles: purchasedTitles
            }));
            sessionStorage.setItem('balance_raw', String(balance));
            sessionStorage.setItem('balance', '¥' + balance.toLocaleString());
          }
        } else {
          setPersonalMii(null);
          setPersonalMiiIcon(null);
          localStorage.removeItem('loggedInUsername');
          sessionStorage.removeItem('ninja_session');
          sessionStorage.setItem('balance_raw', '0');
          sessionStorage.setItem('balance', '¥0');
          setIsLoggedIn(false);
          setLoggedInUser('');
          setUserBalance(0);
          setPurchasedCount(0);
        }
      }
    } catch (e) {
      console.error("Failed to load personal Mii", e);
    }
  };

  const fetchLibrary = async () => {
    try {
      const res = await fetch('/api/library');
      if (res.ok) {
        const list: Mii[] = await res.json();
        setLibraryMiis(list || []);
        
        const iconsMap: Record<string, string> = {};
        for (const mii of list) {
          const cached = await localforage.getItem<{ icon: Blob }>(`icon-${mii.id}`);
          if (cached && cached.icon) {
            iconsMap[mii.id] = URL.createObjectURL(cached.icon);
          }
        }
        setLibraryIcons(iconsMap);
      }
    } catch (e) {
      console.error("Failed to load Mii library", e);
    }
  };

  useEffect(() => {
    fetchPersonalMii();
    playMenuBgm();
    
    const handleFirstClick = () => {
      playMenuBgm();
      document.removeEventListener('click', handleFirstClick);
    };
    document.addEventListener('click', handleFirstClick);

    return () => {
      stopEshopBgm();
      stopMenuBgm();
      document.removeEventListener('click', handleFirstClick);
    };
  }, []);

  useEffect(() => {
    if (isSelectModalOpen) {
      fetchLibrary();
    }
  }, [isSelectModalOpen]);

  const handleSelectMii = async (mii: Mii) => {
    try {
      const res = await fetch('/api/personal_mii', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: mii.id })
      });
      if (res.ok) {
        setPersonalMii(mii);
        const iconUrl = libraryIcons[mii.id] || null;
        setPersonalMiiIcon(iconUrl);
        
        const cached = await localforage.getItem<{ icon: Blob }>(`icon-${mii.id}`);
        if (cached && cached.icon) {
          try {
            const base64 = await blobToBase64(cached.icon);
            
            let purchasedTitles: string[] = [];
            let balance = 0;
            const token = localStorage.getItem('authToken');
            if (token) {
              const profRes = await fetch('/api/stats/profile');
              if (profRes.ok) {
                const profData = await profRes.json();
                if (profData.user) {
                  purchasedTitles = profData.user.purchasedTitles || [];
                  balance = profData.user.balance || 0;
                }
              }
            }

            sessionStorage.setItem('ninja_session', JSON.stringify({
              mii: { name: mii.nickname, icon_url: base64 },
              purchasedTitles: purchasedTitles
            }));
            sessionStorage.setItem('balance_raw', String(balance));
            sessionStorage.setItem('balance', '¥' + balance.toLocaleString());
          } catch (err) {
            console.error("Failed to convert Mii icon to base64", err);
          }
        } else {
          sessionStorage.removeItem('ninja_session');
        }
        setIsSelectModalOpen(false);
      }
    } catch (e) {
      console.error("Failed to save personal Mii", e);
    }
  };

  const handleClearMii = async () => {
    localStorage.removeItem('mii_personal_id');
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUsername');
    setPersonalMii(null);
    setPersonalMiiIcon(null);
    sessionStorage.removeItem('ninja_session');
    sessionStorage.setItem('balance_raw', '0');
    sessionStorage.setItem('balance', '¥0');
    setIsSelectModalOpen(false);
  };

  const handleModalLogin = async () => {
    setLoginLoading(true);
    setLoginError('');
    try {
      const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
      const bodyPayload: any = { username: loginUser, password: loginPass };
      if (isRegistering) {
        bodyPayload.mii = personalMii;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload)
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Operation failed');
        setLoginLoading(false);
        return;
      }

      if (isRegistering) {
        const logRes = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: loginUser, password: loginPass })
        });
        const logData = await logRes.json();
        if (!logRes.ok) {
          setLoginError(logData.error || 'Failed to login after registration');
          setLoginLoading(false);
          return;
        }
        if (logData.token) {
          localStorage.setItem('authToken', logData.token);
        }
      } else {
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
      }

      if (personalMii) {
        await fetch('/api/personal_mii', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: personalMii.id })
        });
      }

      await fetchPersonalMii();

      setLoginUser('');
      setLoginPass('');
      setLoginError('');
      setLoginLoading(false);
      setIsProfileModalOpen(false);
    } catch (e) {
      setLoginError('Connection failed');
      setLoginLoading(false);
    }
  };

  const handleChangePassword = async () => {
    setChangePassError('');
    setChangePassSuccess('');
    const token = localStorage.getItem('authToken');
    if (!token) {
      setChangePassError('Not authenticated');
      return;
    }

    try {
      const res = await fetch('/api/stats/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ password: newPassword })
      });
      const data = await res.json();
      if (!res.ok) {
        setChangePassError(data.error || 'Failed to update password');
        return;
      }
      setChangePassSuccess('Password updated successfully!');
      setNewPassword('');
    } catch (e) {
      setChangePassError('Connection failed');
    }
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col relative selection:bg-transparent font-['Nunito',sans-serif]">
      {/* Blurred Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,#e1ebe6_100%)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-white/60 rounded-full blur-[100px]"></div>
        
        <div className="absolute top-[15%] left-[5%] w-16 h-16 rounded-xl bg-white/40 border border-white/60 blur-[2px] bg-float-1"></div>
        <div className="absolute bottom-[25%] left-[-5%] w-32 h-32 rounded-2xl bg-white/40 border border-white/60 blur-[4px] bg-float-2"></div>
        
        <div className="absolute top-[10%] right-[30%] w-24 h-24 rounded-2xl border-[12px] border-gray-300/20 blur-[3px] bg-float-1"></div>
        
        <div className="absolute top-[15%] right-[5%] text-[24rem] font-black text-gray-300/30 blur-[8px] select-none bg-float-2 leading-none tracking-tighter">R</div>
      </div>

      {/* MAIN UI LAYER */}
      <div
        className="absolute inset-0 z-10 flex flex-col h-full w-full"
        style={{
          transform: plazaIn ? 'translateY(-100%)' : 'translateY(0)',
          transition: `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >

        {/* Top Left Profile Icon */}
        <div 
          className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20 cursor-pointer"
          onClick={() => {
            playSfx('select');
            setIsProfileModalOpen(true);
          }}
          onMouseEnter={() => playSfx('hover')}
        >
          <div className="wiiu-icon w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 duration-200">
            {personalMiiIcon ? (
              <img 
                src={personalMiiIcon} 
                alt={personalMii?.nickname} 
                className="w-[85%] h-[85%] object-cover rounded-xl"
              />
            ) : personalMii ? (
              <div className={`w-[85%] h-[85%] rounded-xl bg-gradient-to-br ${getMiiGradient(personalMii.nickname)} flex items-center justify-center text-white font-extrabold text-xl lg:text-3xl shadow-inner border border-white/20`}>
                {personalMii.nickname.charAt(0).toUpperCase()}
              </div>
            ) : (
              <div className="icon-content flex flex-col items-center justify-end pb-1 lg:pb-2 bg-transparent/20">
                <svg viewBox="0 0 100 100" className="w-[70%] h-[70%] text-gray-500 fill-current opacity-80">
                  <circle cx="50" cy="35" r="18" />
                  <path d="M 15 95 Q 15 65 50 65 Q 85 65 85 95 Z" />
                </svg>
              </div>
            )}
          </div>
          {personalMii && (
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide pointer-events-none truncate max-w-[80px] border border-white/10">
              {localStorage.getItem('loggedInUsername') || personalMii.nickname}
            </div>
          )}
        </div>

        {/* Top Center Paging Dots */}
        <div className="absolute top-8 lg:top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          <div className="w-6 h-2.5 rounded-[2px] bg-[#00d8ff] shadow-[0_0_6px_rgba(0,216,255,0.8)] cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-gray-300/80 shadow-inner cursor-pointer hover:bg-gray-400"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-gray-300/80 shadow-inner cursor-pointer hover:bg-gray-400"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-gray-300/80 shadow-inner cursor-pointer hover:bg-gray-400"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-gray-300/80 shadow-inner cursor-pointer hover:bg-gray-400"></div>
        </div>

        {/* Right Side Glossy Arrow */}
        <div 
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-24 lg:w-16 lg:h-32 cursor-pointer z-20 hover:scale-105 drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform"
          onMouseEnter={() => playSfx('hover')}
          onClick={() => playSfx('select')}
        >
          <svg viewBox="0 0 100 200" className="w-full h-full text-white">
            <path d="M 20 10 Q 70 100 20 190 L 95 100 Z" fill="url(#arrowGrad)" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#e6e6e6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Grid */}
        <main className="flex-grow flex items-center justify-center px-10 lg:px-32 w-full h-full">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 grid-rows-3 gap-x-3 gap-y-3 lg:gap-x-5 lg:gap-y-5 w-full max-w-[1200px] justify-items-center md:mb-10 mt-16 md:mt-0">
            
            {/* ROW 1 */}
            
            {/* 1. Disc Drive */}
            <div 
              className="wiiu-icon w-full max-w-[130px] aspect-square" 
              tabIndex={1}
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
            >
              <div className="reflection"></div>
              <div className="icon-content bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center relative">
                <div className="absolute top-0 w-14 h-5 bg-gradient-to-b from-gray-50 to-gray-300 shadow-md rounded-b flex justify-center border-b border-gray-400/30 z-10">
                  <svg viewBox="0 0 20 10" className="w-4 mt-[2px] text-white drop-shadow-md fill-current"><polygon points="0,0 20,0 10,10"/></svg>
                </div>
                <div className="w-[80%] h-[80%] rounded-full bg-[conic-gradient(from_0deg,#ffb3ba,#ffffba,#bae1ff,#e1baff,#ffb3ba)] flex items-center justify-center shadow-lg border-2 border-gray-100 mt-2">
                  <div className="w-[25%] h-[25%] rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-gray-400 shadow-inner flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-transparent border border-gray-400/50"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Wii Menu */}
            <div 
              className="wiiu-icon w-full max-w-[130px] aspect-square" 
              tabIndex={1}
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
            >
              <div className="reflection"></div>
              <div className="icon-content wii-pattern flex flex-col items-center justify-center relative">
                <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100 z-10 mb-2">
                  <span className="text-[#737373] font-extrabold text-2xl lg:text-3xl tracking-tighter font-sans leading-none">Wii</span>
                </div>
                <div className="absolute bottom-1 w-[85%] h-2.5 bg-[#00d8ff] rounded-t-sm shadow-[0_-2px_8px_rgba(0,216,255,0.4)]"></div>
              </div>
              <button 
                className="start-btn" 
                onClick={() => {
                  playSfx('select');
                  onStart();
                }}
              >
                <span>Start</span>
              </button>
            </div>

            {/* 3. Mii Maker (Mii Creator) */}
            <div 
              className="wiiu-icon w-full max-w-[130px] aspect-square" 
              tabIndex={1}
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
            >
              <div className="reflection" style={{ '--img': `url('${miiMakerIcon}')` } as React.CSSProperties}></div>
              <img className="game-icon" src={miiMakerIcon} alt="Mii Maker" />
              <button 
                className="start-btn" 
                onClick={() => {
                  playSfx('select');
                  launchMiiMaker();
                }}
              >
                <span>Start</span>
              </button>
            </div>
            {/* 4. System Settings */}
            <div 
              className="wiiu-icon w-full max-w-[130px] aspect-square" 
              tabIndex={1}
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
            >
              <div className="reflection"></div>
              <div className="icon-content relative overflow-hidden">
                <img
                  src="/local-assets/icons/settings.png"
                  alt="System Settings"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <button 
                className="start-btn" 
                onClick={() => {
                  (window as any).wiiuSoftwareActive = true;
                  playSfx('software-select');
                  stopMenuBgm();
                  setShowSystemSettingsLoading(true);
                  setShowSystemSettingsIframe(true);
                  setSystemSettingsIframeLoaded(false);
                }}
              >
                <span>Start</span>
              </button>
            </div>
            <div className="hidden sm:block w-full">
                <GameIcon imageUrl="" onStart={onStart} />
            </div>
            <div className="hidden md:block w-full">
                <GameIcon imageUrl="" onStart={onStart} />
            </div>

            {/* ROW 2 — installed eShop titles (single payloads + bundles). */}
            {installedGames.map(g => (
              <GameIcon
                key={g.titleId}
                imageUrl={g.icon || (g.titleId === '20010000020451' ? '/local-assets/icons/eaglercraft.png' : '')}
                onStart={() => { launchTitle(g.titleId); }}
              />
            ))}
            {/* Pad the row so the grid keeps its shape when few games installed. */}
            {Array.from({ length: Math.max(0, 3 - installedGames.length) }).map((_, i) => (
              <GameIcon key={`pad-${i}`} imageUrl="" onStart={onStart} />
            ))}

            {/* 10, 11, 12 */}
            <GameIcon imageUrl="" onStart={onStart} />
            <div className="hidden sm:block w-full">
                <GameIcon imageUrl="" onStart={onStart} />
            </div>
            <div className="hidden md:block w-full">
                <GameIcon imageUrl="" onStart={onStart} />
            </div>

            {/* ROW 3 */}
            <GameIcon imageUrl="" onStart={onStart} />
            <GameIcon imageUrl="" onStart={onStart} />
            <GameIcon imageUrl="" onStart={onStart} />
            <GameIcon imageUrl="" onStart={onStart} />
            <div className="hidden sm:block w-full">
                <GameIcon imageUrl="" onStart={onStart} />
            </div>
            <div className="hidden md:block w-full">
                <GameIcon imageUrl="" onStart={onStart} />
            </div>

          </div>
        </main>

        {/* Bottom System Apps */}
        <footer className="absolute bottom-4 lg:bottom-6 w-full px-6 lg:px-10 flex justify-between items-end pointer-events-none">
          
          {/* Swap View Button (Wara Wara Plaza) */}
          <div className="flex-1 flex justify-start pointer-events-auto">
            <button
              onClick={() => {
                playSfx('select');
                openPlaza();
              }}
              onMouseEnter={() => playSfx('hover')}
              className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/80 hover:bg-white hover:scale-105 active:scale-95 shadow-md border border-gray-250 flex items-center justify-center cursor-pointer transition-all duration-200"
              title="Wara Wara Plaza"
            >
              {/* TV icon */}
              <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] text-gray-600 fill-none stroke-current" strokeWidth="2.5">
                <rect x="2" y="3" width="20" height="13" rx="2" />
                <path d="M12 16v4M8 20h8" />
              </svg>
            </button>
          </div>

          {/* Center Row of Icons */}
          <div className="flex items-end justify-center gap-4 lg:gap-6 pointer-events-auto pb-2">
            
            {/* 1. Friend List */}
            <div 
              className="sys-icon rounded-2xl bg-gradient-to-b from-[#ffb400] to-[#ff7b00] w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer relative overflow-hidden"
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
              onClick={() => playSfx('select')}
            >
               <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
               <svg viewBox="0 0 100 100" className="w-[65%] h-[65%] text-white fill-current relative z-10">
                 <rect x="25" y="30" width="12" height="15" rx="6" />
                 <rect x="63" y="30" width="12" height="15" rx="6" />
                 <path d="M 25 65 Q 50 85 75 65" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
               </svg>
            </div>

            {/* 2. Miiverse */}
            <div 
              className="sys-icon rounded-full bg-gradient-to-b from-[#58e01b] to-[#39ba00] shadow-[0_4px_8px_rgba(57,186,0,0.4)] w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer relative overflow-hidden"
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
              onClick={() => playSfx('select')}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
              <svg viewBox="0 0 100 100" className="relative w-[70%] h-[70%] text-white z-10 mt-1">
                <circle cx="20" cy="30" r="12" fill="currentColor"/>
                <path d="M 0 80 Q 20 40 40 80 Z" fill="currentColor"/>
                <circle cx="80" cy="30" r="12" fill="currentColor"/>
                <path d="M 60 80 Q 80 40 100 80 Z" fill="currentColor"/>
                <circle cx="50" cy="40" r="15" fill="currentColor" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}/>
                <path d="M 25 90 Q 50 45 75 90 Z" fill="currentColor" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}/>
              </svg>
            </div>

            {/* 3. eShop */}
            <div 
              className="sys-icon rounded-2xl w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all hover:scale-105 active:scale-95 duration-200"
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
              onClick={() => {
                playSfx('select');
                launchEshop();
              }}
            >
              <img 
                src="/local-assets/icons/ESHOP ICON.png" 
                alt="Nintendo eShop" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* 4. Internet Browser */}
            <div 
              className="sys-icon rounded-full bg-gradient-to-b from-[#33ccff] to-[#0066ff] shadow-[0_4px_8px_rgba(0,102,255,0.4)] w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer relative overflow-hidden"
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
              onClick={() => playSfx('select')}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-1/2"></div>
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] text-white relative z-10">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6"/>
                <ellipse cx="50" cy="50" rx="16" ry="40" fill="none" stroke="currentColor" strokeWidth="6"/>
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="6"/>
                <line x1="28" y1="20" x2="72" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                <line x1="28" y1="80" x2="72" y2="80" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* 5. Notifications */}
            <div 
              className="sys-icon w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer relative"
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
              onClick={() => playSfx('select')}
            >
              <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] text-[#00bfff] drop-shadow-[0_4px_6px_rgba(0,191,255,0.4)]">
                <defs>
                  <linearGradient id="chatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#33ccff" />
                    <stop offset="100%" stopColor="#0088ff" />
                  </linearGradient>
                </defs>
                <path d="M 15 25 Q 15 15 30 15 L 70 15 Q 85 15 85 25 L 85 65 Q 85 75 70 75 L 60 75 L 50 95 L 40 75 L 30 75 Q 15 75 15 65 Z" fill="url(#chatGrad)"/>
                <line x1="30" y1="35" x2="70" y2="35" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                <line x1="30" y1="52" x2="60" y2="52" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                <path d="M 20 25 Q 20 20 30 20 L 70 20 Q 80 20 80 25 L 80 40 Q 50 35 20 40 Z" fill="white" opacity={0.3}/>
              </svg>
            </div>

            {/* 6. Download Management */}
            <div 
              className="sys-icon w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer relative"
              onMouseEnter={() => playSfx('hover')}
              onFocus={() => playSfx('hover')}
              onClick={() => playSfx('select')}
            >
              <svg viewBox="0 0 100 100" className="w-[100%] h-[100%] drop-shadow-[0_4px_6px_rgba(0,191,255,0.4)]">
                <rect x="20" y="45" width="60" height="40" rx="4" fill="#0088ff"/>
                <path d="M 20 45 L 35 30 L 85 30 L 80 45 Z" fill="#33b3ff"/>
                <path d="M 85 30 L 85 70 L 80 85 L 80 45 Z" fill="#0066cc"/>
                <path d="M 40 10 L 60 10 L 60 40 L 75 40 L 50 70 L 25 40 L 40 40 Z" fill="white" stroke="#e6e6e6" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          <div className="flex-1"></div>

        </footer>
      </div>

      {/* Profile / Account Settings Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-fade-in">
          <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl p-6 w-[90%] max-w-[480px] shadow-2xl text-gray-800 animate-scale-up flex flex-col max-h-[85vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200/50">
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-650 bg-clip-text text-transparent flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0088cc] fill-none stroke-current" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {isLoggedIn ? 'Nintendo Network Account' : 'Nintendo Network ID'}
              </h2>
              <button 
                onClick={() => {
                  playSfx('back');
                  setIsProfileModalOpen(false);
                  setLoginError('');
                  setChangePassError('');
                  setChangePassSuccess('');
                  setNewPassword('');
                }}
                onMouseEnter={() => playSfx('hover')}
                className="w-8 h-8 rounded-full bg-gray-200/75 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors font-bold text-lg cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            {!isLoggedIn ? (
              /* ─── NOT LOGGED IN VIRTUAL SCREEN ─── */
              <div className="flex flex-col gap-4">
                <p className="text-gray-500 text-xs text-center leading-relaxed px-4">
                  {isRegistering 
                    ? 'Register a new Nintendo Network ID to link your Mii, eShop purchases, and save files online.'
                    : 'Log in with your Nintendo Network ID to sync your eShop balance, card redemptions, and owned games.'}
                </p>

                {loginError && (
                  <div className="bg-red-50 text-red-500 border border-red-100 rounded-xl px-3 py-2 text-xs font-bold text-center">
                    {loginError}
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-1">NNID Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      value={loginUser}
                      onChange={(e) => setLoginUser(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Password (min 6 chars)"
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc] transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={handleModalLogin}
                  disabled={loginLoading || !loginUser || loginPass.length < 6}
                  className="w-full mt-2 py-3 bg-[#0088cc] hover:bg-[#0077b3] disabled:opacity-50 text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  {loginLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : isRegistering ? 'Register & Log In' : 'Log In'}
                </button>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 text-xs">
                  <button 
                    onClick={() => {
                      playSfx('select');
                      setIsRegistering(!isRegistering);
                      setLoginError('');
                    }}
                    className="text-[#0088cc] font-bold hover:underline cursor-pointer"
                  >
                    {isRegistering ? 'Already have an ID? Log In' : 'Need an account? Register'}
                  </button>
                  <button 
                    onClick={() => {
                      playSfx('select');
                      setIsProfileModalOpen(false);
                      setIsSelectModalOpen(true);
                    }}
                    className="text-gray-500 font-medium hover:text-gray-700 cursor-pointer"
                  >
                    Switch Mii / User
                  </button>
                </div>
              </div>
            ) : (
              /* ─── LOGGED IN PROFILE & SETTINGS VIRTUAL SCREEN ─── */
              <div className="flex flex-col gap-4">
                {/* User Info Card */}
                <div className="bg-gray-100/50 border border-gray-200/50 rounded-2xl p-4 flex items-center gap-4">
                  {personalMiiIcon ? (
                    <img src={personalMiiIcon} className="w-14 h-14 object-cover rounded-xl bg-white border border-gray-250/50 shadow-sm" alt="Mii" />
                  ) : (
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getMiiGradient(loggedInUser)} flex items-center justify-center text-white font-extrabold text-xl shadow-md`}>
                      {loggedInUser.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="flex flex-col truncate">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">NNID</span>
                    <span className="text-lg font-extrabold text-gray-800 truncate mb-0.5">{loggedInUser}</span>
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold mt-0.5">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                      </span>
                      <span>Mii: {personalMii?.nickname || 'Guest'}</span>
                    </div>
                  </div>
                </div>

                {/* Account Details & Balances */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-[#00d8ff]/10 to-[#0088cc]/10 border border-[#00d8ff]/25 rounded-2xl p-3 flex flex-col justify-center">
                    <span className="text-[9px] uppercase font-extrabold tracking-wider text-[#006699] mb-1">eShop Balance</span>
                    <span className="text-lg font-black text-[#0088cc]">¥{userBalance.toLocaleString()}</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 flex flex-col justify-center">
                    <span className="text-[9px] uppercase font-extrabold tracking-wider text-gray-400 mb-1">Purchased Games</span>
                    <span className="text-lg font-black text-gray-755">{purchasedCount} Titles</span>
                  </div>
                </div>

                {/* Password modification form */}
                <div className="border-t border-gray-150/70 pt-4 mt-1 flex flex-col gap-3">
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-gray-400">Account Settings</h3>
                  
                  {changePassSuccess && (
                    <div className="bg-green-50 text-green-600 border border-green-100 rounded-xl px-3 py-2 text-xs font-bold text-center">
                      {changePassSuccess}
                    </div>
                  )}
                  {changePassError && (
                    <div className="bg-red-50 text-red-500 border border-red-100 rounded-xl px-3 py-2 text-xs font-bold text-center">
                      {changePassError}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="New Password (min 6 chars)"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="flex-grow px-3 py-2 rounded-xl border border-gray-300 bg-white/70 text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                    />
                    <button
                      onClick={handleChangePassword}
                      disabled={newPassword.length < 6}
                      className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-sm"
                    >
                      Change
                    </button>
                  </div>
                </div>

                {/* Log Out & Switch actions */}
                <div className="border-t border-gray-150/70 pt-4 mt-1 flex gap-3">
                  <button
                    onClick={() => {
                      playSfx('back');
                      handleClearMii();
                      setIsProfileModalOpen(false);
                    }}
                    className="flex-1 py-2.5 bg-red-50 hover:bg-red-100 text-red-500 border border-red-200/50 text-xs font-extrabold rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Log Out / Disconnect
                  </button>
                  <button
                    onClick={() => {
                      playSfx('select');
                      setIsProfileModalOpen(false);
                      setIsSelectModalOpen(true);
                    }}
                    className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-750 text-xs font-extrabold rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Switch User
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mii Selection Modal */}
      {isSelectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-fade-in">
          <div className="bg-white/85 backdrop-blur-xl border border-white/40 rounded-3xl p-6 w-[90%] max-w-[640px] shadow-2xl text-gray-800 animate-scale-up flex flex-col max-h-[80vh]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200/50">
              <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Switch User / Select Mii
              </h2>
              <button 
                onClick={() => {
                  playSfx('back');
                  setIsSelectModalOpen(false);
                }}
                onMouseEnter={() => playSfx('hover')}
                className="w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors font-bold text-lg cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Content - Scrollable Mii Grid */}
            <div className="flex-grow overflow-y-auto pr-2 mb-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                
                {/* Guest Profile Option */}
                <div 
                  onClick={() => {
                    playSfx('select');
                    handleClearMii();
                  }}
                  onMouseEnter={() => playSfx('hover')}
                  className={`flex flex-col items-center p-3 rounded-2xl cursor-pointer border-2 transition-all duration-200 hover:-translate-y-1 ${
                    !personalMii 
                      ? 'border-[#00d8ff] bg-[#00d8ff]/10' 
                      : 'border-transparent bg-gray-100/50 hover:bg-gray-200/50 hover:border-gray-300'
                  }`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gray-300 flex items-center justify-center mb-2 shadow-inner">
                    <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] text-gray-500 fill-current">
                      <circle cx="50" cy="35" r="18" />
                      <path d="M 15 95 Q 15 65 50 65 Q 85 65 85 95 Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-700">Guest User</span>
                </div>

                {/* Library Miis */}
                {libraryMiis.map((mii) => {
                  const isSelected = personalMii?.id === mii.id;
                  const iconUrl = libraryIcons[mii.id];
                  
                  return (
                    <div 
                      key={mii.id}
                      onClick={() => {
                        playSfx('select');
                        handleSelectMii(mii);
                      }}
                      onMouseEnter={() => playSfx('hover')}
                      className={`flex flex-col items-center p-3 rounded-2xl cursor-pointer border-2 transition-all duration-200 hover:-translate-y-1 ${
                        isSelected 
                          ? 'border-[#00d8ff] bg-[#00d8ff]/10' 
                          : 'border-transparent bg-gray-100/50 hover:bg-gray-200/50 hover:border-gray-300'
                      }`}
                    >
                      {iconUrl ? (
                        <img 
                          src={iconUrl} 
                          alt={mii.nickname} 
                          className="w-16 h-16 object-cover rounded-2xl mb-2 shadow-md bg-white border border-gray-100"
                        />
                      ) : (
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getMiiGradient(mii.nickname)} flex items-center justify-center text-white font-extrabold text-2xl mb-2 shadow-md`}>
                          {mii.nickname.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="text-xs font-bold text-gray-700 truncate max-w-[100px]">{mii.nickname}</span>
                      {isSelected && localStorage.getItem('loggedInUsername') && (
                        <span className="text-[10px] text-[#00d8ff] font-bold truncate max-w-[100px]">
                          NNID: {localStorage.getItem('loggedInUsername')}
                        </span>
                      )}
                    </div>
                  );
                })}

                {/* Empty State */}
                {libraryMiis.length === 0 && (
                  <div className="col-span-full py-8 text-center text-gray-500">
                    <p className="mb-2">No Miis found in your library.</p>
                    <p className="text-sm">Launch Mii Maker to create your first Mii!</p>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-4 pt-4 border-t border-gray-200/50">
              <button 
                onClick={() => {
                  playSfx('select');
                  launchMiiMaker();
                }}
                onMouseEnter={() => playSfx('hover')}
                className="flex-grow py-3 bg-[#00d8ff] hover:bg-[#00c0e0] text-white font-bold rounded-2xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg viewBox="0 0 100 100" className="w-5 h-5 fill-current">
                  <path d="M 50 15 Q 80 15 80 45 Q 80 80 50 80 Q 20 80 20 45 Q 20 15 50 15 Z" fill="#ffffff" />
                  <path d="M 50 24 Q 70 24 70 44 Q 70 70 50 70 Q 30 70 30 44 Q 30 24 50 24 Z" fill="#ffe2c4" />
                  <circle cx="41" cy="45" r="4.5" fill="#2d2d2d" />
                  <circle cx="59" cy="45" r="4.5" fill="#2d2d2d" />
                  <path d="M 50 44 L 50 51" stroke="#e09d57" strokeWidth="2.5" />
                  <path d="M 43 57 Q 50 63 57 57" fill="none" stroke="#2d2d2d" strokeWidth="3" />
                </svg>
                Open Mii Maker
              </button>
              <button 
                onClick={() => {
                  playSfx('back');
                  setIsSelectModalOpen(false);
                }}
                onMouseEnter={() => playSfx('hover')}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-2xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Mii Maker loading screen — shown when launching Mii Maker */}
      {showMiiLoading && (
        <LoadingScreen onDone={handleMiiLoadingDone} isReady={miiIframeLoaded} />
      )}

      {/* Mii Maker App Iframe */}
      {showMiiIframe && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9990,
            backgroundColor: '#ffffff',
          }}
        >
          <iframe
            src="/mii-creator/"
            allow="autoplay"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              visibility: miiIframeLoaded ? 'visible' : 'hidden',
              pointerEvents: miiIframeLoaded ? 'auto' : 'none',
            }}
            onLoad={handleMiiIframeLoad}
          />
        </div>
      )}

      {/* eShop loading screen — shown when launching eShop */}
      {showEshopLoading && (
        <LoadingScreen onDone={handleEshopLoadingDone} isReady={eshopIframeLoaded} appName="eshop" />
      )}

      {/* eShop App Iframe */}
      {showEshopIframe && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9990,
            backgroundColor: '#ffffff',
          }}
        >
          <iframe
            src="/geisha-wup.cdn.nintendo.net/geisha/index.html"
            allow="autoplay"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              visibility: eshopIframeLoaded ? 'visible' : 'hidden',
              pointerEvents: eshopIframeLoaded ? 'auto' : 'none',
            }}
            onLoad={handleEshopIframeLoad}
          />
        </div>
      )}

      {/* Minecraft loading screen — shown when launching Minecraft */}
      {showMinecraftLoading && (
        <LoadingScreen onDone={handleMinecraftLoadingDone} isReady={minecraftIframeLoaded} appName={activeGameId === '20010000020451' ? 'minecraft' : 'game'} splashUrl={activeGameSplash} jingleUrl={activeGameJingle} />
      )}

      {/* Minecraft App Iframe */}
      {showMinecraftIframe && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9990,
            backgroundColor: '#000000',
          }}
        >
          <iframe
            ref={minecraftIframeRef}
            src={minecraftSrc ?? undefined}
            allow="autoplay; gamepad"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              visibility: minecraftIframeLoaded ? 'visible' : 'hidden',
              pointerEvents: minecraftIframeLoaded && !showHomeMenu ? 'auto' : 'none',
            }}
            onLoad={handleMinecraftIframeLoad}
          />

          {/* Floating HOME Button */}
          {minecraftIframeLoaded && !showHomeMenu && (
            <button
              onClick={() => {
                playSfx('select');
                setShowHomeMenu(true);
              }}
              onMouseEnter={() => playSfx('hover')}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-white/25 hover:bg-white/40 text-white font-bold text-sm tracking-wider shadow-lg hover:shadow-xl backdrop-blur-md border border-white/30 transition-all active:scale-95 z-[9992] cursor-pointer flex items-center gap-2 group pointer-events-auto"
            >
              {/* Home Icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span>HOME Menu</span>
            </button>
          )}
        </div>
      )}

      {/* System Settings loading screen */}
      {showSystemSettingsLoading && (
        <LoadingScreen onDone={() => {
          setShowSystemSettingsLoading(false);
          playSystemSettingsBgm();
        }} isReady={systemSettingsIframeLoaded} appName="system-settings" />
      )}

      {/* System Settings App Iframe */}
      {showSystemSettingsIframe && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9990,
            backgroundColor: '#ffffff',
          }}
        >
          <iframe
            src="/wii_u_system_settings.html"
            allow="autoplay"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              visibility: systemSettingsIframeLoaded ? 'visible' : 'hidden',
              pointerEvents: systemSettingsIframeLoaded && !showHomeMenu ? 'auto' : 'none',
            }}
            onLoad={handleSystemSettingsIframeLoad}
          />
        </div>
      )}

      {/* Wii U Styled HOME Menu Overlay */}
      {showHomeMenu && renderHomeMenu()}

      {/* Wara Wara Plaza View (always mounted so the 3D scene preloads) */}
      {(
        <div
          className="fixed inset-0 z-[40] bg-gradient-to-b from-[#aae4ff] via-[#d0f0ff] to-[#f0f9ff] flex flex-col items-center justify-center font-['Nunito',sans-serif] select-none"
          style={{
            transform: plazaIn ? 'translateY(0)' : 'translateY(100%)',
            transition: `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            pointerEvents: plazaIn ? 'auto' : 'none',
          }}
        >
          
          {/* Plaza Background Grid and Circles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full border-4 border-dashed border-sky-300/60 rotate-45"></div>
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full border-4 border-sky-200/60"></div>
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full border-2 border-sky-150/40"></div>
          </div>

          {/* Header Title */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
            <h1 className="text-3xl font-black text-sky-900 tracking-tight drop-shadow-sm uppercase">Wara Wara Plaza</h1>
            <p className="text-xs font-bold text-sky-600/80 mt-1 uppercase tracking-widest">Stage 1 Mii Render Showcase</p>
          </div>

          {/* 3D Mii Container */}
          <div
            ref={plazaCanvasContainerRef}
            onPointerDown={handlePlazaPick}
            onPointerMove={handlePlazaHover}
            onPointerLeave={handlePlazaLeave}
            className="absolute inset-0 w-full h-full z-0 flex items-center justify-center"
          />

          {/* Ambient "what they're playing" speech bubbles (positioned imperatively) */}
          <div ref={plazaBubbleLayerRef} className="absolute inset-0 z-[45] pointer-events-none overflow-hidden" />

          {/* Mii detail panel (warawara_plaza_ui) — shown on Mii click */}
          {selectedPlazaMii && (
            <PlazaMiiPanel
              name={selectedPlazaMii.name}
              game={selectedPlazaMii.game}
              onClose={closePlazaMii}
              onStart={() => { if (selectedPlazaMii.game === 'Eaglercraft') launchMinecraft(); }}
              onBubbleMount={(el) => plazaPickRef.current?.setBubble?.(el)}
            />
          )}

          {/* Back to Wii U Menu Grid Button */}
          <div className="absolute bottom-6 left-6 z-50">
            <button
              onClick={() => {
                playSfx('back');
                closePlaza();
              }}
              onMouseEnter={() => playSfx('hover')}
              className="w-12 h-12 rounded-full bg-white/80 hover:bg-white hover:scale-105 active:scale-95 shadow-md border border-gray-250 flex items-center justify-center cursor-pointer transition-all duration-200"
              title="Wii U Menu Grid"
            >
              {/* Grid icon */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 fill-none stroke-current" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Nintendo eShop exit transition white-screen */}
      {eshopExitState === 'white-screen' && (
        <div className="fixed inset-0 bg-white z-[9998] transition-opacity duration-300 animate-fade-in pointer-events-auto" />
      )}

      {eshopExitState === 'loading-menu' && (
        <LoadingScreen
          onDone={handleReturnTransitionDone}
          isReady={true}
          appName="wii-u-menu"
        />
      )}

      {/* Wii U Menu manual modal */}
      {showManualModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-lg animate-fade-in pointer-events-auto">
          <div className="bg-[#f0f0f2] border-2 border-white/50 rounded-[40px] w-[90%] max-w-[650px] max-h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-scale-up font-['Nunito',sans-serif] text-gray-800 select-none">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-5 flex items-center justify-between border-b border-gray-250">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-white text-emerald-600 flex items-center justify-center font-bold text-base shadow">?</div>
                <h3 className="text-xl font-extrabold tracking-tight">Wii U Menu Manual</h3>
              </div>
              <button 
                onClick={() => { playSfx('back'); setShowManualModal(false); }}
                className="w-8 h-8 rounded-full bg-black/15 hover:bg-black/25 flex items-center justify-center text-white font-extrabold text-lg cursor-pointer transition-all border border-white/10"
              >
                ✕
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="p-8 overflow-y-auto flex flex-col gap-6 text-sm leading-relaxed max-h-[60vh] scrollbar-thin">
              <div>
                <h4 className="text-base font-extrabold text-emerald-600 mb-2">1. Getting Started</h4>
                <p className="text-gray-600">
                  Welcome to the <strong>Wii U Menu Remake</strong>. This app simulates the operating system of the Nintendo Wii U console. Use your mouse or touchscreen to select and start software applications. You can press the <strong>Escape (Esc)</strong> key on your keyboard at any time to suspend running software and open the HOME Menu.
                </p>
              </div>

              <div className="border-t border-gray-300/60 pt-4">
                <h4 className="text-base font-extrabold text-emerald-600 mb-2">2. Keyboard & Navigation Controls</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 mt-2">
                  <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1">
                    <span className="font-bold text-gray-700">Wii U Menu Controls</span>
                    <span>• Mouse Hover: Focus icons (plays sound)</span>
                    <span>• Mouse Click: Start / Select button</span>
                    <span>• Press Escape: Open / Close HOME Menu</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1">
                    <span className="font-bold text-gray-700">System Settings Controls</span>
                    <span>• Arrow Keys: Navigate sub-screens</span>
                    <span>• Press B: Go back to previous screen</span>
                    <span>• Press Enter: Select / Save settings</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300/60 pt-4">
                <h4 className="text-base font-extrabold text-emerald-600 mb-2">3. Applications & Games</h4>
                <ul className="list-disc pl-5 text-gray-600 flex flex-col gap-1.5">
                  <li><strong>Mii Maker:</strong> Edit, import, export, or design your own custom 3D Miis.</li>
                  <li><strong>Nintendo eShop:</strong> Browse games, add balance to your account, purchase software, and view library downloads.</li>
                  <li><strong>Eaglercraft (Minecraft):</strong> Play the fully functional browser port of Minecraft. Supports keyboard and mouse controls.</li>
                  <li><strong>System Settings:</strong> Configure console data management, profile credentials, clock settings, and run mock updates.</li>
                </ul>
              </div>

              <div className="border-t border-gray-300/60 pt-4">
                <h4 className="text-base font-extrabold text-emerald-600 mb-2">4. Connection & Support</h4>
                <p className="text-gray-600">
                  This console is connected to local servers. To access admin settings, use default credentials: <strong>Admin / Admin</strong>. For additional questions or support, consult the system administrator.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-250/60 border-t border-gray-250 px-8 py-4 flex justify-end">
              <button 
                onClick={() => { playSfx('back'); setShowManualModal(false); }}
                className="px-6 py-2.5 bg-gradient-to-b from-white to-gray-150 hover:to-gray-100 text-gray-700 border border-gray-300 font-extrabold text-sm rounded-xl shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer select-none"
              >
                Close Manual
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification overlay */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2.5 rounded-full border border-white/20 shadow-2xl z-[9999] animate-fade-in pointer-events-none tracking-wide select-none flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
