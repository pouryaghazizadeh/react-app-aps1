import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const style = makeStyles((theme) => {
  return {
    containerDot: {
      [theme.breakpoints.up("xs")]: {
        // background: "khaki",
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
      width: "20px",
      height: "20px",
      background: "black",
      margin: "5px",
      border: "2px solid #fff",
    },
    disable: {
      borderRadius: "50px",
      width: "20px",
      height: "20px",
      background: "#fff",
      margin: "5px",
    
    },
  };
});
const Dot = ({Info}) => {
  const {dataSlider,current}=Info
  console.log("ababba",current);
  const useStyle = style();
  return (
    <Box component="div" className={useStyle.containerDot}>
      {dataSlider.map((value, index) => {
        console.log(index,"index");
        return (
          <Box
            component="div"
            key={index}
            className={
              index === current ? useStyle.active : useStyle.disable
            }
            onClick={(e)=>{
           
            }}
          >
        
          </Box>
        );
      })}
    </Box>
  );
};

export default Dot;
