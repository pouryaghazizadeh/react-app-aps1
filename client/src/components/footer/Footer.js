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
      boxShadow: "6px 0px 9px 1px rgba(0,0,0,0.6)",
      with: "100%",
      background: theme.palette.background.default,
      position: "relative",
      textAlign: "center",
      [theme.breakpoints.up("xs")]: {
        height: "450px",
      },
      [theme.breakpoints.up("md")]: {
        height: "350px",
      },
    },
    containerInformation: {
      position: "relative",
      [theme.breakpoints.up("xs")]: {
        height: "35%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      },
      [theme.breakpoints.up("sm")]: {
        width: "50%",
        height: "70%",
      },
    },
    boxTitle: {
      position: "absolute",
      left: "0",
      [theme.breakpoints.up("xs")]: {
        paddingLeft: "1.3rem",
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    titleStyle: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "900",
    },
    // box contain value location and phone number
    boxInfoText: {
      position: "absolute",
      [theme.breakpoints.up("xs")]: {
        right: "0",
        paddingLeft: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        width: "58%",
        height: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        height: "70%",
        width: "100%",
        paddingTop: "2rem",
        left: "0",
        top: "0",
        justifyContent: "space-between",
      },
    },
    infoStyleText: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "900",
    },
    containerIcon: {
      position: "absolute",
      width: "50%",
      right: "0",
      height: "50%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      gap: "5",
      paddingTop: "15px",
      [theme.breakpoints.up("xs")]: {
        width: "100%",
        textAlign: "start",
        bottom: "35px",
      },
      [theme.breakpoints.up("sm")]: {
        width: "60%",
        height: "70%",
        textAlign: "center",
        top: "0",
        alignItems: "flex-start",
      },
      [theme.breakpoints.up("md")]: {
        height: "50%",
      },
    },
    textIcon: {
      alignItems: "center",
      width: "100%",
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "900",
      [theme.breakpoints.up("xs")]: {
        padding: "1.5rem 0 0 1.3rem",
        height: "60px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "1rem 0 0 0",
      },
    },

    textCopyright: {
      position: "absolute",
      bottom: "10px",
      fontWeight: "900",
      width: "100%",
      color: theme.palette.text.primary,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
  };
});

const Footer = () => {
  const useStyle = styleFooter();
  return (
    <Box component="footer" className={useStyle.containerFooter}>
      {/* get information about location and phone number */}
      <Box component="section" className={useStyle.containerInformation}>
        {/* box get title */}
        <Box component="section" className={useStyle.boxTitle}>
          {footerData.information.map((value) => {
            return (
              <>
                <Typography
                  component="p"
                  variant="p"
                  className={useStyle.titleStyle}
                >
                  {value.title}
                </Typography>
              </>
            );
          })}
        </Box>
        {/* box get information data */}
        <Box component="section" className={useStyle.boxInfoText}>
          {footerData.information.map((value) => {
            return (
              <Typography
                component="p"
                variant="p"
                className={useStyle.infoStyleText}
              >
                {value.info}
              </Typography>
            );
          })}
        </Box>
      </Box>
      {/* icon container */}
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
        {/*  get icons */}
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

          const StyleIcon = {
            typeButton: {
              button: "button",
            },
            url: value.url,
            styleButton: {
              margin: "0",
            },
            rippleStyleButton: true,
            iconInfo: {
              icon: icons,
              iconStyle: {
                color: "black",
                background: "#fff",
                borderRadiuses: "50%",
                border: "1px solid black",
              },
              sizeIcon: "large",
              disableRippleStyle: true,
            },
          };
          return <Buttons buttonInfo={StyleIcon} key={i} />;
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
