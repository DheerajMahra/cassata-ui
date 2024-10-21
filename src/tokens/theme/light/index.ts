import { ThemeSemantics } from "../types";
import { colors } from "@tokens/primitives";

export const lightTheme: ThemeSemantics = {
  text: {
    subtle: colors.black[400],
    normal: colors.black[700],
    bold: colors.black[900],
    disabled: colors.black[200],
    inverse: colors.black[50]
  }
};
