import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { PageMeta } from "@/seo/head";
import { faqJsonLd } from "@/seo/structuredData";
import SiteLayout from "@/shell/SiteLayout";

import styles from "./faq.module.css";

export default function FaqPage() {
  const { text } = useTranslation();
  const subtitle = text.faqSubtitle.replace("{version}", siteConfig.version);

  return (
    <SiteLayout>
      <PageMeta
        title={text.seoFaqTitle}
        description={text.seoFaqDescription}
        pathname="/faq"
        jsonLd={faqJsonLd(text)}
      />
      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{text.faqTitle}</h1>
          <p>{subtitle}</p>
          <p>{text.entityDefinition}</p>
        </header>
        {text.faqItems.map((item) => (
          <section key={item.question} className={styles.item}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </section>
        ))}
      </article>
    </SiteLayout>
  );
}
