# Site Scout

Website for JC Accounting & Tax Services LLC, built with React, TanStack Start,
TypeScript, Tailwind CSS, and Vite.

## Development

Install Node.js 22.12+ and Bun, then run:

```sh
bun install --frozen-lockfile
bun run dev
```

## Production

```sh
bun run build
bun run start
```

Nitro produces the server and static assets in `.output`. See the
[TanStack Start hosting guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)
for deployment options.

## Checks

```sh
bun run lint
bunx tsc --noEmit
```

Site photos are stored in `src/assets`. Office maps use OpenStreetMap embeds;
no API keys or environment variables are required.
