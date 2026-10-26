import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import DocsPage from "@/docs/DocsPage";
import FaqPage from "@/faq/FaqPage";
import { LocaleProvider } from "@/i18n/context";
import { localeFromPathname, localizePath, stripLocalePrefix } from "@/i18n/routing";
import LandingPage from "@/landing/LandingPage";
import LegalPage from "@/legal/LegalPage";
import PromoCapturePage from "@/promo/PromoCapturePage";
import PromoPreviewPage from "@/promo/PromoPreviewPage";
import PromoTilePage from "@/promo/PromoTilePage";

function LocalizedHomeRedirect() {
  const location = useLocation();
  return (
    <Navigate
      to={localizePath("/", localeFromPathname(location.pathname))}
      replace
    />
  );
}

export default function App() {
  const location = useLocation();
  const locale = localeFromPathname(location.pathname);
  const routedLocation = {
    ...location,
    pathname: stripLocalePrefix(location.pathname),
  };

  return (
    <LocaleProvider locale={locale}>
      <Routes location={routedLocation}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/:docId" element={<DocsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/changelog" element={<LegalPage kind="changelog" />} />
        <Route path="/promo" element={<PromoPreviewPage />} />
        <Route path="/promo/tile" element={<PromoTilePage />} />
        <Route path="/promo/:slideId" element={<PromoCapturePage />} />
        <Route path="*" element={<LocalizedHomeRedirect />} />
      </Routes>
    </LocaleProvider>
  );
}
