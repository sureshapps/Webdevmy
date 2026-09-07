# RI/OS

A responsive personal-portfolio "operating system" simulation, built with Vite, React, TypeScript, Tailwind CSS v4, and lucide-react icons.

## Project structure

```
rios-os-simulation/
├── client/               Vite root — index.html, assets, and all React source
│   ├── src/
│   │   ├── pages/Home.tsx        Main OS simulation (desktop + mobile shells)
│   │   ├── components/           Shared UI (ErrorBoundary, ManusDialog, Map, ui/)
│   │   ├── index.css              Tailwind v4 + design tokens + component styles
│   │   └── rios-polish.css        Extra desktop-shell decoration layer
│   └── public/manus-storage/      Wallpapers, logo, and portrait images (add your own)
├── server/index.ts        Optional plain-Node static host (not used by Vercel)
├── shared/const.ts         Values shared between client and the optional server
├── vercel.json             Vercel build/output/rewrite config
└── vite.config.ts
```

## 1. Add your image assets

`Home.tsx` and the CSS reference a handful of images that were not part of the
files you uploaded:

- `/manus-storage/rios-logo_2ff5afef.png`
- `/manus-storage/rios-desktop-wallpaper_f6cba83c.jpg`
- `/manus-storage/rios-mobile-wallpaper_cf8cd3bd.jpg`
- `/manus-storage/rios-memo-paper_338dff22.jpg`
- `/manus-storage/rios-assistant_c175567a.png`

Drop your own versions of these files into `client/public/manus-storage/`
using the same filenames (or update the paths in `Home.tsx` / the CSS files
to match whatever you use). Until then, those images will 404 gracefully —
the rest of the UI still renders.

## 2. Local development

```bash
npm install
npm run dev
```

Vite will print a local URL (defaults to `http://localhost:5173`).

## 3. Build

```bash
npm run build
```

This runs a TypeScript project build and outputs a static site to `dist/`.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: RI/OS"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 5. Deploy to Vercel

**Option A — Vercel dashboard**
1. Go to https://vercel.com/new and import the GitHub repo you just pushed.
2. Vercel will detect `vercel.json`. Framework preset can stay "Other" —
   the build command (`npm run build`) and output directory (`dist`) are
   already set in `vercel.json`.
3. Click Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

No environment variables are required for the default setup.

## Notes

- The `server/` folder is optional — it's a small Express static file server
  for self-hosting on a plain Node box (e.g. your own VPS with PM2), matching
  the setup used for your other self-hosted tools. Vercel does **not** use it;
  Vercel serves the static `dist/` output directly per `vercel.json`.
- Tailwind v4 is configured via the `@tailwindcss/vite` plugin, so there's no
  separate `tailwind.config.js` — theme tokens live directly in
  `client/src/index.css`.
