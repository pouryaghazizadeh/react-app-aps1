
import SliderData from "../../constants/slider.json";
import  Slider from "../../components/slider/Slider"
import { Box } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Box sx={{height:"500px",width:"70%"}}>

      <Slider dataSlider={SliderData} />
      </Box>
    </div>
  );
};

export default Home;
