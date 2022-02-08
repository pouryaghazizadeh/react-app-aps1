
import Dot from "./Dot"
import { ThemeProvider } from "@mui/private-theming";
import theme from "../../constants/theme";
import dataSliders from "../../constants/slider.json"
import { shallow } from "enzyme";

 const dataSlider = {
   dataSliders,
 };
test("render Dot",()=>{
     shallow(
       <ThemeProvider theme={theme}>
         <Dot Info={dataSlider} />
       </ThemeProvider>
     );
})