import "antd/dist/reset.css";
import "@/theme/tokens.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ROUTER_BASENAME } from "@/app/paths";
import { ThemeProvider } from "@/theme/theme";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
