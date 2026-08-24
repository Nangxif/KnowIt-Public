import { FileSearchOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

export default function WordInspectorMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.wordInspector;

  return (
    <BrowserFrame>
      <div className={styles.page}>
        <SkeletonLine width={38} tone="strong" />
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "78%" }} />
        </div>

        <div className={styles.selectionScene}>
          <div
            className={styles.floatToolbar}
            data-showcase-anchor={SHOWCASE_ANCHORS.floatToolbar}
          >
            <span className={`${styles.toolbarBtn} ${styles.toolbarBtnActive}`}>
              <FileSearchOutlined />
              {mock.toolbarInspect}
            </span>
          </div>

          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "22%" }} />
            <mark className={styles.selection}>{mock.selectedWord}</mark>
            <span className={styles.inlineBar} style={{ width: "30%" }} />
          </div>

          <div className={styles.bubble}>
            <div className={styles.bubbleRow}>
              <span className={styles.bubbleLabel}>{mock.pinyinLabel}</span>
              <span className={`${styles.bubbleText} ${styles.mono}`}>
                {mock.pinyin}
              </span>
            </div>
            <div className={styles.bubbleRow}>
              <span className={styles.bubbleLabel}>{mock.meaningLabel}</span>
              <span className={styles.bubbleText}>{mock.meaning}</span>
            </div>
          </div>
        </div>

        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "60%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "88%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "70%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "44%" }} />
        </div>
      </div>
    </BrowserFrame>
  );
}
