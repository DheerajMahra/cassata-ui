import { baseTheme } from "./base";
import { ThemeName, Themes } from "./types";

const themes: Themes = {
  base: baseTheme
};

export const getThemeSemanticTokens = (themeName: ThemeName) =>
  themes[themeName];
