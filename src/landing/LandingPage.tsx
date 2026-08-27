import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AppCatalog from "@/landing/AppCatalog";
import Hero from "@/landing/Hero";
import Highlights from "@/landing/Highlights";
import Pricing from "@/landing/Pricing";
import Showcase from "@/landing/Showcase";
import SiteLayout from "@/shell/SiteLayout";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = decodeURIComponent(location.hash.slice(1));
    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView();
    };

    scrollToSection();
    const frame = window.requestAnimationFrame(scrollToSection);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <SiteLayout>
      <Hero />
      <Highlights />
      <Showcase />
      <AppCatalog />
      <Pricing />
    </SiteLayout>
  );
}
