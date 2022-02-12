import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cards from "../../components/card/Card";
import Slider from "../../components/slider/Slider";
import dataCards from "../../constants/card.json";
import dataSlider from "../../constants/slider.json";
export const homeStyle = makeStyles((theme) => {
  return {
    containerPage: {
      // background: theme.palette.text.secondary,
      display: "flex",
      justifyContent: "center",
    },
    containerSlider: {
      height: "650px",
      width: "100%",
      marginTop: "3px",
    },
    titleCard: {
      width: "100%",
      textAlign: "center",
    },
    containerCards: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      gap: "10px",
      marginBottom: "700px",
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
    },
  };
});
const Home = () => {
  const useStyles = homeStyle();
  return (
    <Box component="main" sx={{ background: "background.default" }}>
      {/* slider container */}
      <Box className={useStyles.containerSlider}>
        <Slider dataSlider={dataSlider.secondData} />
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
                fontWeightCard: "700",
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
