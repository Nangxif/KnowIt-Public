import type { CSSProperties, ReactNode } from "react";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";
import type { PromoStatsMetricCopy } from "@/i18n/types";

import { Headline, Poster } from "./Poster";
import styles from "./promo.module.css";

const SPARKS: Record<"days" | "uses" | "tokens" | "success" | "latency", string> = {
  days: "M2 28 C 10 26, 14 22, 22 20 S 34 12, 46 10 S 62 8, 78 4",
  uses: "M2 30 C 12 28, 16 18, 26 20 S 38 8, 48 12 S 64 6, 78 2",
  tokens: "M2 26 C 14 24, 18 16, 30 18 S 44 6, 56 10 S 68 4, 78 6",
  success: "M2 18 C 14 16, 22 8, 34 8 S 52 6, 64 4 S 72 4, 78 3",
  latency: "M2 8 C 12 10, 18 14, 28 12 S 42 22, 54 20 S 66 28, 78 26",
};

const METRICS: {
  key: keyof typeof SPARKS;
  icon: ReactNode;
  color: string;
}[] = [
  { key: "days", icon: <CalendarOutlined />, color: "var(--vscode-testing-iconPassed)" },
  { key: "uses", icon: <ThunderboltOutlined />, color: "var(--vscode-textLink-foreground)" },
  { key: "tokens", icon: <NumberOutlined />, color: "var(--vscode-button-background)" },
  { key: "success", icon: <CheckCircleOutlined />, color: "var(--vscode-testing-iconPassed)" },
  { key: "latency", icon: <ClockCircleOutlined />, color: "var(--vscode-focusBorder)" },
];

function Spark({ d }: { d: string }) {
  return (
    <svg className={styles.statsSpark} viewBox="0 0 80 36" aria-hidden>
      <path className={styles.statsSparkArea} d={`${d} L 78 36 L 2 36 Z`} />
      <path className={styles.statsSparkLine} d={d} />
    </svg>
  );
}

function MetricCard({
  copy,
  icon,
  color,
  spark,
}: {
  copy: PromoStatsMetricCopy;
  icon: ReactNode;
  color: string;
  spark: string;
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
      <Spark d={spark} />
    </li>
  );
}

function StatsChart() {
  const line = "M28 168 C 72 162, 96 118, 132 108 S 188 64, 228 74 S 292 34, 332 26";
  return (
    <svg className={styles.statsChart} viewBox="0 0 360 220" aria-hidden>
      <defs>
        <linearGradient id="promo-stats-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.42" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[48, 88, 128, 168].map((y) => (
        <line
          key={y}
          x1="28"
          x2="332"
          y1={y}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.14"
        />
      ))}
      <path d={`${line} L 332 196 L 28 196 Z`} fill="url(#promo-stats-area)" />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [28, 168],
        [132, 108],
        [228, 74],
        [332, 26],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="currentColor" />
      ))}
    </svg>
  );
}

export default function StatsSlide() {
  const { text } = useTranslation();
  const stats = text.promo.stats;

  return (
    <Poster tone="field" className={styles.statsSlide}>
      <div className={styles.statsHero}>
        <div className={styles.copy}>
          <Headline copy={stats} variant="inline" />
        </div>
        <StatsChart />
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
              spark={SPARKS[item.key]}
            />
          ))}
        </ul>
      </section>
    </Poster>
  );
}
