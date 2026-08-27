import type { ReactNode } from "react";

import PixelWaveBackground from "@/shell/PixelWaveBackground";
import SiteFooter from "@/shell/SiteFooter";
import SiteNav from "@/shell/SiteNav";
import { useTheme } from "@/theme/theme";

import styles from "./SiteLayout.module.css";

export default function SiteLayout({
  children,
  showNav = true,
}: {
  children: ReactNode;
  showNav?: boolean;
}) {
  const { themeName } = useTheme();

  return (
    <div className={styles.page}>
      <PixelWaveBackground themeName={themeName} />
      {showNav ? <SiteNav /> : null}
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}
