import { FontSizeOutlined, TranslationOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import styles from "./mocks.module.css";

export default function SelectionTranslateMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.selectionTranslate;

  return (
    <BrowserFrame>
      <div className={styles.page}>
        <SkeletonLine width={44} tone="strong" />
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "82%" }} />
        </div>

        <div className={styles.selectionScene}>
          <div className={styles.floatToolbar}>
            <span className={`${styles.toolbarBtn} ${styles.toolbarBtnActive}`}>
              <TranslationOutlined />
              {mock.toolbarTranslate}
            </span>
            <span className={styles.toolbarBtn}>
              <FontSizeOutlined />
              {mock.toolbarSummarize}
            </span>
          </div>

          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "14%" }} />
            <mark className={styles.selection}>{mock.selectedText}</mark>
            <span className={styles.inlineBar} style={{ width: "20%" }} />
          </div>

          <div className={styles.bubble}>
            <div className={styles.bubbleLabel}>{mock.resultLabel}</div>
            <div className={styles.bubbleText}>{mock.resultText}</div>
          </div>
        </div>

        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "68%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "86%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "74%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "40%" }} />
        </div>
      </div>
    </BrowserFrame>
  );
}
