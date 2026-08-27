import "antd/dist/reset.css";
import "@/theme/tokens.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ROUTER_BASENAME } from "@/app/paths";
import { LocaleProvider } from "@/i18n/context";
import { ThemeProvider } from "@/theme/theme";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ThemeProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
