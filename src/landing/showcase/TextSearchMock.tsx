import {
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonLine } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

export default function TextSearchMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.textSearch;

  return (
    <BrowserFrame>
      <div className={styles.page}>
        <div className={styles.searchBar} data-showcase-anchor={SHOWCASE_ANCHORS.searchBar}>
          <SearchOutlined className={styles.searchIcon} />
          <span className={styles.searchQuery}>{mock.query}</span>
          <span className={styles.searchCount}>{mock.matchCount}</span>
          <span className={styles.searchNav}>
            <UpOutlined />
            <DownOutlined />
            <CloseOutlined />
          </span>
        </div>

        <SkeletonLine width={46} tone="strong" />
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "26%" }} />
          <mark className={`${styles.hit} ${styles.hitActive}`}>{mock.query}</mark>
          <span className={styles.inlineBar} style={{ width: "42%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "88%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "34%" }} />
          <mark className={styles.hit}>{mock.query}</mark>
          <span className={styles.inlineBar} style={{ width: "24%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "72%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "56%" }} />
        </div>
        <div className={styles.paragraphGap} />
        <SkeletonLine width={30} tone="strong" />
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "84%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "90%" }} />
        </div>
        <div className={styles.textLine}>
          <span className={styles.inlineBar} style={{ width: "48%" }} />
        </div>
      </div>
    </BrowserFrame>
  );
}
