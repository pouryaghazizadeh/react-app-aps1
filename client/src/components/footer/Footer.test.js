import { ThemeProvider } from "@mui/private-theming";
import { shallow } from "enzyme";
import theme from "../../constants/theme";
import Footer from "./Footer";

test("render Footer",()=>{
    shallow(
        <ThemeProvider theme={theme}>
            < Footer/>

        </ThemeProvider>
    )

})
