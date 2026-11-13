# sample-template-green

One-page presentation site for **Smart Green**, a connected smart irrigation product. Built with Angular as a set of full-width slides (header navigation, products, promises, team, newsletter).

## Tech stack

- [Angular](https://angular.dev) 22 (standalone components, zoneless, esbuild `application` builder)
- SCSS (Dart Sass)
- [Vitest](https://vitest.dev) unit tests, [Playwright](https://playwright.dev) end-to-end tests
- ESLint with [angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [Express](https://expressjs.com) 5 to serve the production build

## Requirements

- Node.js 24 (see `.nvmrc`; `^22.22.3`, `^24.15.0` or `>=26` are supported by Angular 22)
- npm 11

With [Volta](https://volta.sh) the pinned Node version is selected automatically. With nvm: `nvm use`.

## Getting started

```bash
npm ci
npm run dev
```

The app runs at http://localhost:4200 and reloads on change.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (`ng serve`) |
| `npm run build` | Production build to `dist/sample-template-green/browser` |
| `npm start` | Serve the production build with `server.js` (run `npm run build` first) |
| `npm test` | Unit tests (Vitest) |
| `npm run e2e` | Builds, starts the server and runs Playwright on desktop and mobile |
| `npm run lint` | ESLint on `src/`, `e2e/` and the Playwright config |

Before the first e2e run, install the browser: `npx playwright install chromium`.

## Project structure

```
public/assets/        Images (WebP) and icons, served at /assets
src/index.html        Page shell and metadata
src/styles.scss       Global styles
src/app/app.*         Root component: header and the ten slides
src/app/header/       Fixed navigation bar
src/app/slide-*/      One standalone component per slide
e2e/                  Playwright smoke tests
server.js             Express server for the production build
```

## Deployment

```bash
npm ci
npm run build
PORT=8080 npm start
```

`server.js` serves the static build and falls back to `index.html` for any other path. The port defaults to `8080` and can be set with `PORT`.

## Branching model

The project follows [git flow](https://nvie.com/posts/a-successful-git-branching-model/):

- `master`: released, production-ready code; every release is tagged (`vX.Y.Z`)
- `develop`: integration branch and default branch for pull requests
- `feature/<issue>-<name>`: branched from `develop`, merged back through a pull request
- `release/<version>`: branched from `develop`, merged into `master` and `develop`
- `hotfix/<version>`: branched from `master`, merged into `master` and `develop`

Pull requests reference their issue (`Closes #<n>`) and must pass CI.

## Continuous integration

GitHub Actions (`.github/workflows/ci.yml`) runs on pushes and pull requests to `develop` and `master`:

1. Lint, unit tests and production build
2. Playwright end-to-end tests (report uploaded on failure)
