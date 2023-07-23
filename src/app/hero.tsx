"use client";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

export default function Hero() {
  useTheme();
  return (
    <Box
      sx={{
        background: "rgba(53, 224, 87, 0.043)",
        borderBottomLeftRadius: 370,
        borderBottomRightRadius: 370,
        fontFamily: 'Raleway'
      }}
    >
      <Box
        mx={50}
        p={20}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography fontSize={110} component={"h2"}>
          <Typography fontSize={100} color={"#00ED64"} component={"span"}>
            {" "}
            ShopSpaces.
          </Typography>
          Builds virtual stores in minutes
        </Typography>
        <Typography
          fontFamily={"raleway"}
          component={"p"}
          fontSize={20}
          color={"grey"}
        >
          Set up your online shop in a matter of minutes and have the best
          protection, fairness and insight into your merchandise. Around the
          clock support is assured.
        </Typography>
      </Box>
    </Box>
  );
}
