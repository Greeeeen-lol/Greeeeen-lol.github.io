import React, { useEffect, useRef, useState } from 'react';
import miiMakerIcon from '../../assets/mii-maker.png';

const BG_URL        = '/local-assets/backgroun/image (62).png';
const AUDIO_URL     = '/local-assets/audio/Loading - Wii U OS OST.mp3';
const MII_AUDIO_URL = '/local-assets/mii-animation/8. Mii Maker - Loading _ Wii U System Soundtrack.mp3';

// Timing constants (ms)
const FADE_IN_DURATION  = 800;
const HOLD_DURATION     = 4400;
const FADE_OUT_DURATION = 800;
const MII_PLAY_DURATION = 6000; // 6 seconds

type Phase = 
  | 'stock-fadein' 
  | 'stock-hold' 
  | 'stock-fadeout' 
  | 'mii-play' 
  | 'mii-fadeout' 
  | 'done';

interface LoadingScreenProps {
  onDone: () => void;
  isReady?: boolean;
  appName?: 'mii-maker' | 'eshop' | 'minecraft' | 'game' | 'wii-u-menu' | 'system-settings';
  // Per-game launch loading screen: full-bleed splash image + jingle. When set,
  // behaves like the Minecraft splash but with this game's art/audio. jingleUrl
  // null → falls back to the Minecraft jingle.
  splashUrl?: string | null;
  jingleUrl?: string | null;
}

