import { createTheme } from "@material-ui/core/styles";

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
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
    xs: 0,
    mb: 350,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Check here for more configurations https://material-ui.com/customization/default-theme/
const theme = createTheme({
  palette: {
    primary: themeConstants.primary,
    secondary: themeConstants.secondary,
    background: { paper: themeConstants.paper },
    text: {
      primary: themeConstants.fg.main,
      secondary: themeConstants.fg.dark,
    },
    error: themeConstants.error,
  },
  breakpoints: {
    values: themeConstants.breakpoints,
  },
});

export { theme };
