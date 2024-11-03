const spacing = {
  0: "0px",
  2: "2px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  56: "56px",
  64: "64px"
} as const;

type Spacing = typeof spacing;

export { spacing };
export type { Spacing };
