import type { CSSProperties, ReactNode } from "react";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  LineChartOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";
import type { PromoStatsMetricCopy } from "@/i18n/types";

import { Headline, Poster } from "./Poster";
import styles from "./promo.module.css";

const METRICS: {
  key: "days" | "uses" | "tokens" | "success" | "latency";
  icon: ReactNode;
  color: string;
}[] = [
  { key: "days", icon: <CalendarOutlined />, color: "#3d9a7a" },
  { key: "uses", icon: <ThunderboltOutlined />, color: "#7b72ad" },
  { key: "tokens", icon: <NumberOutlined />, color: "#4f86c6" },
  { key: "success", icon: <CheckCircleOutlined />, color: "#2ec99d" },
  { key: "latency", icon: <ClockCircleOutlined />, color: "#8b7cc8" },
];

function MetricCard({
  copy,
  icon,
  color,
  showBar,
}: {
  copy: PromoStatsMetricCopy;
  icon: ReactNode;
  color: string;
  showBar?: boolean;
}) {
  return (
    <li className={styles.statsMetric} style={{ "--metric-color": color } as CSSProperties}>
      <div className={styles.statsMetricHead}>
        <span className={styles.statsMetricIcon}>{icon}</span>
        <span>{copy.label}</span>
      </div>
      <div className={styles.statsMetricValue}>
        {copy.value}
        {copy.unit ? <span>{copy.unit}</span> : null}
      </div>
      {copy.caption ? <p className={styles.statsMetricCaption}>{copy.caption}</p> : null}
      {showBar ? (
        <div className={styles.statsBar} aria-hidden>
          <span className={styles.statsBarFill} />
        </div>
      ) : null}
    </li>
  );
}

export default function StatsSlide() {
  const { text } = useTranslation();
  const stats = text.promo.stats;

  return (
    <Poster tone="field" accent="#7c73ff" className={styles.statsSlide}>
      <div className={styles.statsHero}>
        <div className={styles.copy}>
          <Headline copy={stats} variant="inline" />
        </div>
        <LineChartOutlined className={styles.statsMark} />
      </div>
      <section className={styles.statsPanel}>
        <h2 className={styles.statsPanelTitle}>{stats.panelTitle}</h2>
        <p className={styles.statsPanelHint}>{stats.panelHint}</p>
        <ul className={styles.statsMetrics}>
          {METRICS.map((item) => (
            <MetricCard
              key={item.key}
              copy={stats[item.key]}
              icon={item.icon}
              color={item.color}
              showBar={item.key === "success"}
            />
          ))}
        </ul>
      </section>
    </Poster>
  );
}
