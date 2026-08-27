import type { ReactNode } from "react";
import { useState } from "react";

import { useTranslation } from "@/i18n/context";
import type { AppId } from "@/i18n/types";

import { catalogApps } from "./apps";
import styles from "./Showcase.module.css";
import { CALLOUT_CONFIGS } from "./showcase/calloutPlacements";
import AdCleanerMock from "./showcase/AdCleanerMock";
import ContentSummaryMock from "./showcase/ContentSummaryMock";
import MediaDownloaderMock from "./showcase/MediaDownloaderMock";
import PageExportMock from "./showcase/PageExportMock";
import SelectionTranslateMock from "./showcase/SelectionTranslateMock";
import SmartWriterMock from "./showcase/SmartWriterMock";
import ShowcaseCallout from "./showcase/ShowcaseCallout";
import TextSearchMock from "./showcase/TextSearchMock";
import WordInspectorMock from "./showcase/WordInspectorMock";

const MOCKS: Record<AppId, ReactNode> = {
  "text-search": <TextSearchMock />,
  "media-downloader": <MediaDownloaderMock />,
  "ad-cleaner": <AdCleanerMock />,
  "page-export": <PageExportMock />,
  "content-summary": <ContentSummaryMock />,
  "selection-translate": <SelectionTranslateMock />,
  "word-inspector": <WordInspectorMock />,
  "smart-writer": <SmartWriterMock />,
};

export default function Showcase() {
  const { text } = useTranslation();
  const [activeId, setActiveId] = useState<AppId>("text-search");

  return (
    <section className={styles.section} id="showcase">
      <header className={styles.header}>
        <h2>{text.showcaseTitle}</h2>
        <p>{text.showcaseSubtitle}</p>
      </header>

      <div className={styles.layout}>
        <div className={styles.switcher} role="tablist">
          {catalogApps.map((app) => {
            const isActive = app.id === activeId;
            return (
              <button
                key={app.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.switchItem} ${isActive ? styles.switchItemActive : ""}`}
                onClick={() => setActiveId(app.id)}
              >
                <span className={styles.switchIcon} style={{ color: app.color }}>
                  {app.icon}
                </span>
                <span className={styles.switchName}>{text.appNames[app.id]}</span>
                <span
                  className={`${styles.switchTag} ${
                    app.badge === "premium"
                      ? styles.switchTagPremium
                      : app.badge === "comingSoon"
                        ? styles.switchTagComingSoon
                        : ""
                  }`}
                >
                  {app.badge === "premium"
                    ? text.premiumTag
                    : app.badge === "comingSoon"
                      ? text.comingSoonTag
                      : text.freeTag}
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.stageArea}>
          <div className={styles.stage} data-showcase-stage>
            <div className={styles.stageMock}>{MOCKS[activeId]}</div>
            <ShowcaseCallout
              key={activeId}
              text={text.showcaseCaptions[activeId]}
              config={CALLOUT_CONFIGS[activeId]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
