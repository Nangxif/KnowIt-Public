## 1. Project scaffold

- [x] 1.1 Initialize a Vite + React + TypeScript app at the repo root (`package.json`, Vite config with `base: "/KnowIt-Public/"`, tsconfig, `index.html`) without disturbing `openspec/` or existing READMEs
- [x] 1.2 Add runtime dependencies (`react`, `react-dom`, `antd`, `@ant-design/icons`) and scripts for `dev`, `build`, and `preview`
- [x] 1.3 Copy brand assets (`assets/logo.png` plus plugin dark/light logos if available) into the site public/asset path

## 2. Theme, i18n, and site config

- [x] 2.1 Port KnowIt `style.css` VS Code tokens and apply `data-knowit-theme` (`vscode-dark` default, `vscode-light` alternate)
- [x] 2.2 Persist theme and locale in `localStorage`; first visit defaults to dark + `zh-CN`
- [x] 2.3 Add `zh-CN` / `zh-TW` / `en-US` dictionaries for chrome and landing copy sourced from README and the plugin locales
- [x] 2.4 Add `site-config` with GitHub repo, Releases URL, Afdian checkout, contact emails, issues URL, and optional Chrome Web Store URL

## 3. Site shell

- [x] 3.1 Port `PixelWaveBackground` from `/Users/fangyankai/Documents/projects/KnowIt/tabs/apps/PixelWaveBackground.tsx`, drop `chrome`/`@/theme` usage, keep reduced-motion static frame and pointer-events none
- [x] 3.2 Port the `tabs/apps` capsule sticky nav (brand, scroll floating treatment, locale control, theme toggle) and replace settings/activation with section anchors plus an Install CTA
- [x] 3.3 Make the brand control scroll to the top of the landing page
- [x] 3.4 Port `AppFooter` structure: brand, GitHub, emails, issues, and in-place privacy / terms / changelog documents with no license activation UI

## 4. Marketing landing

- [x] 4.1 Build the hero with product promise, primary install action (Releases by default), and a path to Afdian purchase
- [x] 4.2 Build the highlights section covering modular marketplace, local-first privacy, BYO API key, and interaction surfaces
- [x] 4.3 Build a read-only app catalog for the seven public apps with name, description, category, and free/premium distinction; no install/uninstall/settings actions
- [x] 4.4 Build pricing for Free vs Lifetime (¥6.66), Afdian purchase action, and copy that activation happens in the extension (email + order number, 2 activations, BYO key)

## 5. Publish and verify

- [x] 5.1 Add GitHub Actions to build and deploy `dist/` to GitHub Pages
- [x] 5.2 Link the official site URL from `README.md` and `README_EN.md`
- [x] 5.3 Verify locally: theme persist, locale persist, reduced-motion static background, anchors, install/purchase/footer links, and that no activation form is present
