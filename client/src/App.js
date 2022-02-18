import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ColorModeContext } from "./helper/modeColorContext";
import About from "./page/about/About";
import Home from "./page/home/Home";
import { darkTheme, lightTheme } from "./theme/theme";
const App = () => {
  const [mood, setMood] = useState("light");

  return (
    <div className="App">
      <ColorModeContext.Provider value={{ mood, setMood }}>
        <ThemeProvider theme={mood === "light" ? lightTheme : darkTheme}>
          <Navbar  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About/>}/>
          </Routes>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default App;
