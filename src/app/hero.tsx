import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography fontSize={120} color={"green"} component={"h1"}>
        ShopSpaces
      </Typography>
    </Box>
  );
}
