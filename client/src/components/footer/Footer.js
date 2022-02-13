import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import footerData from "../../constants/footer.json";
import Buttons from "../button/Button";

export const styleFooter = makeStyles((theme) => {
  return {
    containerFooter: {
      boxShadow: "10px 10px 8px 8px rgba(0,0,0,0.6)",
      paddingTop: "15px",
      with: "100%",
      height: "400px",
      background: theme.palette.background.default,
      position: "relative",
      textAlign: "center",
    },
    containerTextInfo: {
      [theme.breakpoints.up("xs")]: {
        display: "flex",
        width: "50%",
        flexDirection: "colum",
        justifyContent: "space-between",
        height: "20%",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    textStyle: {
      color: theme.palette.text.primary,
      fontWeight: "bold",

      [theme.breakpoints.up("xs")]: {
        fontSize: "20px",
      },
    },
    containerInfo: {
      // paddingLeft: "20px",

      [theme.breakpoints.up("xs")]: {
        marginTop: "20px",
        position: "absolute",
        width: "50%",
        height: "30%",
        right: "0",
        top: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: "0px",
        width: "50%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        left: "0",
        top: "0",
        paddingLeft: "30px",
      },
    },
    containerIcon: {
      position: "absolute",
      marginTop: "20px",
      width: "50%",
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
        bottom: "35px",
      },
      [theme.breakpoints.up("sm")]: {
        width: "50%",
        textAlign: "center",
        top: "0",
      },
    },
    textIcon: {
      alignItems: "center",
      width: "100%",
      color: theme.palette.text.primary,
      height: "50px",
      fontSize: "20px",
      fontWeight: "bold",
    },

    textCopyright: {
      position: "absolute",
      bottom: "10px",
      fontWeight: "bold",
      width: "100%",
      color: theme.palette.text.primary,
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
        <Typography
          className={useStyle.textIcon}
          component="p"
          variant="section"
        >
          {footerData.followUs.text}
        </Typography>

        {footerData.followUs.links.map((value, i) => {
          const icons =
            value.text === "Github" ? (
              <GitHubIcon />
            ) : value.text === "Instagram" ? (
              <InstagramIcon />
            ) : value.text === "Linkedin" ? (
              <LinkedInIcon />
            ) : value.text === "Telegram" ? (
              <TelegramIcon />
            ) : (
              <YouTubeIcon />
            );

          const iconInfo = {
            typeButton: {
              button: "button",
            },
            url: value.url,

            iconInfo: {
              icon: icons,
              iconStyle: {
                color: "black",
                background: "#fff",
                borderRadiuses: "50%",
                border: "1px solid black",
                
              },
            },
          };
          return <Buttons buttonInfo={iconInfo} />;
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
