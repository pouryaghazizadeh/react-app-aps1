import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import headerData from "../../constants/headerData.json";
import Buttons from "../button/Button";
import { useState } from "react";
export const navbarStyle = makeStyles((theme) => {
  return {
    containerNavbar: {
      [theme.breakpoints.up("xs")]: {
        // height: "75px",
      },
    },
    firstNav: {
      [theme.breakpoints.up("xs")]: {
        height: "100%",
        // background: "green",
      },
      [theme.breakpoints.up("sm")]: {
        height: "0px",
      },
    },
    secondNav: {
      borderTop: "1px solid",
      [theme.breakpoints.up("xs")]: {
        display: "none",
        // background:"green"

      },
      [theme.breakpoints.up("md")]: {
        display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        height: "30px"

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
  const [mood,SetMood] = useState(false)
  return (
    <>
      <AppBar color="default" className={useStyle.containerNavbar}>
        <Toolbar component="section" className={useStyle.firstNav}>
          <Box flexGrow={2}>
            <img
              src={headerData.logoWebsite.srcLogo}
              alt={headerData.logoWebsite.alt}
              className={useStyle.logo}
            />
          </Box>
          <Box component="section" className={useStyle.containerIcon}>
            <MenuIcon
              fontSize="large"
              onClick={(e) => {
                SetMood(!mood);
                console.log(mood);
              }}
            />
          </Box>
        </Toolbar>
        <Toolbar
          component="nav"
          className={useStyle.secondNav}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
