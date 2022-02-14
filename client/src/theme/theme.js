import { createTheme } from "@mui/material/styles";
// base theme
const normalTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

// dark mode
const darkTheme = createTheme({
  ...normalTheme,
  palette: {
    mode: "light",
    text: {
      primary: "#ffffff",
      secondary: "#fff",
      icon: "#fff",
    },
    background: {
      default: "#191927",
      paper: "#222230",
    },
  },

});

// light mode
const lightTheme = createTheme({
  ...normalTheme,
  palette: {
    mode: "light",
    text: {
      primary: "#191927",
      secondary: "#222230",
    },
    background: {
      default: "#FFFFF",
      paper: "#fff",
    },
  },
});
export { lightTheme, darkTheme };
