"use client";
import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  SwipeableDrawer,
  Button,
  Box,
} from "@mui/material";
import { ColorModeContext } from "@/utils/theme";
import { useTheme } from "@mui/material/styles";
import {
  Menu,
  Home,
  Phone,
  Shop,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

function AppDrawer(props: any) {
  const { isOpen, toggleDrawer } = props;

  return (
    <React.Fragment key={1}>
      <SwipeableDrawer
        variant="temporary"
        anchor={"left"}
        open={props.isOpen}
        onClose={() => {
          props.toggleDrawer(!isOpen);
          console.log(isOpen);
        }}
        onOpen={() => {
          toggleDrawer(!isOpen);
          console.log(isOpen);
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
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  let [isOpen, setIsOpen] = React.useState(false);
  const pages = ["Home", "About", "Gallery", "Contact"];
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
            sx={{ mr: 2, display: { md: "none", lg: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            ShopSpaces.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {}}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            focusRipple={true}
          >
            <Home />
          </IconButton>
          <Button color="inherit">Login</Button>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}
