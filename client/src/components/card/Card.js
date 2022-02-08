import {
    Card, CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
 export const cardStyle = makeStyles((theme) => {
   return {
     containerPage: {
       background: "#fff",
       maxWidth: "350px",
       maxHeight: "500px",
       margin: "5px",
       textAlign: "center",
     },
   };
 });
const Cards = ({Info}) => {
     const { imageUrl, titleCard, descriptionCard } = Info;
const useStyles = cardStyle();
  return (
    <Card className={useStyles.containerPage}>
      <CardMedia
        component="img"
        height="180"
        src={imageUrl && imageUrl}
        alt={titleCard && titleCard}
      />
      <CardContent>
        {titleCard && <Typography component="h4">{titleCard}</Typography>}

        {descriptionCard && <Typography>{descriptionCard}</Typography>}
      </CardContent>
    </Card>
  );
};

export default Cards;
