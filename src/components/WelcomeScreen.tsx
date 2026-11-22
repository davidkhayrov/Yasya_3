import { useEffect, useState } from 'react';

interface Props {
  onOpen: () => void;
}

export default function WelcomeScreen({ onOpen }: Props) {
  const [exiting, setExiting] = useState(false);

  const handleOpen = () => {
    setExiting(true);
    setTimeout(() => onOpen(), 1100);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${
        exiting ? 'opacity-0 scale-110 blur-md' : 'opacity-100 scale-100'
      }`}
      style={{ background: 'radial-gradient(ellipse at center, #120020 0%, #08000F 70%)' }}
    >
      <div className="animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-glow-soft text-white/70 mb-8 tracking-wide">
          Сегодня твой особенный день...
        </p>
      </div>

      <div className="animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
        <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text leading-tight mb-10">
          С ДНЁМ
          <br />
          РОЖДЕНИЯ!
        </h1>
      </div>

      {/* Светящееся сердце */}
      <div
        className="animate-fade-in mb-12"
        style={{ animationDelay: '1.4s', opacity: 0 }}
      >
        <div className="heartbeat">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_20px_rgba(255,45,170,0.8)]"
          >
            <defs>
              <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9D00FF" />
                <stop offset="50%" stopColor="#FF2DAA" />
                <stop offset="100%" stopColor="#FF007F" />
              </linearGradient>
              <filter id="heartGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#heartGrad)"
              filter="url(#heartGlow)"
            />
          </svg>
        </div>
      </div>

      <div className="animate-fade-up" style={{ animationDelay: '1.9s', opacity: 0 }}>
        <button
          onClick={handleOpen}
          className="btn-neon animate-pulse-glow px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl"
        >
          <span className="flex items-center gap-2">
            Открыть своё поздравление
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </button>
      </div>

      {/* Декоративная подсказка */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: '2.5s', opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Прокрути вниз</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
