type BorderWidth = Readonly<{
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
}>;

type BorderRadius = Readonly<{
  0: string;
  2: string;
  4: string;
  6: string;
  8: string;
  10: string;
  12: string;
  rounded: string;
}>;

type BorderStyle = Readonly<{
  solid: string;
  dashed: string;
  dotted: string;
}>;

type Border = Readonly<{
  width: BorderWidth;
  radius: BorderRadius;
  style: BorderStyle;
}>;

const border: Border = {
  width: {
    0: "0px",
    1: "1px",
    2: "2px",
    3: "3px",
    4: "4px",
    5: "5px",
    6: "6px",
    8: "8px",
    10: "10px",
    12: "12px"
  },
  radius: {
    0: "0",
    2: "2px",
    4: "4px",
    6: "6px",
    8: "8px",
    10: "10px",
    12: "12px",
    rounded: "50%"
  },
  style: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted"
  }
};

export { border };
export type { BorderStyle };
