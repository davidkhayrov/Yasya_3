import { useMemo } from 'react';

export default function FinalScreen() {
  const fadeParticles = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 4,
        color: ['#9D00FF', '#FF2DAA', '#FF007F', '#B026FF'][Math.floor(Math.random() * 4)],
      })),
    []
  );

  return (
    <footer className="relative z-10 overflow-hidden px-5 sm:px-8 py-24 sm:py-32 max-w-3xl mx-auto text-center">
      {/* Исчезающие частицы */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {fadeParticles.map((p, i) => (
          <span
            key={i}
            className="fade-particle absolute rounded-full"
            style={{
              left: `${p.left}%`,
              bottom: '10%',
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Большое неоновое сердце */}
      <div className="reveal relative mb-10 heartbeat" style={{ transitionDelay: '100ms' }}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto drop-shadow-[0_0_30px_rgba(255,45,170,0.9)]"
        >
          <defs>
            <linearGradient id="finalHeartGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9D00FF" />
              <stop offset="50%" stopColor="#FF2DAA" />
              <stop offset="100%" stopColor="#FF007F" />
            </linearGradient>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#finalHeartGrad)"
          />
        </svg>
      </div>

      <div className="reveal relative space-y-6" style={{ transitionDelay: '200ms' }}>
        <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white/85 tracking-wide">
          Пусть впереди будет ещё много счастливых моментов, искренних улыбок и людей, рядом с которыми хочется жить, мечтать и радоваться.
        </p>

        <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl gradient-text animate-text-glow">
          Мы всегда рядом.
        </p>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-glow-pink text-white leading-relaxed">
          С любовью, твои родные и близкие
          <span className="inline-block ml-2 align-middle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-neon-pink drop-shadow-[0_0_8px_rgba(255,45,170,0.8)]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </p>
      </div>

      {/* Вопрос и кнопка перехода к мини-фильму */}
      <div className="reveal relative mt-16 sm:mt-20" style={{ transitionDelay: '300ms' }}>
        <div className="heart-divider mb-10">
          <span className="line" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon-purple/60">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="line" />
        </div>

        <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl gradient-text animate-text-glow mb-10 leading-snug">
          Хочешь посмотреть свой мини-фильм?
        </p>

        <a
          href="https://yasya-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon animate-pulse-glow inline-flex items-center gap-2 px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg md:text-xl"
        >
          <span className="flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            </svg>
            Посмотреть
          </span>
        </a>
      </div>
    </footer>
  );
}
