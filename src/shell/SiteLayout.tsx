import type { ReactNode } from "react";

import PixelWaveBackground from "@/shell/PixelWaveBackground";
import SiteFooter from "@/shell/SiteFooter";
import SiteNav from "@/shell/SiteNav";
import { useTheme } from "@/theme/theme";

import styles from "./SiteLayout.module.css";

export default function SiteLayout({
  children,
  showNav = true,
  showFooter = true,
  fullBleed = false,
  showWave = true,
  wavePaused = false,
}: {
  children: ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
  fullBleed?: boolean;
  showWave?: boolean;
  wavePaused?: boolean;
}) {
  const { themeName } = useTheme();

  return (
    <div className={`${styles.page} ${fullBleed ? styles.fullBleed : ""}`}>
      {showWave ? (
        <PixelWaveBackground themeName={themeName} paused={wavePaused} />
      ) : null}
      {showNav ? <SiteNav /> : null}
      <main className={fullBleed ? styles.fullBleedMain : styles.main}>{children}</main>
      {showFooter ? <SiteFooter /> : null}
    </div>
  );
}
