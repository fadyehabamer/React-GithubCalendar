<p align="center">
  <img src="./src/assets/cover.png">
</p>

# React GitHub Calendar

[![CI](https://github.com/fadyehabamer/React-GithubCalendar/actions/workflows/ci.yml/badge.svg)](https://github.com/fadyehabamer/React-GithubCalendar/actions/workflows/ci.yml)

**Live demo:** https://react-github-calendar.vercel.app

Type a GitHub username and see that user's contributions calendar for the
last year. Built with React 18, [Vite](https://vite.dev) and
[`react-github-calendar`](https://github.com/grubersjoe/react-github-calendar),
which reads data from `https://github-contributions-api.jogruber.de/v4/`
(no API key needed).

## Getting started

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev      # dev server on http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` / `npm start` | Start the Vite development server on http://localhost:3000 |
| `npm test` | Run the Vitest + Testing Library tests in watch mode (the calendar component is stubbed, no network); `npm test -- --run` runs them once |
| `npm run lint` | Lint with ESLint (`eslint.config.js`) |
| `npm run build` | Production build into `build/` |
| `npm run preview` | Serve the production build locally |

Deployed on Vercel; `vercel.json` selects the Vite preset and the `build/`
output folder.
