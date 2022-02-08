import { ThemeProvider } from "@mui/private-theming";
import { shallow } from "enzyme";
import theme from "../../constants/theme";
import Cards from "./Card";

test("render cards", () => {
  shallow(
    <ThemeProvider theme={theme}>
      <Cards />
    </ThemeProvider>
  );
});
