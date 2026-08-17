# Cu Lắc Bánh Mì + Cà Phê — website

Rebuild of [culac.ca](https://www.culac.ca), a virtual kitchen in downtown Montréal that makes creative bánh mì.

The original site was a Vue SPA that loaded every page's content from a WordPress API at `wp.culac.ca`. That API sits behind an expired TLS certificate, so browsers block the requests and pages like the menu never load. This rebuild bakes all content into the pages at build time. The site has no runtime dependency on WordPress.

Built with React 19, Vite, and React Router 7 in framework mode. The build step pre-renders each page to plain HTML, CSS, and JS. The pages are complete before JavaScript loads.

## Content sources

- **Page text and styling**: recovered from the original site's JS/CSS bundles and its WordPress API.
- **Menu prices and photos**: the [Uber Eats store page](https://www.ubereats.com/ca/store/banh-mi-cu-lac-1433c-rue-bishop/lut8t3OIUW2fvKsLeOdb6w).
- **Catering details**: the Spring-Summer 2026 catering deck (Canva). Where the deck and the old CMS disagree on prices, the deck wins.
- **Online ordering**: the navbar CTA links to [culac.maplekiosk.ca](https://culac.maplekiosk.ca/order/online/desktop). Change it in `src/lib/site.ts`.

## Development

1. Install [pnpm](https://pnpm.io) and Node 22 or later.
2. Install the dependencies: `pnpm install`
3. Start the dev server: `pnpm dev`

## Build

Run `pnpm build`. The static site is written to `build/client/`:

- `index.html` and `fr/…` — the French pages (French is the default language)
- `en/…` — the English pages
- `__spa-fallback.html` — shell for unknown paths; it renders the 404 page in the browser (copied to `404.html`)

Run `pnpm preview` to serve the built site on port 4173.

## Project structure

- `src/pages/` — route components (home, menu, catering, faq, not-found), one CSS file per page
- `src/routes.ts` — the route table; `src/root.tsx` — the HTML shell and meta tags
- `src/layout.tsx` — navbar + footer around every page; resolves the `:lang?` URL param
- `src/lib/i18n.tsx` — the language context and UI strings (fr/en)
- `src/lib/site.ts` — contact info, order URL, social links, map embed
- `src/lib/menu.ts`, `src/lib/catering.ts`, `src/lib/home.ts` — page content in both languages
- `src/index.css` — palette tokens, base type, navbar, and footer styles
- `public/images/` — logos, mascots, and photos recovered from the original site, WordPress, and Uber Eats

## CI

Every push to `main` and every pull request runs `.github/workflows/ci.yml`. The workflow lints the code, builds the static site, and uploads `build/client/` as the `static-site` artifact.

To run CI by hand, open Actions → CI → "Run workflow", or run `gh workflow run CI`.

## Releases

Every push to `main` rebuilds the rolling `latest` release. Its zip always matches the current state of `main`.

To publish a versioned release, push a tag that starts with `v`:

```sh
git tag v0.1.0
git push origin v0.1.0
```

The release workflow builds the site, zips it, and attaches the zip to a GitHub release. You can also start the workflow from the Actions tab with a tag name.

## Deploy a release zip

The zip on the Releases page is the built site: plain HTML, CSS, JS, and images. It needs no build step and no Node.

Serve the files over HTTP. Do not open `index.html` from the file system — asset paths and ES modules do not work on `file://` URLs.

To run it on your own machine:

```sh
unzip culac-website-latest.zip -d culac-site
cd culac-site
python3 -m http.server 8000
```

Then open http://localhost:8000. `npx serve` works too.

To deploy it, upload the folder contents (with `index.html` at the web root) to any static host:

- **Cloudflare Workers** — run `npx wrangler deploy` with a `wrangler.jsonc` that points `assets.directory` at the folder. This repo's config file is a working example.
- **Netlify** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel** — run `npx vercel --prod` inside the folder.
- **nginx, Apache, S3, or cPanel** — copy the folder contents into the server root (for example `public_html`).

Two host settings matter:

1. Map the host's 404 page to `404.html` so unknown URLs show the site's own 404 page.
2. Serve the site from the domain root (`culac.ca`), not a subfolder. Asset URLs start with `/`, so a subfolder breaks them.

## Run with Docker

Every push to `main` publishes an image to the GitHub Container Registry. It contains the built site behind nginx, with the 404 page and cache headers already configured.

```sh
docker run -p 8080:80 ghcr.io/minardi299/culac:latest
```

Then open http://localhost:8080. Versioned tags are published too, for example `ghcr.io/minardi299/culac:0.1.0`.

To build the image yourself:

```sh
docker build -t culac-website .
docker run -p 8080:80 culac-website
```

## Known content gaps

- The "Entrées" menu tab holds one placeholder item ("Donut") — that is the only appetizer in the old CMS. Replace it in `src/lib/menu.ts` when the real list exists.
- The contact form and the events section of the old site were unused (no configured mail service, zero events). They are not part of this rebuild.
