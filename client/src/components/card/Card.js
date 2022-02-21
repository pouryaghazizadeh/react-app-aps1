import {
  Card,
  CardContent,
  CardMedia,

  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const cardStyle = makeStyles((theme) => {
  return {
    containerPage: {},
    title: {
      color: theme.palette.text.primary,
    },

    containerText: {
     ,

     
    ,
    },
  };
});

const CardContainer = styled(Card)({
  width: "300px",
  height: "400px",
  margin: "5px",
  textAlign: "center",
});
const containerText = styled(CardContent)({
    height: "100%"
})
const TitleCard =styled(Typography)(({theme})=>{
  return{
     background: theme.palette.background.default
     
  }

})
const Cards = ({ Info }) => {
  const {
    imageUrl,
    titleCard,
    descriptionCard,
    fontWeightCard,
    styleTitleCard,
  } = Info;

  const useStyle = cardStyle();
  return (
    <CardContainer component="section">
      <CardMedia
        component="img"
        height="180"
        src={imageUrl && imageUrl}
        alt={titleCard && titleCard}
      />
      <containerText className={useStyle.containerText}>
        {titleCard && (
          <TitleCard
            component="h4"
            fontWeight={fontWeightCard && fontWeightCard}
            className={useStyle.title}
            sx={styleTitleCard && styleTitleCard}
          >
            {titleCard}
          </TitleCard>
        )}

        {descriptionCard && <Typography>{descriptionCard}</Typography>}
      </containerText>
    </CardContainer>
  );
};

export default Cards;
