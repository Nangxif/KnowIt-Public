import { AimOutlined, CloseOutlined, CopyOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.inspectorRow}>
      <span className={styles.inspectorKey}>{label}</span>
      <span className={`${styles.inspectorValue} ${styles.mono}`}>{value}</span>
    </div>
  );
}

export default function ElementInspectorMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.elementInspector;

  return (
    <BrowserFrame>
      <div className={styles.inspectorScene}>
        <SkeletonLine width={46} tone="strong" />
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "82%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "68%" }} />
        </div>

        <div className={styles.inspectorCode}>
          <span className={styles.inspectorCodeLine}>const exports = module.exports</span>
          <span className={styles.inspectorCodeLine}>exports.add = (a, b) =&gt; a + b</span>
          <span className={styles.inspectorCodeLine}>exports.mul = (a, b) =&gt; a * b</span>
        </div>

        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "74%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "52%" }} />
        </div>

        <aside
          className={styles.inspectorPanel}
          data-showcase-anchor={SHOWCASE_ANCHORS.inspectorPanel}
        >
          <header className={styles.inspectorPanelHead}>
            <strong>{mock.tagName}</strong>
            <span className={styles.inspectorCopy}>
              <CopyOutlined />
              {mock.copyCss}
            </span>
          </header>
          <div className={styles.inspectorGroup}>
            <div className={styles.inspectorGroupTitle}>{mock.sectionIdentity}</div>
            <Row label={mock.labelTag} value={mock.tagName} />
            <Row label={mock.labelClass} value={mock.classValue} />
          </div>
          <div className={styles.inspectorGroup}>
            <div className={styles.inspectorGroupTitle}>{mock.sectionSize}</div>
            <Row label={mock.labelWidth} value={mock.widthValue} />
            <Row label={mock.labelHeight} value={mock.heightValue} />
          </div>
          <div className={styles.inspectorGroup}>
            <div className={styles.inspectorGroupTitle}>{mock.sectionLayout}</div>
            <Row label={mock.labelDisplay} value={mock.displayValue} />
          </div>
          <div className={styles.inspectorGroup}>
            <div className={styles.inspectorGroupTitle}>{mock.sectionTypography}</div>
            <Row label={mock.labelFont} value={mock.fontValue} />
            <Row label={mock.labelColor} value={mock.colorValue} />
          </div>
          <div className={styles.inspectorGroup}>
            <div className={styles.inspectorGroupTitle}>{mock.sectionFill}</div>
            <Row label={mock.labelBackground} value={mock.backgroundValue} />
          </div>
        </aside>

        <div className={styles.inspectorToolbar}>
          <span className={`${styles.inspectorTool} ${styles.inspectorToolActive}`}>
            <AimOutlined />
            {mock.modeInspect}
          </span>
          <span className={styles.inspectorTool}>{mock.modeEyedropper}</span>
          <span className={styles.inspectorToolClose}>
            <CloseOutlined />
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}
