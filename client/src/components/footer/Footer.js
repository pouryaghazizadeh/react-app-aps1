import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const styleFooter = makeStyles((theme)=>{
  return({
    containerFooter:{
      with:"100%",
      height:"300px",
      background:"gray"
    }

  })
})

const  Footer = () =>{
  const useStyle = styleFooter()
  return <Box component="footer" className={useStyle.containerFooter}></Box>;
}

export default Footer;
