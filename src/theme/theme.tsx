import { ConfigProvider, theme as antdTheme } from "antd";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export const THEME_STORAGE_KEY = "knowItTheme";
export type KnowItThemeName = "vscode-dark" | "vscode-light";

const DEFAULT_THEME: KnowItThemeName = "vscode-dark";

const isThemeName = (value: unknown): value is KnowItThemeName =>
  value === "vscode-dark" || value === "vscode-light";

function applyTheme(themeName: KnowItThemeName) {
  document.documentElement.dataset.knowitTheme = themeName;
  document.documentElement.style.colorScheme =
    themeName === "vscode-dark" ? "dark" : "light";
}

function readStoredTheme(): KnowItThemeName {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeName(stored)) return stored;
  } catch {
    // Ignore blocked storage.
  }
  return DEFAULT_THEME;
}

type ThemeContextValue = {
  themeName: KnowItThemeName;
  setThemeName: (themeName: KnowItThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeName, setThemeNameState] = useState<KnowItThemeName>(DEFAULT_THEME);

  useEffect(() => {
    const next = readStoredTheme();
    setThemeNameState(next);
    applyTheme(next);
  }, []);

  const setThemeName = (next: KnowItThemeName) => {
    setThemeNameState(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Ignore blocked storage.
    }
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      themeName,
      setThemeName,
      toggleTheme: () =>
        setThemeName(themeName === "vscode-dark" ? "vscode-light" : "vscode-dark"),
    }),
    [themeName],
  );

  const dark = themeName === "vscode-dark";

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: dark ? "#0078d4" : "#0067c0",
            colorInfo: dark ? "#3794ff" : "#0067c0",
            colorSuccess: dark ? "#89d185" : "#107c10",
            colorWarning: dark ? "#cca700" : "#8a6d00",
            colorError: dark ? "#f48771" : "#d13438",
            colorBgBase: dark ? "#1e1e1e" : "#ffffff",
            colorBgContainer: dark ? "#252526" : "#ffffff",
            colorBgElevated: dark ? "#252526" : "#ffffff",
            colorBorder: dark ? "#3c3c3c" : "#d4d4d4",
            colorText: dark ? "#cccccc" : "#3b3b3b",
            colorTextSecondary: dark ? "#969696" : "#616161",
            borderRadius: 2,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
            fontSize: 13,
            controlHeight: 30,
            boxShadow: dark
              ? "0 2px 8px rgba(0, 0, 0, 0.36)"
              : "0 2px 8px rgba(0, 0, 0, 0.14)",
          },
          components: {
            Button: {
              primaryShadow: "none",
              defaultShadow: "none",
              dangerShadow: "none",
            },
            Modal: {
              contentBg: dark ? "#252526" : "#ffffff",
              headerBg: dark ? "#252526" : "#ffffff",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
