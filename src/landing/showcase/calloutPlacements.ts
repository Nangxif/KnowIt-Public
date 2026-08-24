import type { AppId } from "@/i18n/types";

export const SHOWCASE_ANCHORS = {
  searchBar: "search-bar",
  sidePanel: "side-panel",
  floatToolbar: "float-toolbar",
  writerFab: "writer-fab",
} as const;

export type CalloutSide = "top" | "right" | "bottom" | "left";
export type CalloutAlign = "start" | "center" | "end";

export type CalloutConfig = {
  anchor: (typeof SHOWCASE_ANCHORS)[keyof typeof SHOWCASE_ANCHORS];
  side: CalloutSide;
  align?: CalloutAlign;
  gap?: number;
  maxWidth?: number;
};

export const CALLOUT_CONFIGS: Record<AppId, CalloutConfig> = {
  "text-search": {
    anchor: SHOWCASE_ANCHORS.searchBar,
    side: "bottom",
    align: "end",
    gap: 8,
    maxWidth: 220,
  },
  "media-downloader": {
    anchor: SHOWCASE_ANCHORS.sidePanel,
    side: "left",
    align: "center",
    gap: 10,
    maxWidth: 200,
  },
  "page-export": {
    anchor: SHOWCASE_ANCHORS.sidePanel,
    side: "left",
    align: "center",
    gap: 10,
    maxWidth: 200,
  },
  "content-summary": {
    anchor: SHOWCASE_ANCHORS.sidePanel,
    side: "left",
    align: "center",
    gap: 10,
    maxWidth: 200,
  },
  "selection-translate": {
    anchor: SHOWCASE_ANCHORS.floatToolbar,
    side: "bottom",
    align: "start",
    gap: 8,
    maxWidth: 220,
  },
  "word-inspector": {
    anchor: SHOWCASE_ANCHORS.floatToolbar,
    side: "bottom",
    align: "start",
    gap: 8,
    maxWidth: 220,
  },
  "smart-writer": {
    anchor: SHOWCASE_ANCHORS.writerFab,
    side: "top",
    align: "end",
    gap: 8,
    maxWidth: 220,
  },
};

export type CalloutTail = CalloutSide;

export function anchorSelector(anchor: CalloutConfig["anchor"]) {
  return `[data-showcase-anchor="${anchor}"]`;
}

export function computeCalloutLayout(
  stage: HTMLElement,
  anchor: HTMLElement,
  callout: HTMLElement,
  config: CalloutConfig,
) {
  const gap = config.gap ?? 10;
  const align = config.align ?? "center";
  const stageRect = stage.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  const calloutWidth = callout.offsetWidth;
  const calloutHeight = callout.offsetHeight;

  const anchorTop = anchorRect.top - stageRect.top;
  const anchorLeft = anchorRect.left - stageRect.left;
  const anchorRight = anchorRect.right - stageRect.left;
  const anchorBottom = anchorRect.bottom - stageRect.top;
  const anchorCenterX = anchorLeft + anchorRect.width / 2;
  const anchorCenterY = anchorTop + anchorRect.height / 2;

  let top = 0;
  let left = 0;

  switch (config.side) {
    case "bottom":
      top = anchorBottom + gap;
      if (align === "end") left = anchorRight - calloutWidth;
      else if (align === "start") left = anchorLeft;
      else left = anchorCenterX - calloutWidth / 2;
      break;
    case "top":
      top = anchorTop - calloutHeight - gap;
      if (align === "end") left = anchorRight - calloutWidth;
      else if (align === "start") left = anchorLeft;
      else left = anchorCenterX - calloutWidth / 2;
      break;
    case "left":
      left = anchorLeft - calloutWidth - gap;
      if (align === "start") top = anchorTop;
      else if (align === "end") top = anchorBottom - calloutHeight;
      else top = anchorCenterY - calloutHeight / 2;
      break;
    case "right":
      left = anchorRight + gap;
      if (align === "start") top = anchorTop;
      else if (align === "end") top = anchorBottom - calloutHeight;
      else top = anchorCenterY - calloutHeight / 2;
      break;
  }

  const inset = 8;
  left = Math.max(inset, Math.min(left, stage.clientWidth - calloutWidth - inset));
  top = Math.max(inset, Math.min(top, stage.clientHeight - calloutHeight - inset));

  const tail: CalloutTail =
    config.side === "top"
      ? "bottom"
      : config.side === "bottom"
        ? "top"
        : config.side === "left"
          ? "right"
          : "left";

  let tailAlign = "50%";
  if (tail === "top" || tail === "bottom") {
    const anchorX = anchorCenterX - left;
    const percent = Math.max(14, Math.min(86, (anchorX / calloutWidth) * 100));
    tailAlign = `${percent}%`;
  } else {
    const anchorY = anchorCenterY - top;
    const percent = Math.max(14, Math.min(86, (anchorY / calloutHeight) * 100));
    tailAlign = `${percent}%`;
  }

  return { top, left, tail, tailAlign };
}
