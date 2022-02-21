import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";

const Buttons = styled(Button)(({ theme }) => {
  return {
    textTransform: "none",
     color: theme.palette.text.primary,
     marginBottom:"0.5rem",
    "&.active": {
      borderRadius: "0",
      borderBottom: "1px solid blue",
      fontSize: "0.875rem",
      
     
    },
  };
});
//   const Theme = useTheme();
//  const ButtonStyle = (Theme) => {
//   return {
//     button: {
// textTransform: "none",
//       "&.active": {
//         borderRadius: "0",
//         borderBottom: "1px solid blue",
//         fontSize: "0.875rem",
//       },
//     },
//   };
// };
const ButtonComponent = ({ buttonInfo, typeButtons }) => {
  console.log(typeButtons);
  // destructure style
  const {
    colorButton,
    nameButton,
    routeButton,
    typeButton,
    eventButton,
    activeStyle,
    styleButton,
    rippleStyleButton,
    url,
    iconInfo,
  } = buttonInfo;
  // const useStyle = ButtonStyle();

  return (
    <Buttons
      disableRipple={rippleStyleButton ? true : false}
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
      // className={activeStyle ? useStyle.button : ""}
      // sx={styleButton && styleButton}
      // sx={{ color: "text.primary" }}
      // classes={{ textTransform: "none" }}
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
