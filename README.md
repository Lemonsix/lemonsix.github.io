# Portfolio

Terminal-style portfolio for [lemonsix.github.io](https://lemonsix.github.io/). Content is driven by JSON under `src/data/`.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## LinkedIn sync

After deploying, keep LinkedIn aligned with this site so recruiters and ATS parsers see the same story:

1. **Headline** — copy `headline` from `src/data/profile.json` (currently: Software Architect · Domain-driven backends · Multitenant SaaS on Azure | Go)
2. **About** — copy all paragraphs from `summary` in `src/data/profile.json`
3. **Experience** — paste highlights from `src/data/experience.json` per role (especially Contarg)
4. **Skills** — match technical and domain skills from `src/data/skills.json`

Optional: link to `https://lemonsix.github.io/llms.txt` in your LinkedIn featured section for LLM-friendly context.

## Content files

| File | Purpose |
|------|---------|
| `src/data/profile.json` | Name, headline, about, contact |
| `src/data/experience.json` | Work history bullets |
| `src/data/skills.json` | Skills for display and JSON-LD `knowsAbout` |
| `src/data/projects.json` | Side projects |
| `public/llms.txt` | Plain-text summary for AI crawlers |
