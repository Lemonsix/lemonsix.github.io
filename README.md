# Portfolio

Single-page portfolio for [lemonsix.github.io](https://lemonsix.github.io/), styled with [Astro Sienna](https://github.com/AnjayGoel/astro-sienna). Content lives in JSON under `src/data/`.

## Develop

```bash
pnpm install
pnpm dev
```

Requires Node.js >= 22.12.

## Build

```bash
pnpm build
```

## Content files

| File | Purpose |
|------|---------|
| `src/data/profile.json` | Name, headline, about, contact |
| `src/data/experience.json` | Work history bullets |
| `src/data/skills.json` | Skills for display and JSON-LD `knowsAbout` |
| `src/data/projects.json` | Side projects |
| `public/llms.txt` | Plain-text summary for AI crawlers |

Site title and header name are synced from `profile.json` via `src/site.config.ts`.

## LinkedIn sync

After deploying, keep LinkedIn aligned with this site:

1. **Headline** — copy `headline` from `src/data/profile.json`
2. **About** — copy all paragraphs from `summary` in `src/data/profile.json`
3. **Experience** — paste highlights from `src/data/experience.json` per role
4. **Skills** — match technical and domain skills from `src/data/skills.json`
