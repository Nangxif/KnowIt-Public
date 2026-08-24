import type { ReactNode } from "react";

import styles from "./BrowserFrame.module.css";

type BrowserFrameProps = {
  children: ReactNode;
};

/** 仿真截图统一外框:窗口按钮 + 地址栏 + 页面区域。 */
export default function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={`${styles.dot} ${styles.dotClose}`} />
        <span className={`${styles.dot} ${styles.dotMin}`} />
        <span className={`${styles.dot} ${styles.dotMax}`} />
        <span className={styles.addressBar}>knowit.example/article</span>
      </div>
      <div className={styles.viewport}>{children}</div>
    </div>
  );
}

type SkeletonLineProps = {
  /** 宽度百分比 */
  width?: number;
  tone?: "normal" | "strong";
};

/** 抽象正文底纹:一条圆角占位条。 */
export function SkeletonLine({ width = 100, tone = "normal" }: SkeletonLineProps) {
  return (
    <span
      className={`${styles.skeletonLine} ${tone === "strong" ? styles.skeletonStrong : ""}`}
      style={{ width: `${width}%` }}
    />
  );
}

/** 一组标题 + 段落底纹,模拟一篇网页文章的正文。 */
export function SkeletonArticle() {
  return (
    <div className={styles.skeletonArticle}>
      <SkeletonLine width={52} tone="strong" />
      <SkeletonLine width={34} />
      <div className={styles.skeletonGap} />
      <SkeletonLine width={96} />
      <SkeletonLine width={88} />
      <SkeletonLine width={92} />
      <SkeletonLine width={64} />
    </div>
  );
}
