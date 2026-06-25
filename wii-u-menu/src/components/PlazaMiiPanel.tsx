import React, { useEffect, useRef } from 'react';

/**
 * PlazaMiiPanel — the Wii U "WaraWara Plaza" Mii-detail overlay.
 * Ported from warawara_plaza_ui.html. Shown when a Mii in the plaza is clicked:
 * the camera zooms onto the real 3D Mii (it turns to face the camera), a speech
 * bubble floats over that Mii's head (positioned imperatively each frame by the
 * 3D loop via `onBubbleMount`), and a glossy menu panel sits on the right.
 *
 * Uses the Mii Maker system font ("NTLG", @font-face in index.css). The Start
 * control is the SAME `.wiiu-icon`/`.start-btn` used on the main Wii U Menu.
 */

const GAME_ICONS: Record<string, string> = {
  'Mii Maker': '/local-assets/icons/Mii Maker.png',
  'Eaglercraft': '/local-assets/icons/eaglercraft.png',
  'Nintendo eShop': '/local-assets/icons/ESHOP ICON.png',
  'Wii U Menu': '/local-assets/icons/Mii Maker.png',
};

type Props = {
  name: string;
  game: string;
  onClose: () => void;
  onStart: () => void;
  // Registers the bubble DOM node so the 3D render loop can position it over
  // the Mii's head (null on unmount).
  onBubbleMount: (el: HTMLDivElement | null) => void;
};

