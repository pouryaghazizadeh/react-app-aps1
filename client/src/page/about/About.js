import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import dataAbout from "../../constants/about.json";
import { FilterContentGreaterThanNumber } from "../../helper/aboutHelper";
const ContainerMainText = styled(Box)(() => {
  return {};
});
const ContainerTextSecond = styled(Box)(({ theme }) => {
  return {
    // background: "red",
    // height: "400px",
    // display: "flex",
    // flexDirection: "column",
    // "&:nth-child(2n+1)": {
    //   // flex-direction:row-reverse
    //   flexDirection: "row-reverse",
    //   backgroundColor:"blue"
    // },
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
  const resultSecondMain = FilterContentGreaterThanNumber(
    dataAbout.mainText,
    2
  );

  return (
    <div>
      <ContainerMainText>
        {/* <Typography>{dataAbout.missionStatement}</Typography> */}

        <Box></Box>
        <ContainerTextSecond>
          {resultSecondMain.map((v, i) => {
            const { title } = v;

            return (
              <>
                {/* <Box key={i} sx={{ background: "khaki" }}> */}
                <p>{title}</p>
                <p>{title}</p>]{/* <p >{v.text}</p> */}
                {/* </Box> */}
              </>
            );
          })}
        </ContainerTextSecond>
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
    </div>
  );
}

export default About;
