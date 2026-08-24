import { CopyOutlined, ExportOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonArticle } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

const MD_LINES = [
  { token: "#", width: "52%" },
  { token: ">", width: "64%" },
  { token: "##", width: "40%" },
  { token: "-", width: "68%" },
  { token: "-", width: "56%" },
  { token: "##", width: "34%" },
  { token: "-", width: "60%" },
];

export default function PageExportMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.pageExport;

  return (
    <BrowserFrame>
      <div className={styles.split}>
        <div className={styles.pageCol}>
          <SkeletonArticle />
        </div>
        <aside className={styles.sidePanel} data-showcase-anchor={SHOWCASE_ANCHORS.sidePanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelHeaderIcon}>
              <ExportOutlined />
            </span>
            {mock.panelTitle}
          </div>
          <div className={styles.panelBody}>
            <span className={styles.panelLabel}>{mock.previewLabel}</span>
            {MD_LINES.map((line, index) => (
              <span key={index} className={styles.mdLine}>
                <span className={styles.mdToken}>{line.token}</span>
                <span className={styles.inlineBar} style={{ width: line.width }} />
              </span>
            ))}
          </div>
          <div className={styles.panelFooter}>
            <span className={styles.btnGhost}>
              <CopyOutlined />
              {mock.copyAction}
            </span>
            <span className={styles.btn}>
              <ExportOutlined />
              {mock.exportAction}
            </span>
          </div>
        </aside>
      </div>
    </BrowserFrame>
  );
}
