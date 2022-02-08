import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const style = makeStyles((theme) => {
  return {
    containerDot: {
      [theme.breakpoints.up("xs")]: {
        width: "100%",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        zIndex: "10",
        position: "absolute",
        bottom: "0",
      },
    },
    active: {
      borderRadius: "50px",
      width: "17px",
      height: "17px",
      background: "black",
      margin: "5px",
      border: "2px solid #fff",
      cursor: "pointer",
    },
    disable: {
      borderRadius: "50px",
      width: "17px",
      height: "17px",
      background: "#fff",
      margin: "5px",
      cursor: "pointer",
      border: "2px solid black",
    },
  };
});
const Dot = ({ Info }) => {
  const { dataSlider, current } = Info;

  const useStyle = style();
  return (
    <Box component="div" className={useStyle.containerDot}>
      {dataSlider.map((value, index) => {
        return (
          <Box
            component="div"
            key={index}
            className={index === current ? useStyle.active : useStyle.disable}
          ></Box>
        );
      })}
    </Box>
  );
};

export default Dot;
