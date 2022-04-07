import React, { useState } from "react";
import { AppBar, Toolbar, Tab, Tabs, Typography } from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { value, setValue } = useState();
  

  return (
    <>
      <AppBar color="">
        <Toolbar>
          <NavLink to="/">
            <Typography>
              <TheaterComedyIcon fontSize="large" sx={{ ml: "2rem" }} />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/" label="Home" />
            <Tab LinkComponent={NavLink} to="/movies" label="Movie" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Movie" />
            {/* <Tab LinkComponent={NavLink} to="/about" label="About Movie" /> */}
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
