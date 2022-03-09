import { Box } from "@mui/material";
import React from "react";
import Map from "../../components/map/Map";
function About({dataAbout}) { 
  return (
    <div>
     

      <Box
        sx={{
          height: "350px",
          width: "80%",
          background: "green",
          position: "relative",
          margin: "40px",
        }}
      >
        {/* <Map /> */}
      </Box>
    </div>
  );
}

export default About;
