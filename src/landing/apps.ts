import {
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

export type CatalogApp = {
  id: AppId;
  category: AppCategory;
  color: string;
  premium: boolean;
  icon: ReactNode;
};

export const catalogApps: CatalogApp[] = [
  {
    id: "text-search",
    category: "efficiency",
    color: "#7c73ff",
    premium: false,
    icon: createElement(SearchOutlined),
  },
  {
    id: "media-downloader",
    category: "efficiency",
    color: "#db5f86",
    premium: false,
    icon: createElement(DownloadOutlined),
  },
  {
    id: "page-export",
    category: "efficiency",
    color: "#d9aa22",
    premium: true,
    icon: createElement(ExportOutlined),
  },
  {
    id: "content-summary",
    category: "ai",
    color: "#2ec99d",
    premium: true,
    icon: createElement(FontSizeOutlined),
  },
  {
    id: "selection-translate",
    category: "ai",
    color: "#3984ff",
    premium: true,
    icon: createElement(TranslationOutlined),
  },
  {
    id: "word-inspector",
    category: "ai",
    color: "#a36cff",
    premium: true,
    icon: createElement(FileSearchOutlined),
  },
  {
    id: "smart-writer",
    category: "ai",
    color: "#ff6c37",
    premium: true,
    icon: createElement(EditOutlined),
  },
];
