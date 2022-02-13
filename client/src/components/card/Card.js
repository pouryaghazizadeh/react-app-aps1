import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const cardStyle = makeStyles((theme) => {
  return {
    containerPage: {
     background:"green",
      maxWidth: "450px",
      maxHeight: "700px",
      margin: "5px",
      textAlign: "center",
    },
    title: {
      fontWeight: "800",
      color: theme.palette.text.primary,
    },
  };
});
const Cards = ({ Info }) => {
  const { imageUrl, titleCard, descriptionCard, fontWeightCard } = Info;
  const useStyles = cardStyle();
  return (
    <Card className={useStyles.containerPage}
    component="section"
     
     >
      <CardMedia
        component="img"
        height="180"
        src={imageUrl && imageUrl}
        alt={titleCard && titleCard}
      />
      <CardContent>
        {titleCard && (
          <Typography
            component="h4"
            fontWeight={fontWeightCard && fontWeightCard}
            className={useStyles.title}
          >
            {titleCard}
          </Typography>
        )}

        {descriptionCard && <Typography>{descriptionCard}</Typography>}
      </CardContent>
    </Card>
  );
};

export default Cards;
