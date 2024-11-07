import type {
  BorderStyle,
  Breakpoint,
  Spacing,
  Size
} from "@tokens/primitives";
import type { ExecutionContext } from "styled-components";

type StyledProps<T = {}> = ExecutionContext & T;

type Emphasis = {
  primary: string;
  secondary: string;
  subdued: string;
  inverse: string;
};

/**
 * Emphasis can have different states. For eg: {xx.primary.hovered.value}
 */
type State = {
  hovered: string;
  pressed: string;
  focused: string;
  disabled: string;
};

/**
 * Status will not have states. It will be a standalone contextual value.
 * For eg: {xx.primary.critical}
 */
type Status = {
  critical: string;
  warning: string;
  success: string;
};

type StatusKeys = keyof Status;
type EmphasisKeys = keyof Emphasis;
type StateKeys = keyof State;

type TokenValue = { value: string };
type StateTokenValue = Record<StateKeys, TokenValue>;
type StatusTokenValue = Record<StatusKeys, TokenValue>;
type EmphasisTokenValue = Record<EmphasisKeys, TokenValue & StateTokenValue>;
type EmphasisTokenValueWithoutState = Record<EmphasisKeys, TokenValue>;

type BackgroundEmphasis = keyof Pick<Emphasis, "primary" | "subdued">;
type IconEmphasis = keyof Pick<Emphasis, "primary" | "subdued" | "inverse">;

type HoveredState = keyof Pick<State, "hovered">;

type Theme = {
  color: {
    text: EmphasisTokenValue & StatusTokenValue;
    surface: EmphasisTokenValue & StatusTokenValue;
    background: Record<BackgroundEmphasis, TokenValue>;
    icon: Record<IconEmphasis, TokenValue & Record<HoveredState, TokenValue>>;
    border: EmphasisTokenValueWithoutState & StatusTokenValue;
  };
  border: {
    width: {
      none: string;
      thin: string;
      medium: string;
      thick: string;
    };
    radius: {
      none: string;
      small: string;
      medium: string;
      large: string;
      rounded: string;
    };
    style: BorderStyle;
  };
  opacity: {
    none: number;
    hover: number;
    loading: number;
    disabled: number;
  };
  spacing: Spacing;
  breakpoint: Breakpoint;
  size: Size;
};

type ThemeName = "base";

type Themes = Record<ThemeName, Theme>;

export type { StyledProps, Theme, ThemeName, Themes };
