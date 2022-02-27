import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// export const cardStyle = makeStyles((theme) => {
//   return {
//     containerPage: {
//       // border: `1px solid ${theme.palette.text.icon}`,
//       width: "300px",
//       height: "400px",
//       margin: "5px",
//       textAlign: "center",
//     },
//     title: {
//       color: theme.palette.text.primary,
//     },
//     containerText: {
//       background: theme.palette.background.default,

//       height: "100%",
//     },
//   };
// });

const ContainerCard = styled(Card)(({ theme }) => {
  return {
    width: "300px",
    height: "400px",
    margin: "5px",
    textAlign: "center",
  };
});
const ContainerTitle = styled(CardContent)(({ theme }) => {
  return {
    background: theme.palette.background.default,

    height: "100%",
  };
});

const TitleCard = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
  };
});
const Cards = ({ Info }) => {
  const {
    imageUrl,
    titleCard,
    descriptionCard,
    fontWeightCard,
    styleTitleCard,
  } = Info;

  return (
    <ContainerCard component="section">
      <CardMedia
        component="img"
        height="180"
        src={imageUrl && imageUrl}
        alt={titleCard && titleCard}
      />
      <ContainerTitle
      //  className={useStyle.containerText}
      >
        {titleCard && (
          <TitleCard
            component="h4"
            fontWeight={fontWeightCard && fontWeightCard}
            // className={useStyle.title}
            sx={styleTitleCard && styleTitleCard}
          >
            {titleCard}
          </TitleCard>
        )}
        {descriptionCard && <Typography>{descriptionCard}</Typography>}
      </ContainerTitle>
    </ContainerCard>
  );
};

export default Cards;
