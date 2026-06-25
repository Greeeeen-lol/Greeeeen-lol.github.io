import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Sound helpers ─── */
const playSfx = (type: 'hover' | 'select' | 'back') => {
  try {
    const map = { hover: '/local-assets/audio/hover.wav', select: '/local-assets/audio/select.wav', back: '/local-assets/audio/back.wav' };
    const vol = type === 'hover' ? 0.25 : 0.55;
    const a = new Audio(map[type]);
    a.volume = vol;
    a.play().catch(() => {});
  } catch (_) {}
};

/* ─── Data ─── */
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const daysInMonth = (m: number, y: number) => new Date(y, m, 0).getDate();

const COUNTRIES = [
  'Japan','United States','Canada','United Kingdom','France','Germany',
  'Italy','Spain','Netherlands','Belgium','Portugal','Australia',
  'New Zealand','Brazil','Mexico','Argentina','Chile','Colombia',
  'South Korea','China','Taiwan','Hong Kong','Singapore','India',
  'Russia','Sweden','Norway','Denmark','Finland','Poland',
  'Czech Republic','Austria','Switzerland','Ireland','South Africa',
  'Greece','Turkey','Other',
];

const TIMEZONES = [
  { label: 'UTC−12 : Baker Island', offset: -12 },
  { label: 'UTC−11 : Samoa', offset: -11 },
  { label: 'UTC−10 : Hawaii', offset: -10 },
  { label: 'UTC−09 : Alaska', offset: -9 },
  { label: 'UTC−08 : Pacific Time', offset: -8 },
  { label: 'UTC−07 : Mountain Time', offset: -7 },
  { label: 'UTC−06 : Central Time', offset: -6 },
  { label: 'UTC−05 : Eastern Time', offset: -5 },
  { label: 'UTC−04 : Atlantic Time', offset: -4 },
  { label: 'UTC−03 : Buenos Aires', offset: -3 },
  { label: 'UTC−02 : Mid-Atlantic', offset: -2 },
  { label: 'UTC−01 : Azores', offset: -1 },
  { label: 'UTC±00 : London / Dublin', offset: 0 },
  { label: 'UTC+01 : Paris / Berlin', offset: 1 },
  { label: 'UTC+02 : Helsinki / Athens', offset: 2 },
  { label: 'UTC+03 : Moscow / Istanbul', offset: 3 },
  { label: 'UTC+04 : Dubai', offset: 4 },
  { label: 'UTC+05 : Karachi', offset: 5 },
  { label: 'UTC+05:30 : Mumbai', offset: 5.5 },
  { label: 'UTC+06 : Dhaka', offset: 6 },
  { label: 'UTC+07 : Bangkok', offset: 7 },
  { label: 'UTC+08 : Singapore / HK', offset: 8 },
  { label: 'UTC+09 : Tokyo / Seoul', offset: 9 },
  { label: 'UTC+10 : Sydney', offset: 10 },
  { label: 'UTC+11 : Solomon Islands', offset: 11 },
  { label: 'UTC+12 : Auckland', offset: 12 },
];

