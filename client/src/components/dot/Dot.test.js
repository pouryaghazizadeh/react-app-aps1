import { render } from "@testing-library/react";
import { makeStyles } from "@mui/styles";
import Dot from "./Dot"
import { ThemeProvider } from "@mui/private-theming";
import theme from "../../constants/theme";
import dataSliders from "../../constants/slider.json"


 const dataSlider = {
   dataSliders,
 };
test("render Dot",()=>{
    render(
      <ThemeProvider theme={theme}>
        <Dot Info={dataSlider} />
      </ThemeProvider>
    );
})