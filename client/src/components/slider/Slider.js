// icon
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Dot from "../dot/Dot";

export const sliderStyle = makeStyles((theme) => {
  return {
    containerSlider: {
      position: "relative",
      display: "flex",
      justifyContent: "center",

      width: "100%",
      height: "100%",
    },
    containerImage: {
      position: "absolute",
      height: "95%",
      display: "flex",

      justifyContent: "center",
      [theme.breakpoints.up("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        width: "100%",
      },
    },
    imageSlider: {
      width: "100%",
      height: "100%",
      zIndex: "6",
    },
    containerArrowLeft: {
      width: "45px",
      height: "45px",
      background: "#fff",
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      zIndex: "10",
      top: "50%",
      cursor: "pointer",
      paddingLeft: "4px",
      [theme.breakpoints.up("xs")]: {
        left: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        left: "20px",
      },
    },
    iconLeft: {
      color: "#000",
      userSelect: "none",
    },
    containerArrowRight: {
      width: "45px",
      height: "45px",
      background: "#fff",
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "10",
      position: "absolute",
      top: "50%",

      cursor: "pointer",
      paddingRight: "3px",
      [theme.breakpoints.up("xs")]: {
        right: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        right: "20px",
      },
    },
    iconRight: {
      color: "#000",
      userSelect: "none",
    },
    firstText: {
      zIndex: "11",
      color: theme.palette.text.primary,
      position: "absolute",
      bottom: "5%",

      textAlign: "center",
      fontWeight: "bold",
      [theme.breakpoints.up("xs")]: {
        width: "350px",
        fontSize: "1.5rem",
        
        padding: "4px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
        width: "400px",
        padding: "4px",
      },
      [theme.breakpoints.up("md")]: {
        width: "500px",
      },
    },
    secondText: {
      zIndex: "11",
      color: theme.palette.text.primary,
      position: "absolute",

      fontWeight: "900",

      textAlign: "center",

      [theme.breakpoints.up("xs")]: {
        fontSize: "2.7rem",
        width: "200px",
        top: "40%",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
        width: "400px",
        top: "47%",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3.5rem",
        width: "450px",

        top: "40%",
      },
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

  // check data dont be empty and be an array
  if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
    return null;
  }
  return (
    <Box component="section" className={useStyle.containerSlider}>
      {/* icon prev */}
      <Box className={useStyle.containerArrowLeft}>
        <ArrowBackIosIcon
          className={useStyle.iconLeft}
          onClick={prevSlide}
          fontSize="large"
        />
      </Box>
      {/* map on data */}
      {dataSlider.map((value, index) => {
        return (
          <Box
            component="div"
            key={value.id}
            className={useStyle.containerImage}
          >
            {index === current && (
              <>
                <img
                  src={value.url}
                  alt={value.alt}
                  className={useStyle.imageSlider}
                />
                {/* first text */}
                {value.firstText && (
                  <Typography
                    component="p"
                    variant="p"
                    className={useStyle.firstText}
                  >
                    {value.firstText}
                  </Typography>
                )}
                {/* second text */}
                {value.secondText && (
                  <Typography
                    component="p"
                    variant="p"
                    className={useStyle.secondText}
                  >
                    {value.secondText}
                  </Typography>
                )}
              </>
            )}
          </Box>
        );
      })}
      <Dot Info={{ dataSlider, current }} />
      {/* icon next */}
      <Box className={useStyle.containerArrowRight}>
        <ArrowForwardIosIcon
          className={useStyle.iconRight}
          onClick={nextSlide}
          fontSize="large"
        />
      </Box>
    </Box>
  );
};

export default Slider;
