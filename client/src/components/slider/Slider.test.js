
import Slider from "./Slider";
import { shallow } from "enzyme";
import dataSlider from "../../constants/slider.json"
import { ThemeProvider } from "@mui/private-theming";

import theme from "../../constants/theme";


test('render slider', () => {
   shallow(
     <ThemeProvider theme={theme}>
       <Slider dataSlider={dataSlider} />
     </ThemeProvider>
   );
});
