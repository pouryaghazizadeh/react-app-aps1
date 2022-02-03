import { AppBar, Box, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import headerData from "../../constants/headerData.json";
import MenuIcon from "@mui/icons-material/Menu";
import Buttons from "../button/Button";
export const navbarStyle = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    header: {
      [theme.breakpoints.up("xs")]: {
        display: "flex",
        justifyContent: "center",

        height: "80px",
      },
     
    },
    firstNav: {},
    secondNav: {
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    containerIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    logo: {
      height: "60px",
      width: "70px",
      // background: "blue",
   
     
    },
  };
});
const Navbar = () => {
  const useStyle = navbarStyle();
  return (
    <>
      <AppBar color="default" className={useStyle.header}>
        <Toolbar component="nav">
          <Box flexGrow={2}>

          <img
            src={headerData.logoWebsite.srcLogo}
            alt={headerData.logoWebsite.alt}
            className={useStyle.logo}
            />
            </Box>
          <Box component="section" className={useStyle.containerIcon} >
            <MenuIcon fontSize="large" />
          </Box>
        </Toolbar>

        {/* <Toolbar component="nav" className={useStyle.secondNav}>
          {headerData.routes.map((value, i) => {
            const { nameRoute, route } = value;
            const dataBtn = {
              routeButton: route,
              nameButton: nameRoute,
              typeButton: {
                linkButton: true,
              },
            };

            return <Buttons key={i} Info={dataBtn} />;
          })}
        </Toolbar> */}
      </AppBar>
    </>
  );
};

export default Navbar;
