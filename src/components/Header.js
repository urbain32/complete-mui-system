import { AppBar, Grid, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={6} border="1px solid #fff"></Grid>
          <Grid item sm={6} border="1px solid #000"></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
