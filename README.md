# grabreu.dev

[![CI](https://github.com/grabreu/grabreu.dev/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/grabreu/grabreu.dev/actions/workflows/ci.yml)
[![CD](https://github.com/grabreu/grabreu.dev/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/grabreu/grabreu.dev/actions/workflows/cd.yml)
[![License](https://img.shields.io/github/license/grabreu/grabreu.dev?style=flat-square)](LICENSE)

My personal site: links out to what I've built and how to reach me.

**[Try it live →](https://grabreu.dev)**

## Tech stack

Astro · Tailwind CSS · Cloudflare Workers · pnpm · Biome

## Development

Requires [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Other scripts: `pnpm biome check .` (lint/format), `pnpm build`, `pnpm preview`, `pnpm deploy`.

## Deployment

Auto-deployed to Cloudflare Workers (static assets) on every merge to `main` via GitHub Actions, authenticated with a Cloudflare API token scoped to the account and stored as a repo secret. No bindings or databases involved, just `astro build` followed by `wrangler deploy`.

## License

Licensed under the [MIT License](LICENSE).
