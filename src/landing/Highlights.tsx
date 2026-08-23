import {
  AppstoreOutlined,
  KeyOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useTranslation } from "@/i18n/context";

import styles from "./Highlights.module.css";

export default function Highlights() {
  const { text } = useTranslation();

  const items = [
    {
      icon: <AppstoreOutlined />,
      title: text.highlightMarketplaceTitle,
      body: text.highlightMarketplaceBody,
      color: "#7c73ff",
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: text.highlightPrivacyTitle,
      body: text.highlightPrivacyBody,
      color: "#2ec99d",
    },
    {
      icon: <KeyOutlined />,
      title: text.highlightByokTitle,
      body: text.highlightByokBody,
      color: "#3984ff",
    },
    {
      icon: <ThunderboltOutlined />,
      title: text.highlightUxTitle,
      body: text.highlightUxBody,
      color: "#ff6c37",
    },
  ];

  return (
    <section className={styles.section} id="highlights">
      <header className={styles.header}>
        <h2>{text.highlightsTitle}</h2>
        <p>{text.highlightsSubtitle}</p>
      </header>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon} style={{ color: item.color }}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
