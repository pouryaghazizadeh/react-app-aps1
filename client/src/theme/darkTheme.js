import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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

  typography: {
    button: {
      textTransform: "none",
    },
  },
});
export default darkTheme;
