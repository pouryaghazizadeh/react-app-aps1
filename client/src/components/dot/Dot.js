import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

const ContainerDot= styled(Box)(({theme})=>{
  return {
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    zIndex: "10",
    position: "absolute",
    bottom: "0",
  };
})
 
const disable={
      borderRadius:"50px",
      width: "17px",
      height: "17px",
      background: "#fff",
      margin: "5px",
      cursor: "pointer",
      border: "2px solid black",
    }

    const   active = {
      borderRadius: "50px",
      width: "17px",
      height: "17px",
      background: "black",
      margin: "5px",
      border: "2px solid #fff",
      cursor: "pointer",
    }
const Dot = ({ Info }) => {
  const { dataSlider, current } = Info;

 
  return (
    <ContainerDot component="div">
      {dataSlider.map((value, index) => {
        return (
          <Box
            component="div"
            key={index}
          sx={index === current ?active : disable}
          ></Box>
        );
      })}
    </ContainerDot>
  );
};

export default Dot;
