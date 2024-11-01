import React from "react";
import styled from "styled-components";
import { getButtonStyles } from "./utils";

// Styled Component
export type StyledButtonProps = {
  children: ButtonProps["children"];
  $variant: ButtonProps["variant"];
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 16px;
  cursor: pointer;
  border: 0;
  outline: 0;
  ${getButtonStyles}
`;

// Component
type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary" | "destructive";
};

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return <StyledButton $variant={variant}>{children}</StyledButton>;
};
