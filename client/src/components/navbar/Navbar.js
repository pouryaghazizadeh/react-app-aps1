import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import headerData from "../../constants/headerData.json";
import { ColorModeContext } from "../../helper/modeColorContext";
import Buttons from "../button/Button";

export const navbarStyle = makeStyles((theme) => {
  return {
    header: {
      background: theme.palette.background.default,
      [theme.breakpoints.up("xs")]: {
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
      background: theme.palette.text.icon,
    },
    containerMenuMobile: {
      [theme.breakpoints.up("xs")]: {
        display: "flex",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    firstNav: {
      // background: theme.palette.background.default,
    },
    secondNav: {
      // background: theme.palette.background.default,
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    lineStyle: {
      width: "90%",
      background: "black",
      margin: "0 2% 0 5%",
    },
  };
});
// create context for dark mode

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { mood, setMood } = useContext(ColorModeContext);
  console.log(mood, "our mood");
  const toggleColorMode = () => {
    setMood(mood === "light" ? "dark" : "light");
  };

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
      <AppBar
        enableColorOnDark
        color="inherit"
        className={useStyle.header}
        position="sticky"
      >
        <Toolbar component="nav" className={useStyle.firstNav}>
          <Box flexGrow={2}>
            <img
              src={headerData.logoWebsite.srcLogo}
              alt={headerData.logoWebsite.alt}
              className={useStyle.logo}
            />
          </Box>
          {/* container menu */}
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
                    <Buttons buttonInfo={dataBtn} />
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          {/* button dark mood */}
          <Buttons
            buttonInfo={{
              typeButton: {
                button: "button",
              },
              eventButton: toggleColorMode,
              iconInfo: {
                icon:
                  mood === "light" ? <Brightness7Icon /> : <Brightness4Icon />,
              },
            }}
          />
        </Toolbar>
        {/* line component */}
        <Box component="hr" className={useStyle.lineStyle}></Box>

        <Toolbar
          component="nav"
          variant="div"
          className={useStyle.secondNav}
          sx={{ display: { sx: "none", sm: "flex" } }}
        >
          {/* button desktop */}
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

            return <Buttons key={i} buttonInfo={dataBtn} />;
          })}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
