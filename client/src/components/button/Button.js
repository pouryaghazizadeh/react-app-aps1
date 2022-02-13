import { Button,Box,IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

export const ButtonStyle = makeStyles({
  button: {
    "&.active": {
      borderRadius: "0",
      borderBottom: "1px solid blue",
      fontSize: "0.875rem",
    },
  },
  default: {
    textTransform: "none",
  },
});

const Buttons = ({ buttonInfo }) => {
  // destructure style
  const {
    colorButton,
    nameButton,
    routeButton,
    typeButton,
    eventButton,
    activeStyle,
    styleButton,
    url,
    iconInfo,
  } = buttonInfo;





  const useStyle = ButtonStyle();
  return (
    <Button
      disableRipple
      component={typeButton.linkButton ? RouterLink : "button"}
      href={url ? url : null}
      to={typeButton.linkButton ? routeButton : "/"}
      onClick={eventButton ? eventButton : null}
      color={colorButton ? colorButton : "primary"}
      className={activeStyle ? useStyle.button : useStyle.default}
      classes={{ textTransform: "none" }}
      sx={styleButton && styleButton}
    >
      {nameButton && nameButton}
      {iconInfo && (
        <Box direction="row" spacing={1}>
          <IconButton sx={iconInfo.iconStyle} disableRipple>
            {iconInfo.icon}
          </IconButton>
        </Box>
      )}
    </Button>
  );
};

export default Buttons;
