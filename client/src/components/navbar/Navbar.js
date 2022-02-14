import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
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
import { useContext, useState } from "react";
import headerData from "../../constants/headerData.json";
import { ColorModeContext } from "../../helper/modeColorContext";
import Buttons from "../button/Button";

export const navbarStyle = makeStyles((theme) => {
  return {
    header: {
      background: theme.palette.background.default,
    },
    containerIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    logo: {
      height: "60px",
      width: "70px",
      margin: "0.3em  0  0 0",
      background: theme.palette.text.icon,
    },
    containerMenuMobile: {
      color: theme.palette.text.icon,
      [theme.breakpoints.up("xs")]: {
        display: "flex",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    firstNav: {
      background: theme.palette.background.default,
      width: "100%",
      padding: "0px",
    },
    secondNav: {
      [theme.breakpoints.up("sm")]: {
        backgroundColor: theme.palette.background.default,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
    },
    lineStyle: {
      [theme.breakpoints.up("xs")]: {
        // display: "none",
        margin: "0 0.5rem 2rem 0.5rem",
      },
      [theme.breakpoints.up("sm")]: {
        display: "block",
        width: "98%",
        background: "#000",
        margin: "0 1rem 0 1rem",
      },
    },
  };
});
// create context for dark mode

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { mood, setMood } = useContext(ColorModeContext);

  // console.log(navbarInfo.styleNavbar);
  // function handle mode
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
        color="default"
        className={useStyle.header}
        position="sticky"
        sx={{ backgroundColor: "Background.default" }}
      >
        <Toolbar component="nav" variant="div" className={useStyle.firstNav}>
          <Box flexGrow={1}>
            <img
              src={headerData.logoWebsite.srcLogo}
              alt={headerData.logoWebsite.alt}
              className={useStyle.logo}
            />
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
                iconStyle: {
                  color: mood === "light" ? "#000" : "#fff",
                },
              },
              styleButton: {
                background: "palette.background.default",
              },
            }}
          />
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
                    NavLink: true,
                  },
                  styleButton: {
                    
                    textTransform: "none",
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
        </Toolbar>
        {/* line component */}
        <Box component="hr" className={useStyle.lineStyle}></Box>

        <Toolbar
          component="nav"
          variant="div"
          className={useStyle.secondNav}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {/* button desktop */}
          {headerData.routes.map((value, i) => {
            const { nameRoute, route } = value;
            const dataBtn = {
              routeButton: route,
              nameButton: nameRoute,
              typeButton: {
                NavLink: true,
              },
              activeStyle: true,
              styleButton: {
                margin: "0 1.5rem 0.5rem 2rem",
                textTransform: "none",
              },
            };

            return <Buttons key={i} buttonInfo={dataBtn} />;
          })}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
