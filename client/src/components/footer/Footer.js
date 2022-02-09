import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import footerData from "../../constants/footer.json";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Buttons from '../button/Button';
export const styleFooter = makeStyles((theme) => {
  return {
    containerFooter: {
      with: "100%",
      height: "400px",
      background: "gray",
      position: "relative",
      textAlign: "center",
    },
    containerTextInfo: {
      background: "blue",

      [theme.breakpoints.up("xs")]: {
        display: "flex",
        width: "50%",
        height: "15%",
        flexDirection: "colum",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    textStyle: {
      color: "#fff",
      fontWeight: "bold",

      [theme.breakpoints.up("xs")]: {
        fontSize: "20px",
      },
    },
    containerInfo: {
      paddingLeft: "20px",
      background: "blue",
      [theme.breakpoints.up("xs")]: {
        position: "absolute",
        width: "50%",
        height: "80%",
        right: "0",
        top: "0",
      },
      [theme.breakpoints.up("sm")]: {
        width: "50%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        left: "0",
        top: "0",
      },
    },
    containerIcon: {
      background: "khaki",
      width: "50%",
      position: "absolute",
      right: "0",
      height: "50%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",

      gap: "20px",
      paddingTop: "5px",
      [theme.breakpoints.up("xs")]: {
        width: "100%",
        textAlign: "start",
      },
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        textAlign: "center",
      },
    },
    textIcon: {
      alignItems: "center",
      width: "100%",
      color: "#fff",
      height: "50px",
      fontSize: "20px",
      fontWeight: "bold",
      background: "green",
    },
    iconBox: {
      borderReduce: "10px",
      // border:"1px solid black",
      // background: "red",
      height: "30px",
      width: "30px",
    },
    textCopyright: {
      position: "absolute",
      bottom: "10px",
      fontWeight: "bold",
      width: "100%",
      color: "#fff",
      [theme.breakpoints.up("xs")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "21px",
      },
    },
  };
});

const Footer = () => {
  const useStyle = styleFooter();
  return (
    <Box component="footer" className={useStyle.containerFooter}>
      {footerData.information.map((value) => {
        return (
          <>
            {/* container text information  */}
            <Box
              component="section"
              variant="section"
              className={useStyle.containerTextInfo}
            >
              <Typography
                component="p"
                variant="p"
                className={useStyle.textStyle}
              >
                {value.text}
              </Typography>
            </Box>
            <Box
              component="section"
              variant="section"
              className={useStyle.containerInfo}
            ></Box>
          </>
        );
      })}
      {/* container location and phone number */}
      <Box
        component="section"
        variant="section"
        className={useStyle.containerInfo}
      >
        {footerData.information.map((value) => {
          return (
            <>
              {/* number */}
              <Typography
                component="p"
                variant="p"
                className={useStyle.textStyle}
              >
                {value.info}
              </Typography>
            </>
          );
        })}
      </Box>
      {/* icon */}
      <Box
        component="section"
        variant="section"
        className={useStyle.containerIcon}
      >
        {/* text icon */}
        <Typography className={useStyle.textIcon} component="p" variant="section">
          {footerData.followUs.text}
        </Typography>
      
        {footerData.followUs.links.map((value, i) => {
          return value.text === "Github" ? (
            <Link href={value.url} className={useStyle.iconBox} variant="div">
              <GitHubIcon />
            </Link>
          ) : value.text === "Instagram" ? (
            <Link href={value.url} className={useStyle.iconBox}>
              <InstagramIcon />
            </Link>
          ) : value.text === "Linkedin" ? (
            <Link href={value.url} className={useStyle.iconBox}>
              <LinkedInIcon color="green" />
            </Link>
          ) : value.text === "Telegram" ? (
            <Link href={value.url} className={useStyle.iconBox}>
              <TelegramIcon />
            </Link>
          ) : (
            <Link href={value.url} className={useStyle.iconBox}>
              <YouTubeIcon />
            </Link>
          );
        })}
      </Box>
      {/* copy right text */}

      <Typography
        component="section"
        variant="section"
        className={useStyle.textCopyright}
      >
        {footerData.copyRight}
      </Typography>
    </Box>
  );
};

export default Footer;
