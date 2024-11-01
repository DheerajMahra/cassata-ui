import React, { useMemo } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  useTheme
} from "styled-components";
import { getThemeSemanticTokens } from "@tokens/theme";
import type { ThemeName } from "@tokens/theme";

type Props = {
  children: React.ReactNode;
  theme?: ThemeName;
};

const ThemeProvider = ({ children, theme: themeName = "base" }: Props) => {
  const theme = useMemo(() => getThemeSemanticTokens(themeName), []);

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider, useTheme };
