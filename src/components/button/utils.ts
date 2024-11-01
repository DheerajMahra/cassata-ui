import { StyledProps } from "@tokens/theme";
import { css } from "styled-components";
import type { StyledButtonProps } from "./Button";

export const getButtonStyles = ({
  theme,
  $variant
}: StyledProps<StyledButtonProps>) => {
  if ($variant === "primary") {
    return css`
      color: ${() => theme.color.text.inverse.value};
      background-color: ${() => theme.color.surface.primary.value};
    `;
  }

  if ($variant === "destructive") {
    return css`
      color: ${() => theme.color.text.inverse.value};
      background-color: ${() => theme.color.surface.critical.value};
    `;
  }
};
