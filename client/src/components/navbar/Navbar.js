import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import headerData from "../../constants/headerData.json";
import Buttons from "../button/Button";
export const navbarStyle = makeStyles((theme) => {
  return {
    header: {
      [theme.breakpoints.up("xs")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    firstNav: {},
    secondNav: {
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("sm")]: {
        borderTop: "1px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    },
    containerMenuMobile: {
      [theme.breakpoints.up("xs")]: {
        display: "flex",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // handle open menu in mobile screen
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // handle close menu in mobile screen
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

          <Box className={useStyle.containerMenuMobile}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={useStyle.menuStyle}
            >
              {headerData.routes.map((value, index) => {
                const { nameRoute, route } = value;
                const dataBtn = {
                  routeButton: route,
                  nameButton: nameRoute,
                  typeButton: {
                    linkButton: true,
                  },
                };
                return (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Buttons Info={dataBtn} />
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>

        <Toolbar
          component="div"
          className={useStyle.secondNav}
          // sx={{ display: { xs: "none", sm: "block" } }}
        >
          {headerData.routes.map((value, i) => {
            const { nameRoute, route } = value;
            const dataBtn = {
              routeButton: route,
              nameButton: nameRoute,
              typeButton: {
                linkButton: true,
              },
              activeStyle: true,
            };

            return <Buttons key={i} Info={dataBtn} />;
          })}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
