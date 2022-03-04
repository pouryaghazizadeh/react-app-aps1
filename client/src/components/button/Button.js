import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";

const Buttons = styled(
  Button


  //* to get props use this method
  //   , {
  //   shouldForwardProp: (prop) =>
  //     prop !== "color" && prop !== "variant" && prop !== "sx",
  //   name: "MyThemeComponent",
  //   slot: "Root",
  //   overridesResolver: (props, styles) => [
  //     styles.root,
  //     props.color === "primary" && styles.primary,
  //     props.color === "secondary" && styles.secondary,
  //   ],
  // }


)(({ theme }) => {
  return {
    textTransform: "none",
    color: theme.palette.text.primary,
    marginBottom: "0.5rem",

    "&.active": {
      borderRadius: "0",
      borderBottom: "1px solid blue",
      fontSize: "0.875rem",
    },
  };
});

const ButtonComponent = ({ buttonInfo }) => {
  // destructure style
  const {
    nameButton,
    routeButton,
    typeButton,
    eventButton,
    rippleStyleButton,
    url,
    iconInfo,
  } = buttonInfo;

  return (
    <Buttons
      disableRipple={rippleStyleButton ? true : false}
      component={
        typeButton.Link
          ? RouterLink
          : typeButton.NavLink
          ? RouterNavLink
          : typeButton.button
          ? "button"
          : "button"
      }
      href={url && url}
      
      // eslint-disable-next-line no-mixed-operators
      to={typeButton.Link || typeButton.NavLink &&routeButton }
      onClick={eventButton ? eventButton : null}
    >

      {nameButton && nameButton}
      {iconInfo && (
        <Box direction="row" spacing={1}>
          <IconButton
            sx={iconInfo.iconStyle && iconInfo.iconStyle}
            size={iconInfo.sizeIcon && iconInfo.sizeIcon}
            disableRipple={iconInfo.disableRippleStyle ? true : false}
          >
            {iconInfo.icon}
          </IconButton>
        </Box>
      )}
    </Buttons>
  );
};

export default ButtonComponent;
