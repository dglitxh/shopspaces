"use client";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

export default function Hero() {
  useTheme();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          background: "rgba(53, 224, 87, 0.043)",
          borderBottomLeftRadius: 370,
          borderBottomRightRadius: 370,
          fontFamily: "Raleway",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          p={"10%"}
          sx={{
            fontSize: { lg: "200%", md: "200%" },
          }}
        >
          <Typography fontSize={"250%"} variant={"h2"} gutterBottom>
            <Typography
              fontSize={"110%"}
              color={"#00ED64"}
              variant={"h2"}
              component={"span"}
            >
              {" "}
              Shopspace.
            </Typography>{" "}
            builds virtual stores in minutes
          </Typography>

          <Typography component={"p"} color={"grey"}>
            Set up your online shop in a matter of minutes and have the best
            protection, fairness and insight into your merchandise. Around the
            clock support is assured.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
