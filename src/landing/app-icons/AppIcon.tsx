import type { AppId } from "@/i18n/types";

import adCleaner from "./ad-cleaner.svg?raw";
import contentSummary from "./content-summary.svg?raw";
import elementInspector from "./element-inspector.svg?raw";
import mediaDownloader from "./media-downloader.svg?raw";
import pageExport from "./page-export.svg?raw";
import smartWriter from "./smart-writer.svg?raw";
import textSearch from "./text-search.svg?raw";
import translation from "./translation.svg?raw";
import wordInspector from "./word-inspector.svg?raw";
import styles from "./AppIcon.module.css";

const SVG_BY_ID: Record<AppId, string> = {
  "text-search": textSearch,
  "media-downloader": mediaDownloader,
  "ad-cleaner": adCleaner,
  "element-inspector": elementInspector,
  "page-export": pageExport,
  "content-summary": contentSummary,
  "selection-translate": translation,
  "word-inspector": wordInspector,
  "smart-writer": smartWriter,
};

export const APP_ICON_COLORS: Record<AppId, string> = {
  "text-search": "#6670b8",
  "media-downloader": "#a86b7c",
  "ad-cleaner": "#b1766b",
  "element-inspector": "#5b90b0",
  "page-export": "#a89455",
  "content-summary": "#5a9a88",
  "selection-translate": "#5f84b8",
  "word-inspector": "#7b72ad",
  "smart-writer": "#c08264",
};

type AppIconProps = {
  id: AppId;
};

export default function AppIcon({ id }: AppIconProps) {
  return (
    <span
      className={styles.icon}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: SVG_BY_ID[id] }}
    />
  );
}
