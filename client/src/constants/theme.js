import { createTheme } from "@mui/material/styles";
const theme = createTheme({
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
    primary: {
      main: "#0047AB",
    },
  },
  typography:{
    button:{
      textTransform: "none",
    },
  },
});
export default theme;
