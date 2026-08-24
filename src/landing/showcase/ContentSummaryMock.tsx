import { FontSizeOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonArticle } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

export default function ContentSummaryMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.contentSummary;

  return (
    <BrowserFrame>
      <div className={styles.split}>
        <div className={styles.pageCol}>
          <SkeletonArticle />
        </div>
        <aside className={styles.sidePanel} data-showcase-anchor={SHOWCASE_ANCHORS.sidePanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelHeaderIcon}>
              <FontSizeOutlined />
            </span>
            {mock.panelTitle}
            <span style={{ flex: 1 }} />
            <span className={styles.pulseDot} />
            <span className={styles.panelMeta}>{mock.generating}</span>
          </div>
          <div className={styles.panelBody}>
            <span className={styles.panelLabel}>{mock.keyPointsLabel}</span>
            <ul className={styles.pointList}>
              {mock.keyPoints.map((point) => (
                <li key={point} className={styles.pointItem}>
                  <span className={styles.pointMarker} />
                  {point}
                </li>
              ))}
            </ul>
            <span className={styles.textLine}>
              <span className={styles.inlineBar} style={{ width: "46%" }} />
              <span className={styles.caret} />
            </span>
          </div>
        </aside>
      </div>
    </BrowserFrame>
  );
}
