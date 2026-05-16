# zsapping.net

Marketing site for zsapping.net — education and services for freedom tech.

Built per the spec in `WEBSITE_STACK.md`: Vite 8 + React 19 + Tailwind 4 + i18next, statically deployed to Vercel.

## Develop

```sh
nvm use            # picks Node 22 from .nvmrc
npm install
npm run dev
```

## Build

```sh
npm run build      # tsc -b && vite build
npm run preview    # serves dist/
```

## Regenerate favicons

```sh
npm run icons      # reads public/favicon source, writes the other sizes + .ico
```

## Deploy

```sh
npx vercel link    # one-time
npx vercel --prod
```

Production: <https://www.zsapping.net>
