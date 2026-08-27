import {
  ClearOutlined,
  DownloadOutlined,
  EditOutlined,
  ExportOutlined,
  FileSearchOutlined,
  FontSizeOutlined,
  SearchOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import { createElement } from "react";

import type { AppCategory, AppId } from "@/i18n/types";

export type AppBadge = "free" | "premium" | "comingSoon";

export type CatalogApp = {
  id: AppId;
  category: AppCategory;
  color: string;
  badge: AppBadge;
  icon: ReactNode;
};

export const catalogApps: CatalogApp[] = [
  {
    id: "text-search",
    category: "efficiency",
    color: "#7c73ff",
    badge: "free",
    icon: createElement(SearchOutlined),
  },
  {
    id: "media-downloader",
    category: "efficiency",
    color: "#db5f86",
    badge: "free",
    icon: createElement(DownloadOutlined),
  },
  {
    id: "ad-cleaner",
    category: "efficiency",
    color: "#e85d4c",
    badge: "comingSoon",
    icon: createElement(ClearOutlined),
  },
  {
    id: "page-export",
    category: "efficiency",
    color: "#d9aa22",
    badge: "premium",
    icon: createElement(ExportOutlined),
  },
  {
    id: "content-summary",
    category: "ai",
    color: "#2ec99d",
    badge: "premium",
    icon: createElement(FontSizeOutlined),
  },
  {
    id: "selection-translate",
    category: "ai",
    color: "#3984ff",
    badge: "premium",
    icon: createElement(TranslationOutlined),
  },
  {
    id: "word-inspector",
    category: "ai",
    color: "#a36cff",
    badge: "premium",
    icon: createElement(FileSearchOutlined),
  },
  {
    id: "smart-writer",
    category: "ai",
    color: "#ff6c37",
    badge: "premium",
    icon: createElement(EditOutlined),
  },
];
