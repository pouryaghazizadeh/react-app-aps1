// icon
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Dot from "../dot/Dot";

import { styled } from "@mui/material/styles";

const ContainerSlider = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };
});
const ContainerImg = styled(Box)(({ theme }) => {
  return {
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
  };
});

const ImgSlider = styled("img")(({ theme }) => {
  return {
    width: "100%",
    height: "100%",
    zIndex: "6",
  };
});
const ContainerArrowLeft = styled(Box)(({ theme }) => {
  return {
    width: "40px",
    height: "40px",
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
  };
});

const IconLeft = styled(ArrowBackIosIcon)(({ theme }) => {
  return {
    color: "#000",
    userSelect: "none",
  };
});

const ContainerArrowRight = styled(Box)(({ theme }) => {
  return {
    width: "40px",
    height: "40px",
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
  };
});

const IconRight = styled(ArrowForwardIosIcon)(({ theme }) => {
  return {
    color: "#000",
    userSelect: "none",
  };
});


const FirstText = styled(Typography)(({theme})=>{
  return {
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
  };
})

const SecondText = styled(Typography)(({theme})=>{
  return {
    zIndex: "11",
    color: theme.palette.text.primary,
    position: "absolute",
    fontWeight: "900",
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      fontSize: "2.7rem",
      width: "200px",
      top: "35%",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
      width: "400px",
      top: "43%",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
      width: "450px",
      top: "40%",
    },
  };
})
export const sliderStyle = makeStyles((theme) => {
  return {

    secondText: {
     
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
    <ContainerSlider component="section">
      {/* icon prev */}
      <ContainerArrowLeft>
        <IconLeft onClick={prevSlide} fontSize="large" />
      </ContainerArrowLeft>
      {/* map on data */}
      {dataSlider.map((value, index) => {
        return (
          <ContainerImg component="div" key={value.id}>
            {index === current && (
              <>
                <ImgSlider src={value.url} alt={value.alt} />
                {/* first text */}
                {value.firstText && (
                  <FirstText
                    component="p"
                    variant="p"
                  
                  >
                    {value.firstText}
                  </FirstText>
                )}
                {/* second text */}
                {value.secondText && (
                  <SecondText
                    component="p"
                    variant="p"
                  
                  >
                    {value.secondText}
                  </SecondText>
                )}
              </>
            )}
          </ContainerImg>
        );
      })}
      <Dot Info={{ dataSlider, current }} />
      {/* icon next */}
      <ContainerArrowRight>
        <IconRight
          
          onClick={nextSlide}
          fontSize="large"
        />
      </ContainerArrowRight>
    </ContainerSlider>
  );
};

export default Slider;
