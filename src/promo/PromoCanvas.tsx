import type { ReactNode } from "react";

import styles from "./promo.module.css";

export default function PromoCanvas({
  children,
  size = "slide",
}: {
  children: ReactNode;
  size?: "slide" | "tile";
}) {
  return (
    <div
      className={size === "tile" ? `${styles.canvas} ${styles.canvasTile}` : styles.canvas}
      data-promo-canvas=""
    >
      {children}
    </div>
  );
}
