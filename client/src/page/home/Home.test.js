import { ThemeProvider } from "@mui/private-theming";
import  {render ,screen}from "@testing-library/react"
import theme from "../../theme/lightTheme";
import Home from "./Home";
test("render Home", () => {
 render.screen(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
});
