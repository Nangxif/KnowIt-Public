import type { CSSProperties, ReactNode } from "react";

import type { PromoSlideCopy } from "@/i18n/types";

import styles from "./promo.module.css";

export function Poster({
  tone,
  accent,
  className,
  children,
}: {
  tone: "field" | "air";
  /** Optional override; defaults to KnowIt `--vscode-button-background` via CSS. */
  accent?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`${styles.slide} ${tone === "field" ? styles.field : styles.air}${className ? ` ${className}` : ""}`}
      style={accent ? ({ "--promo-accent": accent } as CSSProperties) : undefined}
    >
      <div className={styles.wash} aria-hidden />
      <div className={styles.glowA} aria-hidden />
      <div className={styles.glowB} aria-hidden />
      <div className={styles.glowC} aria-hidden />
      <div className={styles.frost} aria-hidden />
      <div className={styles.grid} aria-hidden />
      {children}
    </div>
  );
}

export function Headline({
  copy,
  variant = "stack",
}: {
  copy: PromoSlideCopy;
  variant?: "stack" | "inline";
}) {
  return (
    <>
      <h1 className={variant === "inline" ? styles.headlineInline : styles.headline}>
        <span className={styles.lead}>{copy.lead}</span>
        {copy.rest ? <span className={styles.rest}>{copy.rest}</span> : null}
      </h1>
      {copy.subtitle ? <p className={styles.subtitle}>{copy.subtitle}</p> : null}
    </>
  );
}
