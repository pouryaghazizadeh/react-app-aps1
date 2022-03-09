import { createTheme } from "@mui/material/styles";
// base theme
const normalTheme = createTheme({
  // components: {
  //   MyThemeComponent: {
  //     styleOverrides: {
  //       root: {
  //         color:"green",
  //       },
  //       primary: {
 
  //       },
  //       secondary: {
  //         color: "red",
  //         backgroundColor: "pink",
  //       },
  //     },
  //     variants: [
  //       {
  //         props: { variant: "dashed", color: "primary" },
  //         style: {
  //           border: "1px dashed darkblue",
  //         },
  //       },
  //       {
  //         props: { variant: "dashed", color: "secondary" },
  //         style: {
  //           border: "1px dashed darkred",
  //         },
  //       },
  //     ],
  //   },
  // },
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
