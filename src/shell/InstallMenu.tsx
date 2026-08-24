import { DownOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import type { ButtonProps, MenuProps } from "antd";
import type { ReactNode } from "react";

import { getInstallTargets } from "@/config/site";
import { useTranslation } from "@/i18n/context";

import styles from "./InstallMenu.module.css";

type InstallMenuProps = {
  label: string;
  type?: ButtonProps["type"];
  size?: ButtonProps["size"];
  className?: string;
  icon?: ReactNode;
  showCaret?: boolean;
};

function ChromeGlyph() {
  return (
    <svg
      className={styles.brandIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="currentColor" />
      <path
        d="M12 2a10 10 0 0 1 8.66 5H12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.66 7A10 10 0 0 1 12 22l4.33-7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.67 14.5 3.34 7A10 10 0 0 1 12 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EdgeGlyph() {
  return (
    <svg
      className={styles.brandIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3c-4.4 0-8 3.1-8 7.6 0 2.6 1.5 4.7 3.8 5.8C6.5 13.2 9 11 12.8 11c.7 0 1.4.1 2 .3-1.3-1.5-3.2-2.4-5.3-2.4-3.3 0-5.7 2.2-5.7 4.8 0 .2 0 .4.1.6C2.7 13 2 11.5 2 9.8 2 5.7 6.1 2.5 11.2 2.5c4.3 0 7.8 2.4 8.8 5.7-1.1-2.2-3.6-3.7-6.5-3.7-1.2 0-2.3.3-3.3.7 2.9-.2 5.7 1.4 6.9 4.1.4.9.6 1.9.6 2.9 0 4.2-3.1 7.3-7.7 7.3-3.2 0-5.9-1.6-7-4 .9 2.9 3.9 5 7.4 5 4.9 0 8.8-3.5 8.8-8.3 0-1.2-.2-2.3-.7-3.3C19.5 5.4 16.1 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function InstallMenu({
  label,
  type = "primary",
  size,
  className,
  icon,
  showCaret = true,
}: InstallMenuProps) {
  const { text } = useTranslation();
  const targets = getInstallTargets();

  const labelById = {
    chrome: text.installChrome,
    edge: text.installEdge,
    github: text.installGithub,
  } as const;

  const iconById = {
    chrome: <ChromeGlyph />,
    edge: <EdgeGlyph />,
    github: <GithubOutlined className={styles.brandIcon} />,
  } as const;

  const menuItems: MenuProps["items"] = targets.map((target) => {
    const enabled = Boolean(target.url);
    return {
      key: target.id,
      disabled: !enabled,
      label: enabled ? (
        <a
          href={target.url}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.menuLink}
        >
          {iconById[target.id]}
          <span>{labelById[target.id]}</span>
        </a>
      ) : (
        <span className={styles.menuLink}>
          {iconById[target.id]}
          <span>{labelById[target.id]}</span>
        </span>
      ),
    };
  });

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["click"]}
      placement="bottom"
    >
      <Button type={type} size={size} className={className} icon={icon}>
        {label}
        {showCaret ? <DownOutlined className={styles.caret} /> : null}
      </Button>
    </Dropdown>
  );
}
