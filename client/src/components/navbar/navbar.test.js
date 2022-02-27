import { ThemeProvider } from "@mui/private-theming";
import { BrowserRouter } from "react-router-dom";
// import {darkTheme,lightTheme} from "../../theme/theme";
import { render,screen } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";
test("render navbar", () => {
  render(

      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

  );

  const logo  = screen.getByRole('img')
  expect(logo).toBeInTheDocument();

});

