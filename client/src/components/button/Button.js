import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink as RouterLink } from "react-router-dom";

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

const Buttons = ({ Info }) => {
  // destructure style
  const {
    colorButton,
    nameButton,
    routeButton,
    typeButton,
    eventButton,
    activeStyle,
  } = Info;

  const useStyle = ButtonStyle();
  return (
    <Button
  
      component={typeButton.linkButton ? RouterLink : "/"}
      // check type if type be true pass data(button/submit) in the else check button component have props (typeButton.linkButton) if it is true your button will be link type(RouterLink) if it is false  your button will be type button
      type={
        typeButton.button
          ? typeButton.button
          : typeButton.linkButton
          ? "null"
          : "button"
      }
      to={typeButton.linkButton ? routeButton : "/"}
      onClick={eventButton ? eventButton : null}
      color={colorButton ? colorButton : "primary"}
      className={activeStyle ? useStyle.button  : useStyle.default}
      classes={{textTransform:"none"}}
    >
      {nameButton}
    </Button>
  );
};

export default Buttons;
