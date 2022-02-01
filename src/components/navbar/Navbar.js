import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import headerData from "../../constants/headerData.json";
const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: "red" }}>
        <Toolbar component="nav">
          <Box
            component="img"
            src={headerData.logoWebsite.srcLogo}
            alt={headerData.logoWebsite.alt}
            sx={{ height: "60px", width: "70px" }}
          />
        </Toolbar>
        <Toolbar component="nav">{headerData.routes.map((value)=>{
            return(
                
            )
        })}</Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
