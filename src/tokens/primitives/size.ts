const size = {
  0: "0px",
  1: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  56: "56px",
  64: "64px",
  72: "72px",
  80: "80px",
  96: "96px",
  128: "128px",
  160: "160px",
  192: "192px",
  224: "224px",
  256: "256px",
  320: "320px",
  384: "384px",
  512: "512px",
  640: "640px"
} as const;

type Size = typeof size;

export { size };
export type { Size };
