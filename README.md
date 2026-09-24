<p align="center">
  <img src="./src/assets/cover.png">
</p>

# React GitHub Calendar

**Live demo:** https://react-github-calendar.vercel.app

Type a GitHub username and see that user's contributions calendar for the
last year. Built with Create React App and
[`react-github-calendar`](https://github.com/grubersjoe/react-github-calendar),
which reads data from `https://github-contributions-api.jogruber.de/v4/`
(no API key needed).

## Getting started

```bash
npm install
npm start        # dev server on http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Start the development server |
| `npm test` | Run the Jest + Testing Library tests (the calendar component is stubbed, no network) |
| `npm run build` | Production build into `build/` |
