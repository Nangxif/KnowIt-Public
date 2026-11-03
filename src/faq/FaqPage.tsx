import { useTranslation } from "@/i18n/context";
import { PageMeta } from "@/seo/head";
import { faqJsonLd } from "@/seo/structuredData";
import SiteLayout from "@/shell/SiteLayout";

import styles from "./faq.module.css";

export default function FaqPage() {
  const { locale, text } = useTranslation();

  return (
    <SiteLayout>
      <PageMeta
        title={text.seoFaqTitle}
        description={text.seoFaqDescription}
        keywords={text.seoFaqKeywords}
        pathname="/faq"
        jsonLd={faqJsonLd(text, locale)}
      />
      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{text.faqTitle}</h1>
        </header>
        <div className={styles.list}>
          {text.faqItems.map((item, index) => (
            <section key={item.question} className={styles.item}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </section>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}
