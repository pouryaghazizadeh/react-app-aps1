import { ThemeProvider } from "@mui/private-theming";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ColorModeContext } from "./helper/modeColorContext";
import Home from "./page/home/Home";
import { lightTheme, darkTheme }from "./theme/theme"
const App = () => {
  const [mood, setMood] = useState("light");
  return (
    <div className="App">
      <ColorModeContext.Provider value={{ mood, setMood }}>
        <ThemeProvider theme={mood === "light" ? lightTheme : darkTheme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default App;
