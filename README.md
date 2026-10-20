# SP Studio — Static website

A premium, responsive website for SP Studio, built with Vite and plain HTML, CSS, and JavaScript (no UI framework runtime). The production build is static HTML/CSS/JS and includes two standalone café concept demo pages with clear links back to the main site.

## Project structure

- `index.html` — main landing page
- `styles.css` — landing page styles and responsive layouts
- `script.js` — mobile navigation and footer year
- `demos/cafe-atelier.html` — warm editorial café concept
- `demos/cafe-noir.html` — bold dark coffee concept
- `demos/demo.css` — shared demo styles
- `assets/favicon.svg` — site favicon

## Run locally

```bash
npm install
npm run dev
```

Create the production HTML/CSS/JS bundle with:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Vercel

1. Push this folder to a Git repository and import it into Vercel.
2. Select **Vite** as the framework preset (or leave detection enabled).
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

No backend, API key, or framework runtime is required; Vite handles the build and outputs static HTML/CSS/JS. Deploy the project at the domain root.

## Before launch

- Replace the generic WhatsApp link in `index.html` with SP Studio's business number using international digits only.
- Add your real email and social links if desired.
- Replace the fictional address and menu details in the café demo pages if using them for a real client; these are illustrative concept sites.
- The demo pages use remote Unsplash images and Google Fonts, so those visual assets need an internet connection.
