import "antd/dist/reset.css";
import "@/theme/tokens.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LocaleProvider } from "@/i18n/context";
import { ThemeProvider } from "@/theme/theme";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>,
);
