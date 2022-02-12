import { createTheme } from "@mui/material/styles";


const lightTheme = createTheme({
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
      primary: "#191927",
      secondary: "#222230",
    },
    background: {
      default: "#FFFFF",
      paper: "#fff",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
  },
});
export default lightTheme;