export function LoadingScreen({ onDone, isReady = true, appName = 'mii-maker', splashUrl = null, jingleUrl = null }: LoadingScreenProps) {
  // Any game with a full-screen splash (Minecraft, or a bundle title with art).
  const isGameSplash = appName === 'minecraft' || !!splashUrl;
  const splashSrc = splashUrl || '/local-assets/icons/minecraft_banner.png';
  const [phase, setPhase] = useState<Phase>('stock-fadein');
  const [miiPlayFinished, setMiiPlayFinished] = useState(false);
  const [frame, setFrame] = useState(1);
  const stockAudioRef = useRef<HTMLAudioElement | null>(null);
  const miiAudioRef = useRef<HTMLAudioElement | null>(null);

  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  const isMii = appName === 'mii-maker';

  // Preload Mii Maker animation frames on mount to prevent flickering
  useEffect(() => {
    if (!isMii) return;
    const totalFrames = 116;
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/local-assets/mii-animation/image (${i}).png`;
    }
  }, [isMii]);

  // Create and start stock audio on mount
  useEffect(() => {
    const src = jingleUrl
      ? jingleUrl
      : isGameSplash
        ? '/local-assets/audio/minecraft_banner.mp3'
        : AUDIO_URL;
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.85;
    stockAudioRef.current = audio;

    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        const resume = () => { audio.play(); document.removeEventListener('click', resume); };
        document.addEventListener('click', resume);
      });
    }

    return () => {
      audio.pause();
      audio.src = '';
      if (miiAudioRef.current) {
        miiAudioRef.current.pause();
        miiAudioRef.current.src = '';
      }
    };
  }, [appName, jingleUrl, splashUrl]);

  // Frame animation loop
  const animating = isMii && (phase === 'stock-fadeout' || phase === 'mii-play' || phase === 'mii-fadeout');
  useEffect(() => {
    if (!animating) {
      setFrame(1);
      return;
    }

    let lastTime = performance.now();
    const frameDuration = 1000 / 30; // 30 fps (approx. 33.3ms)
    let currentFrame = 1;
    let animationId: number;

    const updateFrame = (time: number) => {
      const elapsed = time - lastTime;
      if (elapsed >= frameDuration) {
        const framesPassed = Math.floor(elapsed / frameDuration);
        currentFrame = ((currentFrame - 1 + framesPassed) % 116) + 1;
        setFrame(currentFrame);
        lastTime = time - (elapsed % frameDuration);
      }
      animationId = requestAnimationFrame(updateFrame);
    };

    animationId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animationId);
  }, [animating]);

  // Phase sequencing: stock-fadein -> stock-hold
  useEffect(() => {
    if (phase === 'stock-fadein') {
      const t = setTimeout(() => setPhase('stock-hold'), FADE_IN_DURATION);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Phase sequencing: stock-hold -> stock-fadeout
  useEffect(() => {
    if (phase === 'stock-hold') {
      if (!isMii) {
        // Hold at least 1.5 seconds, or until ready (8 seconds for Minecraft)
        let readyTimer: any;
        const checkReady = () => {
          if (isReady) {
            setPhase('stock-fadeout');
          } else {
            readyTimer = setTimeout(checkReady, 100);
          }
        };
        const holdTime = appName === 'minecraft' ? 8000 : isGameSplash ? 3000 : appName === 'wii-u-menu' ? 4000 : 1500;
        const minHoldTimer = setTimeout(checkReady, holdTime);
        return () => {
          clearTimeout(minHoldTimer);
          clearTimeout(readyTimer);
        };
      } else {
        const t = setTimeout(() => {
          setPhase('stock-fadeout');
        }, HOLD_DURATION);
        return () => clearTimeout(t);
      }
    }
  }, [phase, isMii, isReady, appName]);

  // Phase sequencing: stock-fadeout -> mii-play
  useEffect(() => {
    if (phase === 'stock-fadeout') {
      if (isMii) {
        // Start Mii Maker audio immediately
        const audio = new Audio(MII_AUDIO_URL);
        audio.loop = true;
        audio.volume = 0.85;
        miiAudioRef.current = audio;

        const playPromise = audio.play();
        if (playPromise) {
          playPromise.catch(() => {
            const resume = () => { audio.play(); document.removeEventListener('click', resume); };
            document.addEventListener('click', resume);
          });
        }

        // Fade out stock audio volume
        const stockAudio = stockAudioRef.current;
        if (stockAudio) {
          const startVol = stockAudio.volume;
          const steps = 20;
          const stepTime = FADE_OUT_DURATION / steps;
          let step = 0;
          const fadeInterval = setInterval(() => {
            step++;
            if (stockAudio && !stockAudio.paused) {
              stockAudio.volume = Math.max(0, startVol * (1 - step / steps));
            }
            if (step >= steps) clearInterval(fadeInterval);
          }, stepTime);
        }

        const t = setTimeout(() => {
          if (stockAudioRef.current) {
            stockAudioRef.current.pause();
            stockAudioRef.current.src = '';
          }
          setPhase('mii-play');
        }, FADE_OUT_DURATION);
        return () => clearTimeout(t);
      } else {
        // eShop fadeout sequence: fade out stock audio and finish
        const stockAudio = stockAudioRef.current;
        if (stockAudio) {
          const startVol = stockAudio.volume;
          const steps = 20;
          const stepTime = FADE_OUT_DURATION / steps;
          let step = 0;
          const fadeInterval = setInterval(() => {
            step++;
            if (stockAudio && !stockAudio.paused) {
              stockAudio.volume = Math.max(0, startVol * (1 - step / steps));
            }
            if (step >= steps) clearInterval(fadeInterval);
          }, stepTime);
        }

        const t = setTimeout(() => {
          if (stockAudioRef.current) {
            stockAudioRef.current.pause();
            stockAudioRef.current.src = '';
          }
          // Resume iframe AudioContext(s) (eShop background audio)
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
            } catch (e) {
              console.error("Failed to resume eShop iframe audio:", e);
            }
          }
          setPhase('done');
          onDoneRef.current();
        }, FADE_OUT_DURATION);
        return () => clearTimeout(t);
      }
    }
  }, [phase, isMii]);

  // Phase sequencing: mii-play -> mii-fadeout
  useEffect(() => {
    if (phase === 'mii-play') {
      const t = setTimeout(() => {
        setMiiPlayFinished(true);
      }, MII_PLAY_DURATION);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'mii-play' && miiPlayFinished && isReady) {
      setPhase('mii-fadeout');
    }
  }, [phase, miiPlayFinished, isReady]);

  // Phase sequencing: mii-fadeout -> done
  useEffect(() => {
    if (phase === 'mii-fadeout') {
      // Fade out mii audio volume
      const miiAudio = miiAudioRef.current;
      if (miiAudio) {
        const startVol = miiAudio.volume;
        const steps = 20;
        const stepTime = FADE_OUT_DURATION / steps;
        let step = 0;
        const fadeInterval = setInterval(() => {
          step++;
          if (miiAudio && !miiAudio.paused) {
            miiAudio.volume = Math.max(0, startVol * (1 - step / steps));
          }
          if (step >= steps) clearInterval(fadeInterval);
        }, stepTime);
      }

      // Cross-fade: Start Mii Creator music fade-in when mii-fadeout starts
      const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
        try {
          const win = iframe.contentWindow as any;
          win.allowAudioResume = true;
          
          // Resume the suspended AudioContexts inside the iframe
          if (win.suspendedAudioContexts) {
            win.suspendedAudioContexts.forEach((ctx: any) => {
              if (ctx && typeof ctx.resume === 'function') {
                ctx.resume();
              }
            });
          }
          
          // Fade in the Mii Creator MusicManager (win.mm)
          if (win.mm && win.mm.gainNode) {
            const mm = win.mm;
            const targetVol = (mm.currentVolume || 1) * mm.volMultiplier;
            
            // Set initial volume to 0
            mm.gainNode.gain.setValueAtTime(0, mm.audioContext.currentTime);
            
            const steps = 20;
            const stepTime = FADE_OUT_DURATION / steps;
            let step = 0;
            const fadeInterval = setInterval(() => {
              step++;
              if (mm && mm.gainNode) {
                mm.gainNode.gain.setValueAtTime(
                  targetVol * (step / steps),
                  mm.audioContext.currentTime
                );
              }
              if (step >= steps) clearInterval(fadeInterval);
            }, stepTime);
          }
        } catch (e) {
          console.error("Failed to fade in Mii Creator background audio:", e);
        }
      }

      const t = setTimeout(() => {
        if (miiAudioRef.current) {
          miiAudioRef.current.pause();
          miiAudioRef.current.src = '';
        }
        setPhase('done');
        onDoneRef.current();
      }, FADE_OUT_DURATION);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className="loading-screen-container"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        background: isGameSplash ? '#000000' : '#ffffff',
      }}
    >
      {/* 1. Mii Maker Loading Layer (Underneath) */}
      {isMii && (phase === 'stock-hold' || phase === 'stock-fadeout' || phase === 'mii-play' || phase === 'mii-fadeout') && (
        <div
          className="mii-animation-layer"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation:
              phase === 'mii-fadeout'
                ? `loadingFadeOut ${FADE_OUT_DURATION}ms ease-out forwards`
                : 'none',
          }}
        >
          <img
            src={`/local-assets/mii-animation/image (${frame}).png`}
            alt="Mii Maker Loading Animation"
            className="mii-animation-img"
          />
        </div>
      )}

      {/* 2. Stock Loading Screen Layer (On Top) */}
      {(phase === 'stock-fadein' || phase === 'stock-hold' || phase === 'stock-fadeout') && (
        <div
          className="loading-screen-wrapper"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation:
              phase === 'stock-fadein'
                ? `loadingFadeIn ${FADE_IN_DURATION}ms ease-in forwards`
                : phase === 'stock-fadeout'
                ? `loadingFadeOut ${FADE_OUT_DURATION}ms ease-out forwards`
                : 'none',
            background: isGameSplash ? '#000000' : undefined,
          }}
        >
          {isGameSplash ? (
            <img
              src={splashSrc}
              alt="Game Loading"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <div className="loading-screen-card">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '22px',
                }}
              >
                {/* Icon */}
                {appName === 'system-settings' ? (
                  <img
                    src="/local-assets/icons/settings.png"
                    alt="System Settings"
                    className="loading-icon-img"
                  />
                ) : appName === 'wii-u-menu' ? (
                  <div className="w-[128px] h-[128px] rounded-[24px] bg-[#ebebeb] border-b-4 border-gray-400/80 shadow-[0_6px_18px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-500 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                    <div className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center bg-white shadow-inner">
                      {/* Home SVG */}
                      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-gray-400">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                    </div>
                  </div>
                ) : isMii ? (
                  <img
                    src={miiMakerIcon}
                    alt="Mii Maker"
                    className="loading-icon-img"
                  />
                ) : (
                  <img
                    src="/local-assets/icons/ESHOP ICON.png"
                    alt="Nintendo eShop"
                    className="loading-icon-img"
                    style={{
                      backgroundColor: '#ffd500',
                      padding: '12px'
                    }}
                  />
                )}

                {/* Label */}
                <span className="loading-icon-label">
                  {appName === 'mii-maker' && "Mii Maker"}
                  {appName === 'eshop' && "Nintendo eShop"}
                  {appName === 'wii-u-menu' && "Wii U Menu"}
                  {appName === 'system-settings' && "System Settings"}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @font-face {
          font-family: "NTLG";
          src: url("/assets/fonts/NTLG.woff2") format("woff2");
          font-display: swap;
        }
        @keyframes loadingFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes loadingFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        .loading-screen-wrapper {
          background: linear-gradient(to bottom, #dedede 0%, #a2a2a2 100%);
        }
        .loading-screen-card {
          position: absolute;
          inset: 22px 30px;
          background: #ffffff;
          border-radius: min(6vw, 68px);
          box-shadow: 
            0 4px 24px rgba(0,0,0,0.06),
            inset 0 0 1px 1px rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loading-icon-img {
          width: 128px;
          height: 128px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.14);
        }
        .loading-icon-label {
          font-family: "NTLG", ui-sans-serif, system-ui, sans-serif;
          font-size: 1.45rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #3c3c3c;
        }
        .mii-animation-layer {
          position: absolute;
          inset: 0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mii-animation-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
