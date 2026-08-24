import {
  CheckOutlined,
  DownloadOutlined,
  PictureOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import BrowserFrame, { SkeletonArticle } from "./BrowserFrame";
import { SHOWCASE_ANCHORS } from "./calloutPlacements";
import styles from "./mocks.module.css";

const TILES = [
  { icon: <PictureOutlined />, checked: true },
  { icon: <PictureOutlined />, checked: true },
  { icon: <VideoCameraOutlined />, checked: false },
  { icon: <PictureOutlined />, checked: true },
  { icon: <VideoCameraOutlined />, checked: true },
  { icon: <PictureOutlined />, checked: false },
];

export default function MediaDownloaderMock() {
  const { text } = useTranslation();
  const mock = text.showcaseMock.mediaDownloader;

  return (
    <BrowserFrame>
      <div className={styles.split}>
        <div className={styles.pageCol}>
          <SkeletonArticle />
        </div>
        <aside className={styles.sidePanel} data-showcase-anchor={SHOWCASE_ANCHORS.sidePanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelHeaderIcon}>
              <DownloadOutlined />
            </span>
            {mock.panelTitle}
          </div>
          <div className={styles.panelBody}>
            <div className={styles.chipRow}>
              <span className={`${styles.chip} ${styles.chipActive}`}>
                {mock.filterAll}
              </span>
              <span className={styles.chip}>{mock.filterImages}</span>
              <span className={styles.chip}>{mock.filterVideos}</span>
            </div>
            <div className={styles.mediaGrid}>
              {TILES.map((tile, index) => (
                <span key={index} className={styles.mediaTile}>
                  {tile.icon}
                  <span
                    className={`${styles.mediaCheck} ${
                      tile.checked ? styles.mediaCheckOn : ""
                    }`}
                  >
                    {tile.checked ? <CheckOutlined /> : null}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.panelFooter}>
            <span className={styles.panelMeta}>{mock.selectedCount}</span>
            <span className={styles.btn}>
              <DownloadOutlined />
              {mock.downloadAction}
            </span>
          </div>
        </aside>
      </div>
    </BrowserFrame>
  );
}
