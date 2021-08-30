// THIS OBJECT SHOULD BE SIMILAR TO ./helpers/theme.js
const themeConstants = {
  paper: "#F9F9F9",
  primary: {
    main: "#fff",
    dark: "#e5e5e5",
  },
  secondary: {
    main: "#212121",
    dark: "#3A3A3A",
  },
  error: {
    main: "#b22222",
    dark: "#8b0000",
  },
  fg: { main: "#fff", dark: "rgba(55, 65, 81, 1)" },
  breakpoints: {
    xs: "0px",
    mb: "350px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        paper: themeConstants.paper,
        primary: themeConstants.primary,
        secondary: themeConstants.secondary,
        error: themeConstants.error,
        fg: themeConstants.fg.main,
        "fg-dark": themeConstants.fg.dark,
      },
    },
    screens: themeConstants.breakpoints,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
