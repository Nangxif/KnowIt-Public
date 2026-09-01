import { Button, Modal } from "antd";
import { useState, type CSSProperties } from "react";

import { useTranslation } from "@/i18n/context";
import type { AppCategory, Messages } from "@/i18n/types";

import { catalogApps, type AppBadge, type CatalogApp } from "./apps";
import styles from "./AppCatalog.module.css";

function categoryLabel(category: AppCategory, text: Messages) {
  if (category === "ai") return text.categoryAi;
  if (category === "development") return text.categoryDevelopment;
  return text.categoryEfficiency;
}

function Badge({ badge, text }: { badge: AppBadge; text: Messages }) {
  const paid = badge === "premium";
  return (
    <span className={`${styles.badge} ${paid ? styles.badgePaid : styles.badgeFree}`}>
      {paid ? text.paidTag : text.freeTag}
    </span>
  );
}

export default function AppCatalog() {
  const { text } = useTranslation();
  const [selected, setSelected] = useState<CatalogApp | null>(null);

  return (
    <section className={styles.section} id="apps" aria-label={text.appsTitle}>
      <header className={styles.header}>
        <h2>{text.appsTitle}</h2>
        <p>{text.appsSubtitle}</p>
      </header>
      <div className={styles.grid}>
        {catalogApps.map((app) => (
          <article
            key={app.id}
            className={styles.card}
            onClick={() => setSelected(app)}
          >
            <div className={styles.cardTop}>
              <div
                className={styles.appIcon}
                style={{ "--app-icon-bg": app.color } as CSSProperties}
              >
                {app.icon}
              </div>
              <Badge badge={app.badge} text={text} />
            </div>
            <h3>{text.appNames[app.id]}</h3>
            <div className={styles.category}>
              {categoryLabel(app.category, text)}
            </div>
            <p>{text.appDescriptions[app.id]}</p>
          </article>
        ))}
      </div>

      <Modal
        open={!!selected}
        title={selected ? text.detailsTitle : ""}
        onCancel={() => setSelected(null)}
        footer={[
          <Button key="close" type="primary" onClick={() => setSelected(null)}>
            {text.detailsClose}
          </Button>,
        ]}
        centered
        width={520}
      >
        {selected ? (
          <div className={styles.detail}>
            <div className={styles.detailHeader}>
              <div
                className={styles.appIcon}
                style={{ "--app-icon-bg": selected.color } as CSSProperties}
              >
                {selected.icon}
              </div>
              <div>
                <h3>{text.appNames[selected.id]}</h3>
                <div className={styles.detailTags}>
                  <span className={`${styles.badge} ${styles.badgeFree}`}>
                    {categoryLabel(selected.category, text)}
                  </span>
                  <Badge badge={selected.badge} text={text} />
                </div>
              </div>
            </div>
            <p>{text.appDescriptions[selected.id]}</p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
