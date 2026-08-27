import { Button, Modal, Tag } from "antd";
import { useState } from "react";

import { useTranslation } from "@/i18n/context";

import { catalogApps, type CatalogApp } from "./apps";
import styles from "./AppCatalog.module.css";

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
            {app.badge === "premium" ? (
              <div className={styles.premiumRibbon}>
                <span>{text.premiumTag}</span>
              </div>
            ) : null}
            <div className={styles.cardTop}>
              <div className={styles.appIcon} style={{ color: app.color }}>
                {app.icon}
              </div>
              {app.badge === "free" ? (
                <Tag bordered={false} color="blue">
                  {text.freeTag}
                </Tag>
              ) : null}
              {app.badge === "comingSoon" ? (
                <Tag bordered={false} color="gold">
                  {text.comingSoonTag}
                </Tag>
              ) : null}
            </div>
            <h3>{text.appNames[app.id]}</h3>
            <div className={styles.category}>
              {app.category === "ai"
                ? text.categoryAi
                : text.categoryEfficiency}
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
              <div className={styles.appIcon} style={{ color: selected.color }}>
                {selected.icon}
              </div>
              <div>
                <h3>{text.appNames[selected.id]}</h3>
                <div className={styles.detailTags}>
                  <Tag color={selected.color} bordered={false}>
                    {selected.category === "ai"
                      ? text.categoryAi
                      : text.categoryEfficiency}
                  </Tag>
                  <Tag
                    color={
                      selected.badge === "premium"
                        ? "magenta"
                        : selected.badge === "comingSoon"
                          ? "gold"
                          : "blue"
                    }
                    bordered={false}
                  >
                    {selected.badge === "premium"
                      ? text.premiumTag
                      : selected.badge === "comingSoon"
                        ? text.comingSoonTag
                        : text.freeTag}
                  </Tag>
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
