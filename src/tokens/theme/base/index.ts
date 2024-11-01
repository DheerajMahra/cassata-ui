import { colors } from "@tokens/primitives";
import { Theme } from "../types";

export const baseTheme: Theme = {
  color: {
    text: {
      primary: {
        value: colors.slate[800],
        hovered: { value: colors.slate[800] },
        pressed: { value: colors.slate[800] },
        focused: { value: colors.slate[800] },
        disabled: { value: colors.slate[800] }
      },
      secondary: {
        value: colors.slate[600],
        hovered: { value: colors.slate[600] },
        pressed: { value: colors.slate[600] },
        focused: { value: colors.slate[600] },
        disabled: { value: colors.slate[600] }
      },
      subdued: {
        value: colors.slate[500],
        hovered: { value: colors.slate[500] },
        pressed: { value: colors.slate[500] },
        focused: { value: colors.slate[500] },
        disabled: { value: colors.slate[500] }
      },
      inverse: {
        value: colors.slate[200],
        hovered: { value: colors.slate[200] },
        pressed: { value: colors.slate[200] },
        focused: { value: colors.slate[200] },
        disabled: { value: colors.slate[200] }
      },
      success: { value: colors.green[600] },
      critical: { value: colors.red[800] },
      warning: { value: colors.orange[800] }
    },
    surface: {
      primary: {
        value: colors.blue[600],
        hovered: { value: colors.slate[800] },
        pressed: { value: colors.slate[800] },
        focused: { value: colors.slate[800] },
        disabled: { value: colors.slate[800] }
      },
      secondary: {
        value: colors.white,
        hovered: { value: colors.slate[800] },
        pressed: { value: colors.slate[800] },
        focused: { value: colors.slate[800] },
        disabled: { value: colors.slate[800] }
      },
      subdued: {
        value: colors.slate[100],
        hovered: { value: colors.slate[800] },
        pressed: { value: colors.slate[800] },
        focused: { value: colors.slate[800] },
        disabled: { value: colors.slate[800] }
      },
      inverse: {
        value: colors.slate[900],
        hovered: { value: colors.slate[800] },
        pressed: { value: colors.slate[800] },
        focused: { value: colors.slate[800] },
        disabled: { value: colors.slate[800] }
      },
      success: { value: colors.green[600] },
      critical: { value: colors.red[600] },
      warning: { value: colors.orange[600] }
    },
    background: {
      primary: { value: colors.white },
      subdued: { value: colors.slate[100] }
    },
    icon: {
      primary: {
        value: colors.slate[800],
        hovered: { value: colors.slate[800] }
      },
      subdued: {
        value: colors.slate[800],
        hovered: { value: colors.slate[800] }
      },
      inverse: {
        value: colors.slate[100],
        hovered: { value: colors.slate[800] }
      }
    },
    border: {
      primary: {
        value: colors.slate[800]
      },
      secondary: {
        value: colors.slate[600]
      },
      subdued: {
        value: colors.slate[500]
      },
      inverse: {
        value: colors.slate[200]
      },
      success: {
        value: colors.green[600]
      },
      critical: {
        value: colors.red[800]
      },
      warning: {
        value: colors.orange[800]
      }
    }
  }
};
