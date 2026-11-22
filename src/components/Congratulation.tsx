import { Heart } from 'lucide-react';

const PARAGRAPHS = [
  {
    text: 'Сегодня особенный день, потому что когда-то в этот мир пришёл человек, который со временем стал частью множества других жизней. Чьё имя звучит в разговорах дома, чьи фотографии хранятся в телефонах, чьё присутствие делает привычные дни немного теплее, а воспоминания — дороже.',
    highlight: false,
  },
  {
    text: 'Мама и папа, бабушки и дедушки, братья и сёстры, родные и близкие — каждый из нас знает тебя по-своему. Кто-то помнит твоё детство, кто-то разделяет с тобой сегодняшние дни, кто-то видел твои улыбки, переживания, маленькие победы и моменты, когда ты сама не замечала, насколько сильной была.',
    highlight: false,
  },
  {
    text: 'Но есть кое-что, что объединяет нас всех: мы рады, что ты есть.',
    highlight: true,
  },
  {
    text: 'Пусть впереди будет много дней, которые захочется сохранить в памяти. Пусть рядом остаются люди, с которыми можно быть настоящей, пусть сбываются мечты, о которых ты пока рассказываешь только самым близким. И пусть, несмотря на то, как изменится жизнь, ты никогда не забываешь, что у тебя есть люди, для которых ты всегда будешь важна, любима и дорога.',
    highlight: false,
  },
  {
    text: 'Сегодня мы хотим не просто поздравить тебя. Мы хотим напомнить тебе, что ты — часть нашей общей истории, и без тебя она была бы совсем другой.',
    highlight: false,
  },
];

function HeartDivider() {
  return (
    <div className="heart-divider">
      <span className="line" />
      <Heart
        size={18}
        className="text-neon-pink drop-shadow-[0_0_8px_rgba(255,45,170,0.8)]"
        fill="currentColor"
      />
      <span className="line" />
    </div>
  );
}

export default function Congratulation() {
  return (
    <section className="relative z-10 px-5 sm:px-8 py-24 sm:py-32 max-w-3xl mx-auto">
      {/* Заголовок */}
      <div className="reveal text-center mb-16">
        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl gradient-text mb-4">
          С днём рождения!
        </h2>
        <HeartDivider />
      </div>

      {/* Абзацы */}
      <div className="space-y-8 sm:space-y-10">
        {PARAGRAPHS.slice(0, 2).map((p, i) => (
          <div
            key={i}
            className="reveal glass-card p-6 sm:p-8 md:p-10"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white/85 tracking-wide">
              {p.text}
            </p>
          </div>
        ))}

        <HeartDivider />

        {/* Выделенная фраза */}
        <div
          className="reveal glass-card-glow p-8 sm:p-10 md:p-12 text-center"
          style={{ transitionDelay: '100ms' }}
        >
          <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl gradient-text leading-snug animate-text-glow">
            {PARAGRAPHS[2].text}
          </p>
        </div>

        <HeartDivider />

        <div
          className="reveal glass-card p-6 sm:p-8 md:p-10"
          style={{ transitionDelay: '100ms' }}
        >
          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white/85 tracking-wide">
            {PARAGRAPHS[3].text}
          </p>
        </div>

        <div
          className="reveal glass-card p-6 sm:p-8 md:p-10"
          style={{ transitionDelay: '100ms' }}
        >
          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white/85 tracking-wide">
            {PARAGRAPHS[4].text}
          </p>
        </div>

        <HeartDivider />

        {/* Финальная фраза со свечением */}
        <div
          className="reveal text-center py-12"
          style={{ transitionDelay: '150ms' }}
        >
          <p className="font-display font-bold text-3xl sm:text-5xl md:text-6xl gradient-text animate-text-glow leading-tight">
            С днём рождения.
            <br />
            Мы тебя любим.
          </p>
        </div>
      </div>
    </section>
  );
}
