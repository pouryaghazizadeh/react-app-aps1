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
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import headerData from "../../constants/headerData.json";
import { ColorModeContext } from "../../helper/modeColorContext";
import Buttons from "../button/Button";

const Header = styled(AppBar)(({ theme }) => {
  return {
    background: theme.palette.background.secondary,
  };
});
const Logo = styled("img")(({ theme }) => {
  return {
    height: "60px",
    width: "70px",
    margin: "0.3em  0  0 0",
    background: theme.palette.text.icon,
  };
});

const ContainerMenuMobile = styled(Box)(({ theme }) => {
  return {
    color: theme.palette.text.icon,
    [theme.breakpoints.up("xs")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  };
});
const FirstNav = styled(Toolbar)(({ theme }) => {
  return {
    background: theme.palette.background.default,
    width: "100%",
    padding: "0px",
  };
});
const SecondNav = styled(Toolbar)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: { display: "none" },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  };
});
const Line = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      margin: "0 0.5rem 2rem 0.5rem",
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "98%",
      background: "#000",
      margin: "0 1rem 0 1rem",
    },
  };
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { mood, setMood } = useContext(ColorModeContext);

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

  return (
    <>
      <Header enableColorOnDark color="inherit" position="sticky">
        <FirstNav component="nav" variant="div">
          <Box flexGrow={1}>
            <Logo
              src={headerData.logoWebsite.srcLogo}
              alt={headerData.logoWebsite.alt}
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
          <ContainerMenuMobile>
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
          </ContainerMenuMobile>
        </FirstNav>
        {/* line component */}
        <Line component="hr"></Line>

        <SecondNav component="nav" variant="div">
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
              },
            };

            return (
              <Buttons key={i} buttonInfo={dataBtn} typeButton="primary" />
            );
          })}
        </SecondNav>
      </Header>
    </>
  );
};

export default Navbar;
