import { CheckOutlined, GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Tooltip } from "antd";
import type { MenuProps } from "antd";

import { LOCALE_DISPLAY_NAMES } from "@/i18n/types";
import { LOCALES, useTranslation } from "@/i18n/context";

import styles from "./LocaleSwitcher.module.css";

type LocaleSwitcherProps = {
  buttonClassName?: string;
};

export default function LocaleSwitcher({ buttonClassName }: LocaleSwitcherProps) {
  const { locale, changeLanguage, text } = useTranslation();

  const menuItems: MenuProps["items"] = LOCALES.map((loc) => ({
    key: loc,
    label: (
      <span className={styles.menuItem}>
        <span>{LOCALE_DISPLAY_NAMES[loc]}</span>
        {locale === loc ? <CheckOutlined className={styles.menuCheck} /> : null}
      </span>
    ),
  }));

  return (
    <Dropdown
      menu={{
        items: menuItems,
        selectedKeys: [locale],
        onClick: ({ key }) => {
          if (key !== locale) {
            changeLanguage(key as typeof locale);
          }
        },
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Tooltip title={text.languageMenuTitle}>
        <span className={styles.trigger}>
          <Button type="text" className={buttonClassName} icon={<GlobalOutlined />}>
            {text.localeLabel}
          </Button>
        </span>
      </Tooltip>
    </Dropdown>
  );
}
