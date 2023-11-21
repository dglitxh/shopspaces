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
  Badge,
  ListItemText,
  Divider,
  useScrollTrigger,
  Container,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext } from "@/utils/theme";
import { useTheme } from "@mui/material/styles";
import {
  Menu,
  Home,
  Phone,
  ShoppingCart,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import Link from "next/link";
import { SITENAME } from "@/utils/data";

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

function ElevationScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function MainNav(props: any) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  let [isOpen, setIsOpen] = React.useState(false);
  const pages = ["Home", "About", "Gallery", "Pricing"];
  const toggleDrawer = (action: boolean) => {
    setIsOpen(action);
  };
  return (
    <Container id="nav" sx={{ mb: "8%" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
          enableColorOnDark
        >
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
              <Link href={"/"}>{SITENAME}</Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {}}
                  color="inherit"
                  sx={{ my: 2, display: "block" }}
                >
                  <Link href={`/#${page.toLowerCase()}`}>
                    <Typography>{page}</Typography>
                  </Link>
                </Button>
              ))}
            </Box>

            <Button color="inherit">
              <Link href="/auth/signin">Get started</Link>
            </Button>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              focusRipple={true}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <AppDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} menu={pages} />
    </Container>
  );
}
