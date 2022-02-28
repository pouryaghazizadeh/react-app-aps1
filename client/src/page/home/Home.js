import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Cards from "../../components/card/Card";
import Slider from "../../components/slider/Slider";
import dataCards from "../../constants/card.json";
import dataSlider from "../../constants/slider.json";

const ContainerPage = styled(Box)(({ theme }) => {
  return {
    background: theme.palette.background.paper,
    height: "100%",
    paddingBottom: "500px",
  };
});

const ContainerSlider = styled(Box)(() => {
  return {
    height: "650px",
    width: "100%",
    marginTop: "3px",
  };
});
const TitleCard = styled(Typography)(() => {
  return {
    height: "650px",
    width: "100%",
    marginTop: "3px",
  };
});

const ContainerCards = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    gap: "10px",

    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
      padding: "0",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0px 10px 0px 10px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 15px 0px 15px",
      marginTop: "300px",
    },
  };
});

const Home = () => {
  return (
    <ContainerPage component="main" variant="div">
      {/* slider container */}
      <ContainerSlider>
        <Slider dataSlider={dataSlider.secondData} />
      </ContainerSlider>
      {/* cards container */}
      <ContainerCards component="section">
        <TitleCard component="h3" variant="h2" sx={{ marginBottom: "25px" }}>
          {dataCards.title}
        </TitleCard>

        {/* cards */}
        {dataCards.cards.map((value, i) => {
          const { text, imageUrl } = value;
          return (
            <Cards
              Info={{
                imageUrl: imageUrl,
                titleCard: text,
                fontWeightCard: "900",
                styleTitleCard: {
                  fontSize: "1.7rem",
                },
              }}
              key={i}
            />
          );
        })}
      </ContainerCards>
    </ContainerPage>
  );
};

export default Home;
