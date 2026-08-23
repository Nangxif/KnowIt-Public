import { CheckCircleFilled, ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

import styles from "./Pricing.module.css";

export default function Pricing() {
  const { text } = useTranslation();

  return (
    <section className={styles.section} id="pricing">
      <header className={styles.header}>
        <h2>{text.pricingTitle}</h2>
        <p>{text.pricingSubtitle}</p>
      </header>
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>{text.freePlan}</h3>
          <div className={styles.price}>{text.freePrice}</div>
          <p className={styles.description}>{text.freeDescription}</p>
        </article>
        <article className={`${styles.card} ${styles.featured}`}>
          <h3>{text.lifetimePlan}</h3>
          <div className={styles.price}>{text.lifetimePrice}</div>
          <p className={styles.description}>{text.lifetimeDescription}</p>
          <ul className={styles.features}>
            {text.pricingFeatures.map((feature) => (
              <li key={feature}>
                <CheckCircleFilled />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            type="primary"
            icon={<ExportOutlined />}
            href={siteConfig.afdianUrl}
            target="_blank"
            rel="noreferrer noopener"
            block
            className={styles.purchase}
          >
            {text.purchaseAction}
          </Button>
        </article>
      </div>
      <p className={styles.hint}>{text.activationHint}</p>
    </section>
  );
}