export const PlazaMiiPanel: React.FC<Props> = ({ name, game, onClose, onStart, onBubbleMount }) => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const icon = GAME_ICONS[game];
  const titleText = game || 'Wii U';

  useEffect(() => {
    onBubbleMount(bubbleRef.current);
    return () => onBubbleMount(null);
  }, [onBubbleMount]);

  return (
    <div
      className="absolute inset-0 z-[60]"
      style={{ fontFamily: "'NTLG','Segoe UI',Roboto,Helvetica,Arial,sans-serif", letterSpacing: '-0.01em' }}
    >
      {/* Transparent click-catcher: click anywhere outside the panel to close.
          Leaves the live 3D Mii fully visible (no dimming). */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Speech bubble — positioned over the Mii's head by the 3D loop. */}
      <div
        ref={bubbleRef}
        className="absolute z-30 drop-shadow-lg pointer-events-none"
        style={{ left: 0, top: 0, transform: 'translate(-50%,60%) scale(1)', transformOrigin: 'top center', opacity: 0, willChange: 'left, top, transform' }}
      >
        <div className="absolute -top-3 left-2 bg-[#222] text-white text-[11px] font-bold px-3 py-0.5 rounded-full z-30 shadow-md border border-[#444] tracking-wide whitespace-nowrap">
          {name}
        </div>
        <div className="bg-white/55 backdrop-blur-md rounded-[22px] p-2 pr-5 flex items-center gap-3 relative border border-white/50 min-w-[180px]">
          <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white/55 backdrop-blur-md rotate-45 border-r border-b border-white/50" />
          <div className="w-[50px] h-[50px] bg-white/40 border border-white/50 rounded-[14px] flex items-center justify-center p-[3px] shadow-sm ml-1 overflow-hidden">
            {icon ? (
              <img src={icon} alt={game} className="w-full h-full object-cover rounded-[10px]" />
            ) : (
              <div className="w-full h-full bg-[#e5396b] rounded-[10px] border border-white" />
            )}
          </div>
          <div className="flex flex-col justify-center leading-snug mt-1">
            <span className="text-[#444] text-[13px]">Been playing:</span>
            <span className="text-black text-[15.5px] font-semibold">{titleText}</span>
          </div>
        </div>
      </div>

      {/* Right-side menu panel */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[370px] rounded-[32px] overflow-hidden flex flex-col z-20 backdrop-blur-xl"
        style={{ background: 'rgba(253,253,253,0.45)', boxShadow: '0 15px 35px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.6), 0 0 0 1px rgba(208,208,208,0.6)' }}
      >
        {/* Metallic header (translucent so the frost shows through) */}
        <div
          className="border-b border-white/40 py-3 flex items-center justify-center relative"
          style={{ background: 'linear-gradient(180deg,rgba(230,230,230,0.55) 0%,rgba(184,184,184,0.55) 100%)', boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.7)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[45%] bg-white opacity-40 rounded-t-[32px] pointer-events-none" />
          <span className="text-white font-bold text-[18px] tracking-[0.02em] relative z-10" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{titleText}</span>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* Start (same .wiiu-icon/.start-btn as the main menu) + eShop */}
          <div className="flex justify-center items-center gap-4">
            <div className="wiiu-icon w-[116px] h-[126px] rounded-[18px] overflow-hidden shadow-md border border-[#d8d8d8]" tabIndex={0}>
              {icon ? (
                <img className="game-icon" src={icon} alt={game} />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-[#d7d7d7] to-[#bcbcbc]" />
              )}
              <button className="start-btn" onClick={onStart}><span>Start</span></button>
            </div>

            <button className="relative bg-white rounded-[20px] border-[3.5px] border-[#ffaa00] w-[146px] h-[104px] flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}>
              <div className="absolute -left-[16px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[14px] border-y-transparent border-r-[14px] border-r-[#ffaa00]" />
              <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white z-10" />
              <svg className="w-[50px] h-[50px] text-[#ffaa00] mb-0.5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 8V6a6 6 0 1 1 12 0v2h4v14H2V8h4zm2 0h8V6a4 4 0 0 0-8 0v2z" />
              </svg>
              <span className="text-[#f59e0b] font-bold text-[12.5px] relative z-10 tracking-tight">Nintendo eShop</span>
            </button>
          </div>

          {/* List buttons */}
          <div className="flex flex-col gap-2.5 px-1 mt-1">
            {[
              { label: 'Go to Miiverse', size: 34, d: 'M12 11c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm-6 0c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm12 0c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zM12 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm-7.66 0c-1.38 1-2.34 2.22-2.34 3.5V19h3v-2.5c0-.98.39-2.06 1.15-3.05-.59-.16-1.22-.29-1.81-.45zm15.32 0c-.59.16-1.22.29-1.81.45.76.99 1.15 2.07 1.15 3.05V19h3v-2.5c0-1.28-.96-2.5-2.34-3.5z' },
              { label: 'Go to Profile', size: 28, d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
            ].map((b) => (
              <button
                key={b.label}
                className="w-full rounded-full py-3 px-5 flex items-center gap-4 border border-[#ccc] relative overflow-hidden group cursor-pointer"
                style={{ background: 'linear-gradient(180deg,#ffffff 0%,#e8e8e8 100%)', boxShadow: '0 3px 6px rgba(0,0,0,0.08)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-white opacity-60 rounded-t-full pointer-events-none group-active:opacity-0" />
                <svg className="text-[#54d12a] relative z-10" style={{ width: b.size, height: b.size }} viewBox="0 0 24 24" fill="currentColor">
                  <path d={b.d} />
                </svg>
                <span className="text-[#333] font-medium text-[16.5px] relative z-10" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.8)' }}>{b.label}</span>
              </button>
            ))}
          </div>

          {/* Close */}
          <div className="mt-4 mb-2 flex justify-center">
            <button
              onClick={onClose}
              className="border-[1.5px] border-[#111] rounded-full py-2.5 px-[72px] flex items-center justify-center gap-2 text-white font-medium text-[15.5px] relative overflow-hidden cursor-pointer active:translate-y-px"
              style={{ background: 'linear-gradient(180deg,#5c5c5c 0%,#2c2c2c 100%)', boxShadow: '0 4px 6px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.2)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-white opacity-10 rounded-t-full pointer-events-none" />
              <div className="w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center text-[10px] font-bold pb-[1px] mr-1 relative z-10">B</div>
              <span className="relative z-10">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
