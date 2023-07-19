import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, Home } from "@mui/icons-material";

export default function MainNav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            focusRipple={true}
          >
            <Home />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
