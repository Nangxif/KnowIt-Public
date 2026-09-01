## 1. Types and copy

- [x] 1.1 Extend `AppId` with `"element-inspector"` and `AppCategory` with `"development"` in `src/i18n/types.ts`; add `categoryDevelopment` and `showcaseMock.elementInspector` fields
- [x] 1.2 Add zh-CN / zh-TW / en-US name, description, caption, category label, mock panel strings, and `freeDescription` from the KnowIt plugin marketplace + `locales/*/element-inspector.ts`
- [x] 1.3 Prepend changelog entry `2.4.0` (implementation date) stating Element Inspector was added; leave older entries unchanged

## 2. Catalog and pricing

- [x] 2.1 Insert a free `element-inspector` catalog item after Ad Cleaner (`category: "development"`, color `#5b90b0`, ant-design icon)
- [x] 2.2 Render the Development category label on catalog cards and the details modal
- [x] 2.3 Confirm the pricing free-plan sentence now lists Text Search, Media Downloader, Ad Cleaner, and Element Inspector

## 3. Showcase mock

- [x] 3.1 Add `ElementInspectorMock` with BrowserFrame, highlighted code block, Figma-like properties panel, and bottom Inspect / Eyedropper toolbar; no live page inspection
- [x] 3.2 Register the mock and a new callout anchor in `Showcase.tsx` and `calloutPlacements.ts`
- [x] 3.3 Style the panel and toolbar in existing mock CSS so they follow dark/light theme tokens

## 4. Public docs and verify

- [x] 4.1 Add a free-app section for Element Inspector to `README.md` and `README_EN.md` (what it does + context menu / shortcut / hover / eyedropper / Esc)
- [x] 4.2 Verify in the browser: catalog card, showcase switch, pricing free plan, changelog, and locale/theme switches; mock must not inspect the real landing page
