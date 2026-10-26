import { copyFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function spaFallback(): Plugin {
  return {
    name: "spa-404-fallback",
    apply: "build",
    closeBundle() {
      const distDir = resolve(process.cwd(), "dist");
      const index = join(distDir, "index.html");
      if (!existsSync(index)) return;
      copyFileSync(index, join(distDir, "404.html"));
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
