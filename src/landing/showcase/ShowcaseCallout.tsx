import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import {
  anchorSelector,
  computeCalloutLayout,
  type CalloutConfig,
  type CalloutTail,
} from "./calloutPlacements";
import styles from "./ShowcaseCallout.module.css";

type ShowcaseCalloutProps = {
  text: string;
  config: CalloutConfig;
};

export default function ShowcaseCallout({ text, config }: ShowcaseCalloutProps) {
  const calloutRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<{
    top: number;
    left: number;
    tail: CalloutTail;
    tailAlign: string;
    ready: boolean;
  }>({ top: 0, left: 0, tail: config.side, tailAlign: "50%", ready: false });

  useLayoutEffect(() => {
    const callout = calloutRef.current;
    if (!callout) return;

    const stage = callout.closest("[data-showcase-stage]");
    if (!(stage instanceof HTMLElement)) return;

    const updateLayout = () => {
      const anchor = stage.querySelector(anchorSelector(config.anchor));
      if (!(anchor instanceof HTMLElement)) return;

      const next = computeCalloutLayout(stage, anchor, callout, config);
      setLayout({ ...next, ready: true });
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(stage);
    observer.observe(callout);

    const anchor = stage.querySelector(anchorSelector(config.anchor));
    if (anchor instanceof HTMLElement) {
      observer.observe(anchor);
    }

    return () => observer.disconnect();
  }, [config, text]);

  const style: CSSProperties = {
    top: layout.top,
    left: layout.left,
    maxWidth: config.maxWidth,
    visibility: layout.ready ? "visible" : "hidden",
    "--tail-align": layout.tailAlign,
  } as CSSProperties;

  const tailClass = `tail${layout.tail[0].toUpperCase()}${layout.tail.slice(1)}`;

  return (
    <div
      ref={calloutRef}
      className={`${styles.callout} ${styles[tailClass]}`}
      style={style}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}
