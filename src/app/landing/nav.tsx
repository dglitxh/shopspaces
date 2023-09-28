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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
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
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {props.menu.map((el: string) => (
              <Box key={el + String(Math.random())}>
                <ListItem>
                  <ListItemButton>
                    <ListItemText primary={el} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Box>
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
    <div id="nav">
      <AppBar position="sticky" color="transparent" enableColorOnDark>
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
                color="inherit"
                sx={{ my: 2, display: "block" }}
              >
                <Typography>{page}</Typography>
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
      <AppDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} menu={pages}/>
    </div>
  );
}
