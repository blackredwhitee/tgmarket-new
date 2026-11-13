# TG Market — новый сайт

Статический сайт на Next.js 15 (App Router, static export) по макетам дизайнера.

```bash
npm install
npm run dev      # локально
npm run build    # статическая сборка в out/
```

Деплой — GitHub Actions → GitHub Pages при пуше в `main`.

- Цифры комиссии, тарифов и партнёрской программы — `src/lib/tariffs.ts`
- Ссылки на бота, поддержку и список ниш — `src/lib/links.ts`
- Тексты юридических документов — `src/data/legal.ts`
