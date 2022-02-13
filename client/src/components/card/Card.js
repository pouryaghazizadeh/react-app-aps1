import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const cardStyle = makeStyles((theme) => {
  return {
    containerPage: {
      border: `1px solid ${theme.palette.text.icon}`,
      width: "300px",
      height: "400px",
      margin: "5px",
      textAlign: "center",
    },
    title: {
      fontWeight: "800",
      color: theme.palette.text.primary,
    },
    containerText: {
      background: theme.palette.background.default,

      height: "100%",
    },
  };
});
const Cards = ({ Info }) => {
  const { imageUrl, titleCard, descriptionCard, fontWeightCard } = Info;
  const useStyle = cardStyle();
  return (
    <Card className={useStyle.containerPage}
    component="section"
     
     >
      <CardMedia
        component="img"
        height="180"
        src={imageUrl && imageUrl}
        alt={titleCard && titleCard}
      />
      <CardContent className={useStyle.containerText}>
        {titleCard && (
          <Typography
            component="h4"
            fontWeight={fontWeightCard && fontWeightCard}
            className={useStyle.title}
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