/* ─── Glossy Arrow Button Component ─── */
const ArrowButton = ({ direction, onClick }: { direction: 'up' | 'down'; onClick: () => void }) => {
  const isUp = direction === 'up';
  return (
    <button
      onClick={() => { playSfx('select'); onClick(); }}
      onMouseEnter={() => playSfx('hover')}
      className="w-20 h-12 flex items-center justify-center hover:scale-110 active:scale-90 transition-transform duration-100 cursor-pointer"
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.18)]">
        <defs>
          <linearGradient id="glossArrow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fcfdfe" />
            <stop offset="70%" stopColor="#f0f3f6" />
            <stop offset="100%" stopColor="#d5dbe1" />
          </linearGradient>
        </defs>
        {isUp ? (
          <path
            d="M 50 12 L 82 44 A 4 4 0 0 1 78 50 L 22 50 A 4 4 0 0 1 18 44 Z"
            fill="url(#glossArrow)"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M 50 48 L 82 16 A 4 4 0 0 0 78 10 L 22 10 A 4 4 0 0 0 18 16 Z"
            fill="url(#glossArrow)"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

/* ─── Particles background component ─── */
const BokehBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(circle_at_center,#f7f9fa_0%,#d8e2e7_100%)]">
    {/* Bokeh Particles */}
    <div className="absolute top-[30%] left-[12%] w-8 h-8 rounded-full bg-white/60 blur-[3px] animate-float-particle-1" />
    <div className="absolute top-[65%] left-[28%] w-12 h-12 rounded-full bg-white/50 blur-[4px] animate-float-particle-2" />
    <div className="absolute top-[45%] right-[12%] w-10 h-10 rounded-full bg-white/60 blur-[3px] animate-float-particle-3" />
    <div className="absolute top-[80%] right-[28%] w-6 h-6 rounded-full bg-white/75 blur-[2px] animate-float-particle-4" />
    <div className="absolute top-[15%] right-[48%] w-14 h-14 rounded-full bg-white/45 blur-[5px] animate-float-particle-5" />
    <div className="absolute top-[40%] left-[45%] w-10 h-10 rounded-full bg-white/50 blur-[3px] animate-float-particle-3" style={{ animationDelay: '1.5s' }} />
    <div className="absolute top-[75%] left-[10%] w-6 h-6 rounded-full bg-white/65 blur-[2px] animate-float-particle-1" style={{ animationDelay: '2.5s' }} />
    <div className="absolute top-[55%] right-[45%] w-12 h-12 rounded-full bg-white/55 blur-[4px] animate-float-particle-2" style={{ animationDelay: '1.2s' }} />
  </div>
);

/* ─── Main Component ─── */
export function FirstBootSetup({ onComplete }: { onComplete: () => void }) {
  /* ── step management ── */
  const [step, setStep] = useState(0);
  const [vis, setVis] = useState(true); // controls fade

  const goTo = useCallback((next: number) => {
    setVis(false);
    setTimeout(() => { setStep(next); setVis(true); }, 350);
  }, []);

  /* ── form data ── */
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [day, setDay]     = useState(now.getDate());
  const [year, setYear]   = useState(now.getFullYear());
  const [country, setCountry] = useState('');
  const [tz, setTz]       = useState(() => {
    const auto = -(now.getTimezoneOffset() / 60);
    return TIMEZONES.reduce((prev, cur) =>
      Math.abs(cur.offset - auto) < Math.abs(prev.offset - auto) ? cur : prev
    ).offset;
  });

  const [hour, setHour] = useState(() => {
    let h = now.getHours();
    if (h === 0) return 12;
    if (h > 12) return h - 12;
    return h;
  });
  const [minute, setMinute] = useState(() => now.getMinutes());
  const [ampm, setAmpm] = useState<'a.m.' | 'p.m.'>(() => now.getHours() >= 12 ? 'p.m.' : 'a.m.');

  /* ── live clock ── */
  const [clock, setClock] = useState('');
  useEffect(() => {
    if (step !== 4) return;
    const tick = () => {
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const local = new Date(utc + tz * 3600000);
      setClock(local.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [step, tz]);

  /* ── Mii Creator iframe ── */
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const [miiDone, setMiiDone] = useState(false);
  const initialLibCount = useRef(0);

  /* ── NNID Account creation states ── */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nnidError, setNnidError] = useState('');
  const [loading, setLoading] = useState(false);
  const [allSetupDone, setAllSetupDone] = useState(false);
  const [createdMiiObj, setCreatedMiiObj] = useState<any>(null);

  useEffect(() => {
    if (step !== 5) return;
    fetch('/api/library').then(r => r.json()).then(lib => {
      initialLibCount.current = Array.isArray(lib) ? lib.length : 0;
    }).catch(() => {});
    const t = setTimeout(() => setShowIframe(true), 800);
    return () => clearTimeout(t);
  }, [step]);

  // Iframe integration
  useEffect(() => {
    if (!showIframe || miiDone) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    let destroyed = false;
    let pollId: number | undefined;
    let editorWasOpen = false;
    let checkingAfterClose = false;
    let audioResumed = false;

    const resumeAudio = (win: any) => {
      if (audioResumed) return;
      audioResumed = true;
      try {
        win.allowAudioResume = true;
        if (win.suspendedAudioContexts) {
          win.suspendedAudioContexts.forEach((ctx: any) => {
            if (ctx && typeof ctx.resume === 'function') ctx.resume();
          });
        }
        if (win.MusicManager && typeof win.MusicManager.unmute === 'function') {
          win.MusicManager.unmute();
        }
        if (win.soundManager && typeof win.soundManager.unmute === 'function') {
          win.soundManager.unmute();
        }
      } catch (_) {}
    };

    const injectCSS = (doc: Document) => {
      if (doc.getElementById('fb-hide')) return;
      const s = doc.createElement('style');
      s.id = 'fb-hide';
      s.textContent = `
        .mii-library { display:none !important; }
        body { background: #1e2d3d !important; }
      `;
      doc.head.appendChild(s);
    };

    const clickCreate = (doc: Document): boolean => {
      const btns = doc.querySelectorAll('.sidebar-buttons button');
      for (const b of btns) {
        if (b.textContent && /create/i.test(b.textContent)) {
          (b as HTMLElement).click();
          return true;
        }
      }
      return false;
    };

    const handleLoad = () => {
      if (destroyed) return;

      pollId = window.setInterval(async () => {
        if (destroyed || miiDone) { clearInterval(pollId); return; }

        try {
          const doc = iframe.contentDocument;
          const win = iframe.contentWindow as any;
          if (!doc || !win) return;

          const lib = doc.querySelector('.mii-library');
          if (!lib) return;

          resumeAudio(win);

          const editorOpen = win.editor != null;

          if (editorOpen) {
            editorWasOpen = true;
            setIframeReady(true);
            return;
          }

          if (editorWasOpen && !editorOpen && !checkingAfterClose) {
            editorWasOpen = false;
            checkingAfterClose = true;

            setTimeout(async () => {
              if (destroyed) return;
              try {
                const res = await fetch('/api/library');
                const list = await res.json();
                if (Array.isArray(list) && list.length > initialLibCount.current) {
                  const newMii = list[list.length - 1];
                  setCreatedMiiObj(newMii);
                  await fetch('/api/personal_mii', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: newMii.id }),
                  });
                  setMiiDone(true);
                  clearInterval(pollId);
                  
                  // Save basic settings
                  localStorage.setItem('wiiuSetupDate', JSON.stringify({ month, day, year }));
                  localStorage.setItem('wiiuSetupTime', JSON.stringify({ hour, minute, ampm }));
                  localStorage.setItem('wiiuSetupCountry', country);
                  localStorage.setItem('wiiuSetupTimezone', String(tz));
                  setTimeout(() => goTo(6), 1200);
                  return;
                }
              } catch (_) {}
              checkingAfterClose = false;
            }, 900);

            return;
          }

          if (checkingAfterClose) return;

          injectCSS(doc);

          const hasModal = doc.querySelector('.modal');
          if (!hasModal && !editorOpen) {
            clickCreate(doc);
          }

          setIframeReady(true);
        } catch (_) {}
      }, 800);
    };

    iframe.addEventListener('load', handleLoad);
    if (iframe.contentDocument?.readyState === 'complete') handleLoad();

    return () => {
      destroyed = true;
      if (pollId) clearInterval(pollId);
      iframe.removeEventListener('load', handleLoad);
    };
  }, [showIframe, miiDone, month, day, year, hour, minute, ampm, country, tz, onComplete]);

  const handleCreateAccount = async () => {
    setLoading(true);
    setNnidError('');
    try {
      const regRes = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          mii: createdMiiObj
        })
      });
      const regData = await regRes.json();
      if (!regRes.ok) {
        setNnidError(regData.error || 'Failed to create account');
        setLoading(false);
        return;
      }

      const logRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const logData = await logRes.json();
      if (!logRes.ok) {
        setNnidError(logData.error || 'Failed to log in');
        setLoading(false);
        return;
      }

      localStorage.setItem('wiiuFirstBootComplete', 'true');
      setAllSetupDone(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    } catch (e) {
      setNnidError('Network connection failed');
      setLoading(false);
    }
  };

  const handleSkipAccount = () => {
    localStorage.setItem('wiiuFirstBootComplete', 'true');
    setAllSetupDone(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  /* ── date boundaries capping ── */
  const handleMonthChange = (m: number) => {
    setMonth(m);
    const max = daysInMonth(m, year);
    if (day > max) setDay(max);
  };
  const handleYearChange = (y: number) => {
    setYear(y);
    const max = daysInMonth(month, y);
    if (day > max) setDay(max);
  };

  /* ── step title helper ── */
  const getStepTitle = () => {
    switch (step) {
      case 0: return 'Welcome';
      case 1:
      case 2: return 'Date and Time';
      case 3: return 'Select Country';
      case 4: return 'Set Time Zone';
      case 5: return 'Create Your Mii';
      case 6: return 'Nintendo Network ID';
      default: return 'Setup';
    }
  };

  const renderStep = () => {
    switch (step) {
      /* ─────── WELCOME ─────── */
      case 0:
        return (
          <div className="flex flex-col items-center gap-4 text-center max-w-md animate-fade-in">
            {/* Wii U logo mark */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00d8ff] to-[#0088cc] flex items-center justify-center shadow-[0_6px_20px_rgba(0,216,255,0.25)] mb-2">
              <svg viewBox="0 0 100 70" className="w-14 h-14 text-white fill-current">
                <rect x="10" y="0" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="58" y="0" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="22" y="32" width="56" height="34" rx="6" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="32" y="40" width="36" height="18" rx="2" fill="currentColor" opacity="0.3" />
              </svg>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight leading-tight">
              Welcome to <span className="bg-gradient-to-r from-[#00b2d0] to-[#0088cc] bg-clip-text text-transparent">Wii U</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mt-2">
              Let's get everything set up so you can start playing.
            </p>
          </div>
        );

      /* ─────── DATE ─────── */
      case 1:
        return (
          <div className="flex flex-col items-center justify-center gap-8 w-full max-w-xl animate-fade-in">
            <div className="flex items-center justify-center gap-6 md:gap-10 select-none">
              {/* Month */}
              <div className="flex flex-col items-center">
                <ArrowButton direction="up" onClick={() => handleMonthChange(month === 12 ? 1 : month + 1)} />
                <span className="text-6xl md:text-7xl font-semibold text-gray-800 my-4 tabular-nums w-20 md:w-24 text-center">
                  {String(month).padStart(2, '0')}
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Month</span>
                <ArrowButton direction="down" onClick={() => handleMonthChange(month === 1 ? 12 : month - 1)} />
              </div>

              {/* Slash */}
              <span className="text-6xl md:text-7xl font-light text-gray-300 self-center mb-16">/</span>

              {/* Day */}
              <div className="flex flex-col items-center">
                <ArrowButton direction="up" onClick={() => {
                  const maxDays = daysInMonth(month, year);
                  setDay(day === maxDays ? 1 : day + 1);
                }} />
                <span className="text-6xl md:text-7xl font-semibold text-gray-800 my-4 tabular-nums w-20 md:w-24 text-center">
                  {String(day).padStart(2, '0')}
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Day</span>
                <ArrowButton direction="down" onClick={() => {
                  const maxDays = daysInMonth(month, year);
                  setDay(day === 1 ? maxDays : day - 1);
                }} />
              </div>

              {/* Slash */}
              <span className="text-6xl md:text-7xl font-light text-gray-300 self-center mb-16">/</span>

              {/* Year */}
              <div className="flex flex-col items-center">
                <ArrowButton direction="up" onClick={() => handleYearChange(year + 1)} />
                <span className="text-6xl md:text-7xl font-semibold text-gray-800 my-4 tabular-nums w-32 md:w-40 text-center">
                  {year}
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Year</span>
                <ArrowButton direction="down" onClick={() => handleYearChange(year - 1)} />
              </div>
            </div>
          </div>
        );

      /* ─────── TIME ─────── */
      case 2:
        return (
          <div className="flex flex-col items-center justify-center gap-8 w-full max-w-xl animate-fade-in">
            <div className="flex items-center justify-center gap-6 md:gap-10 select-none">
              {/* Hour */}
              <div className="flex flex-col items-center">
                <ArrowButton direction="up" onClick={() => setHour(hour === 12 ? 1 : hour + 1)} />
                <span className="text-6xl md:text-7xl font-semibold text-gray-800 my-4 tabular-nums w-20 md:w-24 text-center">
                  {String(hour).padStart(2, '0')}
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Hour</span>
                <ArrowButton direction="down" onClick={() => setHour(hour === 1 ? 12 : hour - 1)} />
              </div>

              {/* Colon */}
              <span className="text-6xl md:text-7xl font-light text-gray-300 self-center mb-16">:</span>

              {/* Minute */}
              <div className="flex flex-col items-center">
                <ArrowButton direction="up" onClick={() => setMinute(minute === 59 ? 0 : minute + 1)} />
                <span className="text-6xl md:text-7xl font-semibold text-gray-800 my-4 tabular-nums w-20 md:w-24 text-center">
                  {String(minute).padStart(2, '0')}
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Minute</span>
                <ArrowButton direction="down" onClick={() => setMinute(minute === 0 ? 59 : minute - 1)} />
              </div>

              {/* AM/PM */}
              <div className="flex flex-col items-center justify-center pl-4 self-center mb-10">
                <button
                  onClick={() => {
                    playSfx('select');
                    setAmpm(prev => prev === 'a.m.' ? 'p.m.' : 'a.m.');
                  }}
                  onMouseEnter={() => playSfx('hover')}
                  className="text-4xl md:text-5xl font-semibold text-gray-700 px-3 py-2 rounded-2xl hover:bg-white/40 border border-transparent hover:border-gray-200 transition-all duration-100 cursor-pointer"
                >
                  {ampm}
                </button>
              </div>
            </div>
          </div>
        );

      /* ─────── COUNTRY ─────── */
      case 3:
        return (
          <div className="flex flex-col items-center gap-4 w-full max-w-md animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Select Your Country</h2>
            <p className="text-gray-400 text-sm -mt-2">This sets your region for services</p>

            <div className="w-full max-h-[45vh] overflow-y-auto rounded-2xl bg-white/60 border border-gray-200 p-1.5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent mt-2 shadow-inner">
              {COUNTRIES.map(c => (
                <button
                  key={c}
                  onClick={() => { playSfx('select'); setCountry(c); }}
                  onMouseEnter={() => playSfx('hover')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-100 cursor-pointer ${
                    country === c
                      ? 'bg-[#00d8ff]/15 text-[#0088cc] border border-[#00d8ff]/35 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        );

      /* ─────── TIME ZONE ─────── */
      case 4:
        return (
          <div className="flex flex-col items-center gap-4 w-full max-w-md animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Set Your Time Zone</h2>
            <p className="text-gray-400 text-sm -mt-2">Choose the time zone for your area</p>

            <select
              value={tz}
              onChange={e => { playSfx('select'); setTz(Number(e.target.value)); }}
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3.5 text-gray-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00d8ff]/40 shadow-sm cursor-pointer mt-2"
            >
              {TIMEZONES.map(t => (
                <option key={t.offset} value={t.offset} className="bg-white text-gray-800">{t.label}</option>
              ))}
            </select>

            {/* Live clock */}
            <div className="flex flex-col items-center gap-2 mt-4 p-6 rounded-3xl bg-white/60 border border-gray-200/80 w-full shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Current Time</span>
              <span className="text-4xl font-extrabold tracking-tight text-[#0088cc] tabular-nums font-mono">
                {clock}
              </span>
            </div>
          </div>
        );

      /* ─────── MII CREATION ─────── */
      case 5:
        return (
          <div className="flex flex-col items-center gap-6 text-center max-w-md animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-[#00d8ff]/10 border border-[#00d8ff]/20 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 100 100" className="w-11 h-11 fill-current">
                <path d="M 50 15 Q 80 15 80 45 Q 80 80 50 80 Q 20 80 20 45 Q 20 15 50 15 Z" fill="#ffe2c4" />
                <circle cx="41" cy="45" r="4.5" fill="#2d2d2d" />
                <circle cx="59" cy="45" r="4.5" fill="#2d2d2d" />
                <path d="M 50 44 L 50 51" stroke="#e09d57" strokeWidth="2.5" />
                <path d="M 43 57 Q 50 63 57 57" fill="none" stroke="#2d2d2d" strokeWidth="3" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Create Your Mii</h2>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              {showIframe && !iframeReady
                ? 'Loading Mii Maker…'
                : 'Choose how you\'d like to create your Mii character.'}
            </p>
            {showIframe && !iframeReady && (
              <div className="w-8 h-8 border-3 border-gray-200 border-t-[#0088cc] rounded-full animate-spin mt-2" />
            )}
          </div>
        );

      /* ─────── ACCOUNT CREATION ─────── */
      case 6:
        return (
          <div className="flex flex-col items-center gap-5 text-center max-w-sm w-full animate-fade-in bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-md">
            <div className="w-16 h-16 rounded-full bg-[#006e68]/10 border border-[#006e68]/20 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#006e68] fill-current">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8"/>
                <path d="M 28 72 L 28 28 L 46 54 L 46 28 M 54 72 L 54 28 L 72 54 L 72 28" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Nintendo Network ID</h2>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Create a Nintendo Network ID to link your Mii and access online features and the Nintendo eShop.
            </p>
            
            {nnidError && (
              <div className="text-red-500 text-xs font-bold bg-red-50 border border-red-100 rounded-xl px-3 py-2 w-full">
                {nnidError}
              </div>
            )}

            <div className="flex flex-col gap-3 w-full mt-2">
              <input
                type="text"
                placeholder="Nintendo Network ID (Username)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl border border-gray-350 bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#006e68] disabled:opacity-50"
              />
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl border border-gray-350 bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#006e68] disabled:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-2.5 w-full mt-4">
              <button
                onClick={handleCreateAccount}
                disabled={loading || !username || password.length < 6}
                className="py-3 bg-[#006e68] hover:bg-[#005752] disabled:opacity-50 text-white font-extrabold text-sm rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : 'Link / Register ID'}
              </button>
              <button
                onClick={handleSkipAccount}
                disabled={loading}
                className="py-2.5 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-gray-700 font-extrabold text-xs rounded-xl transition-all cursor-pointer"
              >
                Skip NNID Setup
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ── navigation visibility checks ── */
  const showBack = step > 0 && step < 5;
  const showNext = step < 5;
  const nextDisabled = step === 3 && !country;

  const fadeClass = vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2';

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden font-['Nunito',sans-serif] selection:bg-transparent bg-[#d9e3e9]">
      
      {/* Particle Animation CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatParticle1 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-120px) translateX(15px); opacity: 0; }
        }
        @keyframes floatParticle2 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          15% { opacity: 0.6; }
          85% { opacity: 0.6; }
          100% { transform: translateY(-160px) translateX(-20px); opacity: 0; }
        }
        .animate-float-particle-1 { animation: floatParticle1 12s ease-in-out infinite; }
        .animate-float-particle-2 { animation: floatParticle2 16s ease-in-out infinite; }
        .animate-float-particle-3 { animation: floatParticle1 14s ease-in-out infinite 2s; }
        .animate-float-particle-4 { animation: floatParticle2 10s ease-in-out infinite 1s; }
        .animate-float-particle-5 { animation: floatParticle1 18s ease-in-out infinite 3s; }
      `}} />

      {/* Bokeh / Light Particle Background */}
      <BokehBackground />

      {/* Top Teal Curved Banner */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 bg-[#006e68] flex items-center justify-center text-white font-bold text-xl z-20 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
        style={{
          borderBottomLeftRadius: '50% 12px',
          borderBottomRightRadius: '50% 12px',
        }}
      >
        {getStepTitle()}
      </div>

      {/* Content body */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full max-w-4xl px-8 pt-20 pb-20 transition-all duration-300 ease-out ${fadeClass}`}>
        {renderStep()}
      </div>

      {/* Bottom Left Back Button */}
      {showBack && (
        <button
          onClick={() => { playSfx('back'); goTo(step - 1); }}
          onMouseEnter={() => playSfx('hover')}
          className="absolute bottom-0 left-0 w-36 h-36 md:w-40 md:h-40 bg-white rounded-tr-[100%] shadow-[2px_-2px_10px_rgba(0,0,0,0.08)] flex items-end justify-start pb-6 pl-8 hover:scale-105 active:scale-95 transition-transform origin-bottom-left cursor-pointer border-t border-r border-white/50 z-20"
        >
          <div className="flex flex-col items-center justify-center gap-1 text-gray-700">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-600">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
              <div className="w-6 h-6 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-xs font-bold font-sans shadow-sm">
                B
              </div>
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-gray-400">Back</span>
          </div>
        </button>
      )}

      {/* Bottom Right Next/Confirm Button */}
      {showNext && (
        <button
          disabled={nextDisabled}
          onClick={() => { playSfx('select'); goTo(step + 1); }}
          onMouseEnter={() => playSfx('hover')}
          className={`absolute bottom-0 right-0 w-36 h-36 md:w-40 md:h-40 bg-white rounded-tl-[100%] shadow-[-2px_-2px_10px_rgba(0,0,0,0.08)] flex items-end justify-end pb-6 pr-8 hover:scale-105 active:scale-95 transition-transform origin-bottom-right cursor-pointer border-t border-l border-white/50 z-20 ${
            nextDisabled ? 'opacity-40 pointer-events-none' : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-1 text-gray-700">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-650">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
              <div className="w-6 h-6 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-xs font-bold font-sans shadow-sm">
                A
              </div>
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-gray-400">
              {step === 2 ? 'Confirm' : 'Next'}
            </span>
          </div>
        </button>
      )}

      {/* Mii Creator Iframe — overlay */}
      {showIframe && (
        <div
          className="fixed inset-0 z-[10001]"
          style={{
            backgroundColor: '#1e2d3d',
            opacity: iframeReady && !miiDone ? 1 : 0,
            pointerEvents: iframeReady && !miiDone ? 'auto' : 'none',
            transition: 'opacity 0.5s ease',
          }}
        >
          <iframe
            ref={iframeRef}
            src="/mii-creator/"
            allow="autoplay"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}

      {/* "All done" overlay */}
      {allSetupDone && (
        <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-white animate-fade-in">
          <BokehBackground />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center animate-scale-up">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-400 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-500 fill-none stroke-current" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">You're All Set!</h2>
            <p className="text-gray-500 text-lg max-w-xs leading-relaxed animate-pulse">Your Nintendo Network ID has been set up. Enjoy your Wii U!</p>
          </div>
        </div>
      )}
    </div>
  );
}
