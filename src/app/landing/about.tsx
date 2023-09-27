"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { aboutData } from "@/utils/data";

export default function About() {
  const [vp, setVp] = useState(0)
  useEffect(() => {
    setVp(window.innerWidth)
  },[])
  const RandCol = (props: any) => {
    let title: string = props.title;
    let arr = title.split(" ");
    let r = Math.floor(Math.random() * arr.length);
    const partA = arr.slice(0, r).join(" ") + " ";
    const partB = " " + arr.slice(r + 1).join(" ");
    let colored = arr[r];
    return (
      <Typography fontSize={"110%"} variant={"h3"}>
        {partA}
        <Typography color={"primary"} component="span" fontSize={"110%"}>
          {colored}
        </Typography>
        {partB}
      </Typography>
    );
  };
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
      <Box p={"10%"}>
        {aboutData.map((el) =>
          el.id % 2 != 0 || vp < 520 ? (
            <Grid container spacing={8} my="8%" key={el.id}>
              <Grid item xs={12} lg={6} xl={6} md={6}>
                {el.img}
              </Grid>
              <Grid
                item
                lg={6}
                xl={6}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant={"h3"}>
                  <RandCol title={el.title} />
                </Typography>
                <Typography component={"p"} color="gray">
                  {el.text}
                  <br></br>
                  <br></br>
                  <Button variant="outlined" color="info">
                    Learn more
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={8} key={el.id}>
              <Grid
                item
                lg={6}
                xl={6}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant={"h3"}>
                  <RandCol title={el.title} />
                </Typography>
                <Typography component={"p"} color="gray">
                  {el.text}
                  <br></br>
                  <br></br>
                  <Button variant="outlined" color="info">
                    Learn more
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6} xl={6} md={6}>
                {el.img}
              </Grid>
            </Grid>
          )
        )}
      </Box>
    </Container>
  );
}
