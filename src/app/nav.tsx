"use client";
import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  SwipeableDrawer,
  Button,
} from "@mui/material";
import { Menu, Home, Phone, Shop } from "@mui/icons-material";

function AppDrawer(props: any) {
  return (
    <React.Fragment key={1}>
      <SwipeableDrawer
        variant="temporary"
        anchor={"left"}
        open={props.isOpen}
        onClose={() => {
          props.toggleDrawer(!props.isOpen);
          console.log(props.isOpen);
        }}
        onOpen={() => {
          props.toggleDrawer(!props.isOpen);
          console.log(props.isOpen);
        }}
      >
        <div>
          {["Home", "About", "Contacts", "Contents"].map((el) => (
            <h3 key={el + String(Math.random())}>
              <Shop /> {el}
            </h3>
          ))}
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default function MainNav() {
  let [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (action: boolean) => {
    setIsOpen(action);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="regular">
          <IconButton
            onClick={() => toggleDrawer(!isOpen)}
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
      <AppDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}
