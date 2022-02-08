import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
 export const cardStyle = makeStyles((theme) => {
   return {
     containerPage: {
       background: "#fff",
       maxWidth: "350px",
       maxHeight: "500px",
       margin: "5px",
     },
   };
 });
const Cards = () => {
      const useStyles = cardStyle();
  return <Card>

  </Card>
};

export default Cards;
