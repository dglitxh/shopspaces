"use client";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        margin: 0,
      }}
    >
      <Box
        sx={{
          // background: "rgba(53, 224, 87, 0.043)",
          borderBottomLeftRadius: 370,
          borderTopRightRadius: 370,
          fontFamily: "Raleway",
          height: "105vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          p={"10%"}
          sx={{
            fontSize: { lg: "200%", md: "150%" },
          }}
        >
          <Typography fontSize={"250%"} variant={"h2"}>
            <Typography
              fontSize={"120%"}
              color={"primary"}
              variant={"h2"}
              component={"span"}
            >
              {" "}
              Shopspaces.
            </Typography>{" "}
            builds your virtual stores in a flash.
          </Typography>

          <Typography
            component={"p"}
            color={"grey"}
            fontSize={"22px"}
            maxWidth={"sm"}
            gutterBottom
          >
            Welcome to shopspaces, the ultimate destination for unleashing your
            entrepreneural spirit! 🛍️ Create your personal online shop
            effortlessly and share your passion with the world.
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Get started</Button>
            <Button variant="contained" color="primary">
              Learn more
            </Button>
          </Stack>
        </Box>
      </Box>
      {/* <Image
        width="520"
        height={"520"}
        alt="Illustration preview"
        style={{
          position: "absolute",
          opacity: 0.2,
          right: "10%",
          top: "55%",
        }}
        // src="https://backend-prod.absurd.design/uploads/ckvtk1tdt000z14r034jr4nrk.jpg"
        src="https://backend-prod.absurd.design/uploads/ckvtjdc08000114r081x1axyx.jpg"
      /> */}
    </Container>
  );
}
