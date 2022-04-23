import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
// const Img =  lazy(()=>import("../Image/Image"))
const ContainerCard = styled(Card)(() => {
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

// card component
const Cards = ({ Info }) => {
  const { imageUrl, titleCard, descriptionCard, fontWeightCard } = Info;

  console.log("I am card component");
  return (
    <ContainerCard component="section">
      {/* <Img
        // loading="lazy"
        // height="180"
        // width="100%"
        debounce={1000}
        src={imageUrl && imageUrl}
        alt={titleCard && titleCard}
      /> */}
      <ContainerTitle>
        {titleCard && (
          <TitleCard
            component="h4"
            fontWeight={fontWeightCard && fontWeightCard}
          >
            {titleCard}
          </TitleCard>
        )}
        {descriptionCard && <Typography>{descriptionCard}</Typography>}
      </ContainerTitle>
    </ContainerCard>
  );
};

export default memo(Cards);
