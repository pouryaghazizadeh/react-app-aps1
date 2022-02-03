import { ThemeProvider } from "@mui/private-theming";
import { BrowserRouter } from "react-router-dom";
import theme from "../../constants/theme";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
test("render navbar", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
});
