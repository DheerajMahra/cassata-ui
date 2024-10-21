export type ColorScale = Readonly<{
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}>;

export type Colors = Readonly<{
  white: ColorScale;
  black: ColorScale;
  blue: ColorScale;
  red: ColorScale;
  orange: ColorScale;
  green: ColorScale;
}>;

export const colors: Colors = {
  white: {
    50: "#D0D0D0",
    100: "#E0E0E0",
    200: "#F0F0F0",
    300: "#FFFFFF",
    400: "#FFFFFF",
    500: "#FFFFFF",
    600: "#FFFFFF",
    700: "#FFFFFF",
    800: "#FFFFFF",
    900: "#FFFFFF"
  },
  black: {
    50: "#E5E5E5",
    100: "#CCCCCC",
    200: "#B3B3B3",
    300: "#999999",
    400: "#808080",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#000000"
  },
  blue: {
    50: "#F7F8FD",
    100: "#EEF2FB",
    200: "#E5EBFA",
    300: "#CEDAFA",
    400: "#7F97F1",
    500: "#5C6CF2",
    600: "#5546FF",
    700: "#2323C7",
    800: "#0F0FA9",
    900: "#0B0A63"
  },
  red: {
    50: "#FDF2F2",
    100: "#FCEEED",
    200: "#FAD4D1",
    300: "#F7CDCA",
    400: "#F49B97",
    500: "#E76C6A",
    600: "#C83532",
    700: "#A0272B",
    800: "#7A1F1F",
    900: "#531414"
  },
  orange: {
    50: "#FFF9F1",
    100: "#FFF5EB",
    200: "#FFEDD3",
    300: "#FFE0C2",
    400: "#FFCF9D",
    500: "#FFBD7A",
    600: "#F59300",
    700: "#CC7500",
    800: "#A75D00",
    900: "#804700"
  },
  green: {
    50: "#F6FBF5",
    100: "#F2F9F1",
    200: "#E2F2E2",
    300: "#D9EDD4",
    400: "#BFE5B8",
    500: "#23A978",
    600: "#008051",
    700: "#00663D",
    800: "#004E2D",
    900: "#00391F"
  }
};
