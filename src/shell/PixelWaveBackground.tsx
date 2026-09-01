import { useEffect, useRef } from "react";

import type { KnowItThemeName } from "@/theme/theme";

import styles from "./PixelWaveBackground.module.css";

const CELL_SIZE = 12;
const SQUARE_SIZE = 6;
const PERIOD_MS = 13000;
const FRAME_MS = 1000 / 28;
const BAND_WIDTH = 0.26;
const STATIC_TIME = 0.2;
const MAX_DPR = 2;
const CORE_FILL = 0.58;

type PixelWaveBackgroundProps = {
  themeName: KnowItThemeName;
};

function fract(value: number) {
  return value - Math.floor(value);
}

function hash01(col: number, row: number) {
  let n = Math.imul(col, 374761393) + Math.imul(row, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function wrapDist(progress: number) {
  return Math.min(progress, 1 - progress);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function bandAt(col: number, row: number, time: number, span: number) {
  const progress = fract((col + row) / span - time);
  return smoothstep(BAND_WIDTH, 0, wrapDist(progress));
}

function themeColors(themeName: KnowItThemeName) {
  if (themeName === "vscode-light") {
    return {
      fill: "132, 152, 176",
      peakAlpha: 0.1,
      grid: "rgba(15, 23, 42, 0.024)",
    };
  }

  return {
    fill: "188, 200, 216",
    peakAlpha: 0.07,
    grid: "rgba(255, 255, 255, 0.028)",
  };
}

export default function PixelWaveBackground({
  themeName,
}: PixelWaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const colors = themeColors(themeName);
    let raf = 0;
    let lastFrame = 0;
    let running = true;

    canvas.style.setProperty("--pixel-cell", `${CELL_SIZE}px`);
    canvas.style.setProperty("--pixel-grid", colors.grid);

    const syncBackingStore = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const nextWidth = Math.max(1, Math.floor(width * dpr));
      const nextHeight = Math.max(1, Math.floor(height * dpr));

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / CELL_SIZE) + 1;
      const rows = Math.ceil(height / CELL_SIZE) + 1;
      const span = Math.max(1, cols + rows);
      const inset = (CELL_SIZE - SQUARE_SIZE) / 2;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const band = bandAt(col, row, time, span);
          if (band <= 0) continue;
          if (hash01(col, row) > band * CORE_FILL) continue;

          ctx.fillStyle = `rgba(${colors.fill}, ${colors.peakAlpha * band})`;
          ctx.fillRect(
            col * CELL_SIZE + inset,
            row * CELL_SIZE + inset,
            SQUARE_SIZE,
            SQUARE_SIZE,
          );
        }
      }
    };

    const stopLoop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const tick = (now: number) => {
      if (!running || document.hidden || motionQuery.matches) {
        return;
      }

      if (now - lastFrame < FRAME_MS) {
        raf = requestAnimationFrame(tick);
        return;
      }

      lastFrame = now;
      syncBackingStore();
      draw((now / PERIOD_MS) % 1);
      raf = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      stopLoop();
      syncBackingStore();

      if (motionQuery.matches) {
        draw(STATIC_TIME);
        return;
      }

      if (document.hidden) {
        return;
      }

      lastFrame = 0;
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        stopLoop();
        return;
      }

      startLoop();
    };

    startLoop();
    window.addEventListener("resize", startLoop);
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", startLoop);

    return () => {
      running = false;
      stopLoop();
      window.removeEventListener("resize", startLoop);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", startLoop);
    };
  }, [themeName]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      data-pixel-wave=""
      aria-hidden="true"
    />
  );
}
