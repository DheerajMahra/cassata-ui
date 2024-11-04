import {
  color,
  border,
  breakpoint,
  opacity,
  spacing,
  size
} from "@tokens/primitives";
import { Theme } from "../types";

export const baseTheme: Theme = {
  color: {
    text: {
      primary: {
        value: color.slate[800],
        hovered: { value: color.slate[800] },
        pressed: { value: color.slate[800] },
        focused: { value: color.slate[800] },
        disabled: { value: color.slate[800] }
      },
      secondary: {
        value: color.slate[600],
        hovered: { value: color.slate[600] },
        pressed: { value: color.slate[600] },
        focused: { value: color.slate[600] },
        disabled: { value: color.slate[600] }
      },
      subdued: {
        value: color.slate[500],
        hovered: { value: color.slate[500] },
        pressed: { value: color.slate[500] },
        focused: { value: color.slate[500] },
        disabled: { value: color.slate[500] }
      },
      inverse: {
        value: color.slate[200],
        hovered: { value: color.slate[200] },
        pressed: { value: color.slate[200] },
        focused: { value: color.slate[200] },
        disabled: { value: color.slate[200] }
      },
      success: { value: color.green[600] },
      critical: { value: color.red[800] },
      warning: { value: color.orange[800] }
    },
    surface: {
      primary: {
        value: color.blue[600],
        hovered: { value: color.slate[800] },
        pressed: { value: color.slate[800] },
        focused: { value: color.slate[800] },
        disabled: { value: color.slate[800] }
      },
      secondary: {
        value: color.white,
        hovered: { value: color.slate[800] },
        pressed: { value: color.slate[800] },
        focused: { value: color.slate[800] },
        disabled: { value: color.slate[800] }
      },
      subdued: {
        value: color.slate[100],
        hovered: { value: color.slate[800] },
        pressed: { value: color.slate[800] },
        focused: { value: color.slate[800] },
        disabled: { value: color.slate[800] }
      },
      inverse: {
        value: color.slate[900],
        hovered: { value: color.slate[800] },
        pressed: { value: color.slate[800] },
        focused: { value: color.slate[800] },
        disabled: { value: color.slate[800] }
      },
      success: { value: color.green[600] },
      critical: { value: color.red[600] },
      warning: { value: color.orange[600] }
    },
    background: {
      primary: { value: color.white },
      subdued: { value: color.slate[100] }
    },
    icon: {
      primary: {
        value: color.slate[800],
        hovered: { value: color.slate[800] }
      },
      subdued: {
        value: color.slate[800],
        hovered: { value: color.slate[800] }
      },
      inverse: {
        value: color.slate[100],
        hovered: { value: color.slate[800] }
      }
    },
    border: {
      primary: {
        value: color.slate[800]
      },
      secondary: {
        value: color.slate[600]
      },
      subdued: {
        value: color.slate[500]
      },
      inverse: {
        value: color.slate[200]
      },
      success: {
        value: color.green[600]
      },
      critical: {
        value: color.red[800]
      },
      warning: {
        value: color.orange[800]
      }
    }
  },
  border: {
    width: {
      none: border.width[0],
      thin: border.width[1],
      medium: border.width[2],
      thick: border.width[4]
    },
    radius: {
      none: border.radius[0],
      small: border.radius[2],
      medium: border.radius[4],
      large: border.radius[8],
      rounded: border.radius.rounded
    },
    style: {
      solid: border.style.solid,
      dashed: border.style.dashed,
      dotted: border.style.dotted
    }
  },
  opacity: {
    none: opacity[0],
    disabled: opacity[4],
    loading: opacity[6],
    hover: opacity[9]
  },
  // TODO: Create semantic size and spacing tokens like margin.sm, padding.lg etc.
  size,
  spacing,
  screen: breakpoint
};
