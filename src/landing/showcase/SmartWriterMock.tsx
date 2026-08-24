import { EditOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import styles from "./mocks.module.css";

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
            <span className={styles.writerFab}>
              <EditOutlined />
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
