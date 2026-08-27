import { useEffect, useState } from "react";

import type { LegalTab } from "@/app/paths";
import SiteLayout from "@/shell/SiteLayout";

import LegalDocumentView from "./LegalDocumentView";
import styles from "./legal.module.css";

export default function LegalPage({ kind }: { kind: LegalTab }) {
  const [framed] = useState(() => window.self !== window.top);

  useEffect(() => {
    if (!framed) return;
    document.documentElement.dataset.knowitFramed = "1";
    return () => {
      delete document.documentElement.dataset.knowitFramed;
    };
  }, [framed]);

  const documentView = <LegalDocumentView kind={kind} />;

  if (framed) {
    return <div className={styles.framedPage}>{documentView}</div>;
  }

  return (
    <SiteLayout showNav={false} showFooter={false}>
      <div className={styles.standalone}>
        <div className={styles.panel}>{documentView}</div>
      </div>
    </SiteLayout>
  );
}
