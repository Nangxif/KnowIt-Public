export type KnowItThemeName = "vscode-dark" | "vscode-light";

export function parseThemeParam(value: string | null): KnowItThemeName | null {
  if (value === "light" || value === "vscode-light") return "vscode-light";
  if (value === "dark" || value === "vscode-dark") return "vscode-dark";
  return null;
}

export function themeParamValue(themeName: KnowItThemeName) {
  return themeName === "vscode-light" ? "light" : "dark";
}
