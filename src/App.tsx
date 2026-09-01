import { Navigate, Route, Routes } from "react-router-dom";

import DocsPage, { DocsIndexRedirect } from "@/docs/DocsPage";
import LandingPage from "@/landing/LandingPage";
import LegalPage from "@/legal/LegalPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/docs" element={<DocsIndexRedirect />} />
      <Route path="/docs/:docId" element={<DocsPage />} />
      <Route path="/privacy" element={<LegalPage kind="privacy" />} />
      <Route path="/terms" element={<LegalPage kind="terms" />} />
      <Route path="/changelog" element={<LegalPage kind="changelog" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
