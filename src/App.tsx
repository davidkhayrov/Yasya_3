import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingHearts from '@/components/FloatingHearts';
import WelcomeScreen from '@/components/WelcomeScreen';
import Congratulation from '@/components/Congratulation';
import FinalScreen from '@/components/FinalScreen';
import MusicToggle from '@/components/MusicToggle';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  const [started, setStarted] = useState(false);

  useScrollReveal();
  useEffect(() => {
    if (started) {
      const timer = setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [started]);

  return (
    <div className="relative min-h-screen bg-base overflow-x-hidden">
      {/* Фоновые эффекты */}
      <ParticleBackground />
      <FloatingHearts count={10} />

      {/* Декоративный градиентный фон */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 10%, rgba(157,0,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(255,45,170,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(176,38,255,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Первый экран */}
      {!started && <WelcomeScreen onOpen={() => setStarted(true)} />}

      {/* Основной контент */}
      <main className={started ? 'block' : 'hidden'}>
        <Congratulation />
        <FinalScreen />
      </main>

      {/* Кнопка музыки */}
      <MusicToggle />
    </div>
  );
}
