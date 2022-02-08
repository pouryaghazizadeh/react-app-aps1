import { Box,  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Slider from "../../components/slider/Slider";
import dataSlider from "../../constants/slider.json";
import Cards from "../../components/card/Card";
import dataCards from "../../constants/card.json"
import { flexbox } from "@mui/system";
export const homeStyle = makeStyles((theme)=>{
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
   titleCard:{
     textAlign:"center",
     width:"100%"
   },
   containerCards:{
     width: "100%",
     display: "flex",
     flexWrap:"wrap",
     justifyContent:"center"
   }
 };
 
})
const Home = () => {
  const useStyles = homeStyle()
  return (
    <Box component="main">
      {/* slider */}
      <Box className={useStyles.containerSlider}>
        <Slider dataSlider={dataSlider} />
      </Box>
      {/* cards */}
      <Box component="section" className={useStyles.containerCards}>
        
          <Typography component="h3" variant="h2" className={useStyles.titleCard}>
            {dataCards.title}
          </Typography>
        
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
