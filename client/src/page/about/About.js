import { Box ,TextField} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Map from "../../components/map/Map";
import dataAbout from "../../constants/about.json";
import { FilterContentGreaterThanNumber } from "../../helper/aboutHelper";
const ContainerMainText = styled(Box)(() => {
  return {
    display: "flex",

    flexDirection:"column",
    alignItems:"center"
  };
});
const ContainerTextSecond = styled(Box)(({ theme }) => {
  return {

  };
});
const B = styled(Box)(({ theme }) => {
  return {
    background: "green",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    "&:nth-child(2n+1)": {
      // flex-direction:row-reverse
      flexDirection: "row-reverse",
      backgroundColor: "blue",
    },
  };
});


function About() {


  return (
    <div>
      <ContainerMainText>
        <TextField
          type="date"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        
        
  
        
      
        
        
        
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        {/* <Typography>{dataAbout.missionStatement}</Typography> */}
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <p>gfdgfdfReact-map-gl</p>
        <ContainerTextSecond></ContainerTextSecond>
      </ContainerMainText>

      {/* <Box
        sx={{
          height: "350px",
          width: "80%",
          background: "green",
          position: "relative",
          margin: "40px",
        }}
      >
        <Map />
      </Box> */}

      {/* <Map /> */}
    </div>
  );
}

export default About;
