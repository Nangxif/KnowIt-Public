import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/** SPA routes that must return HTTP 200 on GitHub Pages (not just 404.html). */
const STATIC_SPA_ROUTES = ["privacy", "terms", "changelog"] as const;

function spaFallback(): Plugin {
  return {
    name: "spa-404-fallback",
    closeBundle() {
      const distDir = resolve(process.cwd(), "dist");
      const index = join(distDir, "index.html");
      if (!existsSync(index)) return;

      copyFileSync(index, join(distDir, "404.html"));

      for (const route of STATIC_SPA_ROUTES) {
        const routeDir = join(distDir, route);
        mkdirSync(routeDir, { recursive: true });
        copyFileSync(index, join(routeDir, "index.html"));
      }
    },
  };
}

export default defineConfig({
  base: "/KnowIt-Public/",
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
