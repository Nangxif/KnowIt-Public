import { CheckCircleFilled, ClearOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

export default function AdCleanerMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.adCleaner;

  return (
    <BrowserFrame>
      <div className={styles.page}>
        <div className={styles.adCleanerScene}>
          <span className={`${styles.adSlot} ${styles.adSlotPromo}`}>
            {mock.promoLabel}
          </span>

          <SkeletonLine width={52} tone="strong" />
          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "86%" }} />
          </div>
          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "72%" }} />
          </div>

          <span className={styles.adSlot}>{mock.adLabel}</span>

          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "90%" }} />
          </div>
          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "64%" }} />
          </div>

          <span className={`${styles.adSlot} ${styles.adSlotWide}`}>
            {mock.adLabel}
          </span>

          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "78%" }} />
          </div>
          <div className={styles.textLine}>
            <span className={styles.inlineBar} style={{ width: "44%" }} />
          </div>

          <div
            className={styles.adToast}
            data-showcase-anchor={SHOWCASE_ANCHORS.toast}
          >
            <span className={styles.adToastIcon}>
              <CheckCircleFilled />
            </span>
            <span className={styles.adToastTitle}>{mock.cleaned}</span>
            <span className={styles.btn}>
              <ClearOutlined />
              {mock.undo}
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
