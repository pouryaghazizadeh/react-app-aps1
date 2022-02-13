import { Box, Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";

export const ButtonStyle = makeStyles((theme) => {
  return {
    button: {
      "&.active": {
        borderRadius: "0",
        borderBottom: "1px solid blue",
        fontSize: "0.875rem",
      },
    },
  };
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
    rippleStyle,
    
    url,
    iconInfo,
  } = buttonInfo;
  const useStyle = ButtonStyle();
  return (
    <Button
      disableRipple={rippleStyle?true:false}
      component={
        typeButton.Link
          ? RouterLink
          : typeButton.NavLink
          ? RouterNavLink
          : typeButton.button
          ? typeButton.button
          : "button"
      }
      href={url ? url : null}
      to={typeButton.Link || typeButton.NavLink ? routeButton : "/"}
      onClick={eventButton ? eventButton : null}
      color={colorButton ? colorButton : "primary"}
      className={activeStyle ? useStyle.button : null}
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
