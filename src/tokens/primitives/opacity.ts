const opacity = {
  0: 0,
  1: 0.1,
  2: 0.2,
  3: 0.3,
  4: 0.4,
  5: 0.5,
  6: 0.6,
  7: 0.7,
  8: 0.8,
  9: 0.9,
  10: 1
} as const;

type Opacity = typeof opacity;

export { opacity };
export type { Opacity };
