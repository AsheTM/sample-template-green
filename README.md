# sample-template-green

Landing page for **Smart Green**, a connected smart irrigation kit: a controller, a soil and weather sensor, and a mobile app. It started as a school project supervised by Mr HASBAOUI and was redesigned in version 2.

The page presents the product (hero with an app preview, how it works, the kit, promises, team) and has working contact and newsletter forms.

## Design

"Agritech clair": a light, natural look with a full dark mode.

- **Colours:** forest `#1F3D2B`, leaf `#6AAF08`, water `#2B8FD6`, linen `#F7F5EF`, defined as CSS custom properties in `src/styles.scss`. Text colours meet WCAG AA contrast in both themes.
- **Type:** Plus Jakarta Sans, self-hosted.
- **Dark mode:** follows the system setting; the header toggle overrides it and is remembered.
- **Accessibility:** skip link, keyboard-operable mobile menu, labelled form fields with announced errors and status, reduced-motion support.

## Tech stack

- [Angular](https://angular.dev) 22 (standalone components, zoneless, esbuild `application` builder)
- SCSS (Dart Sass) with CSS custom properties
- [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) for the contact and newsletter forms
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
public/                    Favicon and images (WebP, served at /assets)
src/index.html             Page shell, metadata, static form copies for Netlify
src/styles.scss            Design tokens (light and dark), base styles, shared classes
src/app/app.ts             Root component: header, sections, footer
src/app/content/           Page copy as typed data (navigation, steps, products, promises, team)
src/app/sections/          One standalone component per section
src/app/shared/            Icon, theme, reveal-on-scroll and form submission
e2e/                       Playwright tests (desktop and mobile)
server.js                  Express server for the production build
```

To change the text of a list (steps, products, promises, team), edit `src/app/content/content.ts`.

## Deployment

### Netlify (production)

`netlify.toml` builds the site with Node 24 and publishes `dist/sample-template-green/browser`. Pushes to `master` deploy production; pull requests get a deploy preview.

The forms are sent to Netlify Forms. Once per site, in the Netlify UI:

1. **Site configuration → Forms → Enable form detection**, then redeploy.
2. Optionally, add an e-mail notification for new submissions.

Netlify detects the forms from the hidden copies in `src/index.html`. Their field names must match `src/app/sections/contact/contact.ts`.

### Any Node host

```bash
npm ci
npm run build
PORT=8080 npm start
```

`server.js` serves the static build and falls back to `index.html` for any other path. The port defaults to `8080` and can be set with `PORT`. It has no form endpoint, so form submissions show an error outside Netlify.

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

## License

The source code is released under the [MIT License](LICENSE).

The images in `public/assets` are not covered by this license:

| File | Source | Licence |
| --- | --- | --- |
| `watering-strawberries.webp` | [Benjamin White on Unsplash](https://unsplash.com/photos/1VJt-0nyDhg) | [Unsplash License](https://unsplash.com/license) |
| `irrigated-field.webp` | [Bernd Dittrich on Unsplash](https://unsplash.com/photos/sktVzTJcGAs) | [Unsplash License](https://unsplash.com/license) |
| `smart-water-control.webp`, `smart-sensor.webp` | Product visuals from the original school project | Belong to their respective owners |

The font, Plus Jakarta Sans, is distributed under the SIL Open Font License through `@fontsource-variable/plus-jakarta-sans`.
