import { createElement } from "react";

import type { AppCategory, AppId } from "@/i18n/types";

import AppIcon, { APP_ICON_COLORS } from "./app-icons/AppIcon";

export type AppBadge = "free" | "premium";

export type CatalogApp = {
  id: AppId;
  category: AppCategory;
  color: string;
  badge: AppBadge;
  icon: ReturnType<typeof createElement>;
};

export const catalogApps: CatalogApp[] = [
  {
    id: "text-search",
    category: "efficiency",
    color: APP_ICON_COLORS["text-search"],
    badge: "free",
    icon: createElement(AppIcon, { id: "text-search" }),
  },
  {
    id: "media-downloader",
    category: "efficiency",
    color: APP_ICON_COLORS["media-downloader"],
    badge: "free",
    icon: createElement(AppIcon, { id: "media-downloader" }),
  },
  {
    id: "ad-cleaner",
    category: "efficiency",
    color: APP_ICON_COLORS["ad-cleaner"],
    badge: "free",
    icon: createElement(AppIcon, { id: "ad-cleaner" }),
  },
  {
    id: "element-inspector",
    category: "development",
    color: APP_ICON_COLORS["element-inspector"],
    badge: "free",
    icon: createElement(AppIcon, { id: "element-inspector" }),
  },
  {
    id: "page-export",
    category: "efficiency",
    color: APP_ICON_COLORS["page-export"],
    badge: "premium",
    icon: createElement(AppIcon, { id: "page-export" }),
  },
  {
    id: "content-summary",
    category: "ai",
    color: APP_ICON_COLORS["content-summary"],
    badge: "premium",
    icon: createElement(AppIcon, { id: "content-summary" }),
  },
  {
    id: "selection-translate",
    category: "ai",
    color: APP_ICON_COLORS["selection-translate"],
    badge: "premium",
    icon: createElement(AppIcon, { id: "selection-translate" }),
  },
  {
    id: "word-inspector",
    category: "ai",
    color: APP_ICON_COLORS["word-inspector"],
    badge: "premium",
    icon: createElement(AppIcon, { id: "word-inspector" }),
  },
  {
    id: "smart-writer",
    category: "ai",
    color: APP_ICON_COLORS["smart-writer"],
    badge: "premium",
    icon: createElement(AppIcon, { id: "smart-writer" }),
  },
];
