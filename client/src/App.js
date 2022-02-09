import { ThemeProvider } from "@mui/private-theming";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import theme from "./constants/theme";
import Home from "./page/home/Home";
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
