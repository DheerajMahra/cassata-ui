type ColorScale = Readonly<{
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

type Colors = Readonly<{
  white: string;
  black: string;
  grey: ColorScale;
  slate: ColorScale;
  blue: ColorScale;
  red: ColorScale;
  orange: ColorScale;
  green: ColorScale;
}>;

const colors: Colors = {
  white: "#FFFFFF",
  black: "#000000",
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EFEFEF",
    300: "#DDDDDD",
    400: "#9A9A9A",
    500: "#777777",
    600: "#666666",
    700: "#333333",
    800: "#262626",
    900: "#171717"
  },
  slate: {
    50: "#F9F9FA",
    100: "#F5F5F7",
    200: "#EFEFF2",
    300: "#DCDDE2",
    400: "#989CA3",
    500: "#74777D",
    600: "#62676E",
    700: "#303236",
    800: "#242629",
    900: "#151619"
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

export { colors };
