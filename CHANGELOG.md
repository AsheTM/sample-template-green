# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.0.0] - 2026-11-14

Visual redesign. The site changes from a series of slides into a product landing page.

### Breaking

- The page structure and section anchors changed: `#Main`, `#SmartGreen`, `#Products`, `#Promises`, `#WhoWeAre`, `#Newsletter` and `#About` are replaced by `#accueil`, `#kit`, `#fonctionnement`, `#promesses`, `#equipe` and `#contact`. Old links to a section now open the top of the page.
- Images in `public/assets` were renamed or removed; direct links to the old image files no longer work.
- The forms post to Netlify Forms. Form detection must be enabled once in the Netlify UI (see README).

### Added

- New design "Agritech clair": colour tokens, Plus Jakarta Sans (self-hosted), SVG icons (#33).
- Dark mode that follows the system setting, with a remembered toggle in the header (#33).
- New sections: hero with an app preview, how it works, the kit, promises, team and contact (#34).
- Mobile navigation menu, skip link, and fade-in on scroll that respects reduced motion (#34).
- Contact and newsletter forms are sent through Netlify Forms, with a spam honeypot and announced success or error messages (#35).
- SVG favicon with the new logo (#36).

### Changed

- Page copy lives in typed data (`src/app/content/content.ts`) instead of templates (#34).
- The team shows fictional names and roles, without personal phone numbers or e-mail addresses (#34).
- Photos replaced with Unsplash photos, credited in the README (#36).
- README rewritten for the new structure, design, forms and deployment (#37).

### Removed

- The ten slide components and the old header (#34).
- Unused images and the PNG social icons; `public/assets` goes from 1.3 MB to 328 KB (#36).

## [1.1.1] - 2026-11-13

### Added

- MIT license for the source code. Images in `public/assets` are excluded (#14).

## [1.1.0] - 2026-11-13

Technical upgrade of the site. Content and desktop design are unchanged.

### Breaking for deployment

- Node.js 24 is required (was 16). See `.nvmrc`.
- The build output moved to `dist/sample-template-green/browser`. `server.js` serves it; custom hosting must point there.
- The `prebuild` script is removed. `npm run dev` starts the development server; `npm start` still serves the production build.

### Changed

- Migrated from Angular 6.1 to Angular 22.2: standalone components, zoneless, esbuild application builder, strict TypeScript (#1, #2, #3, #4).
- Dart Sass replaces the vendored node-sass 4.12 sources (#2).
- Express 4 to 5 (#8).
- Images converted to WebP; static assets reduced from 5.4 MB to 1.3 MB (#12).
- Page language set to French, with title, description and Open Graph metadata (#13).
- README rewritten (#14).

### Added

- Responsive layout on small screens (#20).
- Newsletter and contact form validation with accessible labels (#7).
- Vitest unit tests and Playwright end-to-end tests on desktop and mobile (#9).
- ESLint with angular-eslint (#10).
- GitHub Actions CI: lint, unit tests, build and end-to-end tests (#11).

### Fixed

- `server.js` returned `index.html` for JavaScript and CSS files (#8).
- Header menu labels for "Qui sommes-nous?" and "Newsletter" were swapped, and the `#WhoWeAre` link did not scroll (#5).
- Requests for images that did not exist (404) (#12).
- Slide eight loaded an icon from a third-party site (#6).

### Removed

- Unused images, the unused `SlidesService` and the empty router (#4, #12).
- Karma, Protractor and TSLint (#3, #9, #10).

### Security

- A committed credentials file was removed from the entire git history, and secret scanning with push protection is enabled.

## [1.0.0]

Initial version.

[2.0.0]: https://github.com/AsheTM/sample-template-green/compare/v1.1.1...v2.0.0
[1.1.1]: https://github.com/AsheTM/sample-template-green/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/AsheTM/sample-template-green/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/AsheTM/sample-template-green/releases/tag/v1.0.0
