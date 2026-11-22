# Project memory

## Product intent & audience

- Interactive celebratory web app with a screen-based flow (congratulation → final screen).
- Personal gift/surprise from family and loved ones; final screen signed «С любовью, твои родные и близкие».
- Likely occasion: a celebration for a person named Yasya (inferred from external link domain `yasya-three.vercel.app`).
- User communicates in Russian; UI text and assistant replies are expected in Russian.

## Brand personality & voice

- Warm, celebratory, polished tone suited to a personal gift/surprise experience.
- Production-quality, distinctive design (not cookie-cutter) is expected; reference `.bolt/prompt` for global design directives.

## Visual design & UX direction

- Screen/step-based navigation: each stage is a distinct view with transitions.
- Prior known screens: congratulation screen, final screen.
- Gallery screen and its preceding transition block were removed; flow goes directly from congratulation to final screen.
- Final screen layout: celebratory content → «С любовью, твои родные и близкие» → question «Хочешь посмотреть свой мини-фильм?» → neon «Посмотреть» button with pulsing glow.
- Button opens external site `https://yasya-three.vercel.app/` (mini-film) in a new tab (`target="_blank"`).
- Stack: Vite + React (JSX), Tailwind CSS, Lucide React icons; modules imported via `@/` alias to `src/` (see `.bolt/prompt`).

## Decisions, constraints & rationale

- Gallery removed per user request; related transition block and unused files deleted to avoid dead navigation and dangling imports.
- External mini-film link placed on final screen as the last interactive element, opening in a new tab so users don't lose the celebratory page.
- Neon/pulsing-glow button styling chosen to match the celebratory, gift-like aesthetic.
- Avoid installing extra UI/icon packages unless absolutely necessary or requested (per `.bolt/prompt`).

## Open questions & assumptions

- Exact occasion (birthday, anniversary, etc.) is assumed celebratory but unconfirmed.
- Whether additional screens/features beyond congratulation and final screen are planned is unknown.
- Content source for celebratory text/assets (static, user-provided, or generated) is not yet clarified.
- Relationship between this app and the external mini-film site (same project family vs. separate) is assumed but unconfirmed.