import { ThemeProvider } from "@mui/private-theming";
import { shallow } from "enzyme";
import theme from "../../constants/theme";
import Home from "./Home";
test("render Home", () => {
  shallow(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
});