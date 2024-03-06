const colors = {
  black: "#13131A",
  white: "#FFFFFF",

  red: {
    100: " #ff6666",
    200: "#ed1a23",
    300: " #cc0000",
  },

  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#13131a",
  },
};

const font = {
  family: "Roboto",
  sizes: {
    xsm: "1.4rem",
    sm: "1.6rem",
    md: "2.0rem",
    lg: "2.4rem",
    xlg: "3.2rem",
  },
};

const borderRadius = "4px";

const transition = "0.2s";

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.white,
  },
  font,
  borderRadius,
  transition,
};
