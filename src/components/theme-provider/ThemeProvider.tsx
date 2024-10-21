import React, { createContext, useContext, useMemo } from "react";
import { getThemeSemanticTokens } from "@tokens/theme";
import type { Theme } from "@tokens/theme";

export type Props = {
  children: React.ReactNode;
  theme?: Theme;
};

const ThemeContext = createContext({});

export const ThemeProvider = ({
  children,
  theme: themeName = "light"
}: Props) => {
  const theme = getThemeSemanticTokens(themeName);
  const value = useMemo(() => ({ theme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
