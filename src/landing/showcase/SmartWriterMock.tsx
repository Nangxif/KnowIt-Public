import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

function WriterAssistantIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export default function SmartWriterMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.smartWriter;

  return (
    <BrowserFrame>
      <div className={styles.page}>
        <div className={styles.writerScene}>
          <SkeletonLine width={40} tone="strong" />

          <div className={styles.writerBox}>
            <div className={styles.writerText}>{mock.draftText}</div>
            <span className={styles.writerFab} data-showcase-anchor={SHOWCASE_ANCHORS.writerFab}>
              <WriterAssistantIcon />
            </span>
          </div>

          <div className={styles.writerMenu}>
            <div className={styles.writerMenuTitle}>{mock.assistantTitle}</div>
            <div className={styles.writerPresets}>
              {mock.presets.map((preset, index) => (
                <span
                  key={preset}
                  className={`${styles.chip} ${index === 0 ? styles.chipActive : ""}`}
                >
                  {preset}
                </span>
              ))}
            </div>
            <span className={styles.btn}>{mock.applyAction}</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
