import { ThemeProvider } from "@mui/private-theming";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./constants/theme";
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
});
