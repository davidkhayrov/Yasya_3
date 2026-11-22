import { useMemo } from 'react';

/**
 * Парящие сердечки на фоне.
 * Генерирует CSS-анимированные сердечки с разными параметрами.
 */
interface HeartConfig {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  opacity: number;
  color: string;
}

const HEART_COLORS = ['#FF2DAA', '#9D00FF', '#FF007F', '#B026FF'];

export default function FloatingHearts({ count = 12 }: { count?: number }) {
  const hearts = useMemo<HeartConfig[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 80,
      rotate: (Math.random() - 0.5) * 60,
      opacity: Math.random() * 0.3 + 0.15,
      color: HEART_COLORS[i % HEART_COLORS.length],
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((h, i) => (
        <div
          key={i}
          className="floating-heart"
          style={
            {
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              color: h.color,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              filter: `drop-shadow(0 0 6px ${h.color}80)`,
              '--heart-drift': `${h.drift}px`,
              '--heart-rotate': `${h.rotate}deg`,
              '--heart-opacity': h.opacity,
            } as React.CSSProperties
          }
        >
          <svg
            width={h.size}
            height={h.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
