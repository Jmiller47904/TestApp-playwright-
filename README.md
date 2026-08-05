# Playwright Test Playground

A deliberately small web application for practicing reliable end-to-end testing. It includes accessible controls, stable locators, and Playwright tests for state changes and form validation.

## Run locally

```bash
npm install
npx playwright install chromium
npm run dev
```

In a second terminal, run `npm test`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm test` | Run Playwright in Chromium |
| `npm run test:ui` | Open Playwright UI mode |

GitHub Actions builds the application, runs the browser tests, and uploads the HTML report.
