import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Кнопка управления фоновой музыкой.
 * Музыка загружается из /music.mp3 (папка public).
 * Не запускается автоматически — пользователь включает сам.
 */
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = 'none';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      setLoading(true);
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // файл не найден или не может воспроизводиться
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-base-light/80 backdrop-blur-md border border-neon-purple/30 hover:border-neon-pink/60 transition-all duration-300 hover:scale-110 box-glow-purple"
      aria-label={playing ? 'Выключить музыку' : 'Включить музыку'}
      title={playing ? 'Выключить музыку' : 'Включить музыку'}
    >
      {playing ? (
        <Volume2 size={22} className="text-neon-pink drop-shadow-[0_0_6px_rgba(255,45,170,0.8)]" />
      ) : (
        <VolumeX size={22} className="text-white/60" />
      )}
      {loading && (
        <span className="absolute inset-0 rounded-full border-2 border-neon-pink/40 border-t-transparent animate-spin" />
      )}
      {playing && (
        <span className="absolute -inset-1 rounded-full border border-neon-pink/30 animate-pulse" />
      )}
    </button>
  );
}
