import { ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext } from "./helper/modeColorContext";
import { darkTheme, lightTheme } from "./theme/theme";

const Home = lazy(() => import("./page/home/Home"));
const About = lazy(() => import("./page/about/About"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));

const App = () => {
  const [mood, setMood] = useState("light");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ColorModeContext.Provider value={{ mood, setMood }}>
        <ThemeProvider theme={mood === "light" ? lightTheme : darkTheme}>
          {/* <Navbar Info={{ headerData }} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
          {/* <Footer /> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};

export default App;
