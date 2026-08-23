import AppCatalog from "@/landing/AppCatalog";
import Hero from "@/landing/Hero";
import Highlights from "@/landing/Highlights";
import Pricing from "@/landing/Pricing";
import PixelWaveBackground from "@/shell/PixelWaveBackground";
import SiteFooter from "@/shell/SiteFooter";
import SiteNav from "@/shell/SiteNav";
import { useTheme } from "@/theme/theme";

import styles from "./App.module.css";

export default function App() {
  const { themeName } = useTheme();

  return (
    <div className={styles.page}>
      <PixelWaveBackground themeName={themeName} />
      <SiteNav />
      <main className={styles.main}>
        <Hero />
        <Highlights />
        <AppCatalog />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  );
}
