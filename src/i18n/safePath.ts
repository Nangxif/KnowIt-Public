import { PROMO_SLIDE_PATHS, PROMO_INDEX_PATH, PROMO_TILE_PATH } from "@/app/paths";
import { APP_DOC_IDS } from "@/docs/docIds";

import { stripLocalePrefix } from "./routing";

const KNOWN_PATHS: Record<string, string> = {
  "/": "/",
  "/faq": "/faq",
  "/docs": "/docs",
  "/privacy": "/privacy",
  "/terms": "/terms",
  "/changelog": "/changelog",
  [PROMO_INDEX_PATH]: PROMO_INDEX_PATH,
  [PROMO_TILE_PATH]: PROMO_TILE_PATH,
};

for (const id of APP_DOC_IDS) {
  KNOWN_PATHS[`/docs/${id}`] = `/docs/${id}`;
}

for (const path of Object.values(PROMO_SLIDE_PATHS)) {
  KNOWN_PATHS[path] = path;
}

const KNOWN_HASHES: Record<string, string> = {
  "#top": "#top",
  "#highlights": "#highlights",
  "#showcase": "#showcase",
  "#apps": "#apps",
  "#pricing": "#pricing",
};

/** Returns a site path from a fixed allowlist. Unknown paths become the home page. */
export function knownBarePath(pathname: string): string {
  return KNOWN_PATHS[stripLocalePrefix(pathname)] ?? "/";
}

export function knownHash(hash: string): string {
  return KNOWN_HASHES[hash] ?? "";
}

export function themeSearch(params: URLSearchParams): string {
  switch (params.get("theme")) {
    case "light":
      return "?theme=light";
    case "dark":
      return "?theme=dark";
    case "vscode-light":
      return "?theme=vscode-light";
    case "vscode-dark":
      return "?theme=vscode-dark";
    default:
      return "";
  }
}
