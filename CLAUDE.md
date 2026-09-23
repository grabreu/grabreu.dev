# grabreu.dev

## Repository

Personal portfolio site: the front door recruiters land on, linking out to Gabriel Abreu's published projects and contact info.

Read `README.md` before making changes. It documents the project pitch.

## General Rules

- Keep changes scoped to the requested change.
- Prefer existing patterns over introducing new abstractions.
- Do not add dependencies unless they are necessary.
- Do not fill gaps with assumptions when the user hasn't given the information. Ask, or mark it as pending.
- Do not claim a validation command passed unless it was actually run.
- Code, comments, commit messages, and documentation are always written in English.

## Git

- Do not create or switch branches unless explicitly requested.
- Do not create commits unless explicitly requested.
- Do not push unless explicitly requested.
- Keep commits focused on the requested change.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`type: summary`).

## Documentation

### Audience

Future-you revisiting this months later, or someone browsing the portfolio to see how it works. Not onboarding material: keep it concise and skimmable.

### Content Rules

- State facts concisely. Avoid unnecessary explanations or trailing rationale.
- Do not document information that is already obvious from the repository structure or configuration.
- Do not invent features, API shapes, or future direction. Mark undecided things as TODO.
- Document a capability only after it is implemented and verified.
- Use proper Markdown headings (`##`, `###`), not bold text as headings.

---

## Project-Specific Guidelines

### Astro Guides

Astro has no dynamic skill-loading tool (unlike TanStack's `@tanstack/intent`, used in slug-pages). Consult these directly before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

### Source

Standard Astro project layout (`src/pages/`, `src/components/`, `public/`). Still minimal: scaffold + Tailwind only, no page content or components built yet.

### Validation

Run `pnpm biome check .` before considering a change done.

### Open Questions

- TODO: CI/CD not wired up yet: lint + build on PR/push to `main`, `wrangler deploy` to Cloudflare Workers on merge, per the portfolio's standard practices.
- TODO: page content (hero/bio, project cards, "Currently Building" teaser, contact) not written yet.
- TODO: i18n routing (`astro:i18n`, EN default / PT toggle) not configured yet.
