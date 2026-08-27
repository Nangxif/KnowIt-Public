import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function spaFallback(): Plugin {
  return {
    name: "spa-404-fallback",
    closeBundle() {
      const index = resolve(process.cwd(), "dist/index.html");
      const fallback = resolve(process.cwd(), "dist/404.html");
      if (existsSync(index)) {
        copyFileSync(index, fallback);
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
