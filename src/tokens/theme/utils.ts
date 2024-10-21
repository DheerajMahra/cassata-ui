import { Theme } from "./types";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

type Themes = Record<Theme, {}>;

const themes: Themes = {
  light: lightTheme,
  dark: darkTheme
};

export const getThemeSemanticTokens = (theme: Theme) => themes[theme];
