// icon
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

export const sliderStyle = makeStyles((theme) => {
  return {
    containerSlider: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    containerImage: {
      position: "absolute",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.up("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        width: "90%",
      },
    },
    imageSlider: {
      width: "100%",
      height: "100%",
      zIndex: "6",
    },
    iconLeft: {
      position: "absolute",
      top: "50%",
      left: "0",
      color: "#000",
      zIndex: "10",
      cursor: "pointer",
      userSelect: "none",
    },
    iconRight: {
      position: "absolute",
      top: "50%",
      color: "#000",
      zIndex: "10",
      cursor: "pointer",
      userSelect: "none",
      right: "0",
    },
  };
});
const Slider = ({ dataSlider }) => {
  const [current, setCurrent] = useState(0);
  const length = dataSlider.length;
  // call class
  const useStyle = sliderStyle();

  // next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // prev slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(dataSlider);
  // check data dont be empty and be an array
  if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
    return null;
  }
  return (
    <Box component="section" className={useStyle.containerSlider}>
      {/* icon prev */}
      <ArrowBackIosIcon
        className={useStyle.iconLeft}
        onClick={prevSlide}
        fontSize="large"
      />
      {/* map on data */}
      {dataSlider.map((value, index) => {
        return (
          <Box
            component="div"
            key={value.id}
            className={useStyle.containerImage}
          >
            {index === current && (
              <img
                src={value.url}
                alt={value.alt}
                className={useStyle.imageSlider}
              />
            )}
          </Box>
        );
      })}
      {/* icon next */}
      <ArrowForwardIosIcon
        className={useStyle.iconRight}
        onClick={nextSlide}
        fontSize="large"
      />
    </Box>
  );
};

export default Slider;
