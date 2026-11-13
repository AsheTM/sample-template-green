# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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

[1.1.0]: https://github.com/AsheTM/sample-template-green/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/AsheTM/sample-template-green/releases/tag/v1.0.0
