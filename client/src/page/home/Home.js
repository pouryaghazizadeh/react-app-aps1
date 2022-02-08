import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cards from "../../components/card/Card";
import Slider from "../../components/slider/Slider";
import dataCards from "../../constants/card.json";
import dataSlider from "../../constants/slider.json";
export const homeStyle = makeStyles((theme) => {
  return {
    containerPage: {
      display: "flex",
      justifyContent: "center",
    },
    containerSlider: {
      height: "500px",
      width: "100%",
      marginTop: "10px",
    },
    titleCard: {
      width: "100%",
      textAlign: "center",
    },
    containerCards: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",

      gap: "40px",
      [theme.breakpoints.up("xs")]: {
        justifyContent: "center",
        padding: "0",
      },
      [theme.breakpoints.up("sm")]: {
        justifyContent: "space-between",
        padding: "0px 10px 0px 10px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "0px 15px 0px 15px",
      },
    },
  };
});
const Home = () => {
  const useStyles = homeStyle();
  return (
    <Box component="main">
      {/* slider container */}
      <Box className={useStyles.containerSlider}>
        <Slider dataSlider={dataSlider} />
      </Box>
      {/* cards container */}
      <Box component="section" className={useStyles.containerCards}>
        <Typography component="h3" variant="h2" className={useStyles.titleCard}>
          {dataCards.title}
        </Typography>
        {/* cards */}
        {dataCards.cards.map((value, i) => {
          const { text, imageUrl } = value;
          return (
            <Cards
              Info={{
                imageUrl: imageUrl,
                titleCard: text,
              }}
              key={i}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;
