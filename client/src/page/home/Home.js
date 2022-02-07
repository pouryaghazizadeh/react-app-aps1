import { Box } from "@mui/material";
import Slider from "../../components/slider/Slider";
import dataSlider from "../../constants/slider.json";
const Home = () => {
  return (
    <div>
      <Box sx={{ height: "500px", width: "100%", marginTop: "10px" }}>
        <Slider dataSlider={dataSlider} />
      </Box>
    </div>
  );
};

export default Home;
