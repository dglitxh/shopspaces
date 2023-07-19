import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export default function MainNav() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="regular">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                    Photos
                    </Typography>
                </Toolbar>
                </AppBar>
        </div>
    )
}