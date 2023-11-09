"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { aboutData } from "@/utils/data";
import dynamic from "next/dynamic";

const RandCol = dynamic(() => import("../components/colHeading"), {
  ssr: false,
});

export default function About() {
  const [vpWidth, setVpWidth] = useState(0);
  const theme = useTheme();
  useEffect(() => {
    setVpWidth(window.innerWidth);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, marginTop: 0 }}>
      <Box p={"10%"}>
        {aboutData.map((el) =>
          el.id % 2 != 0 || vpWidth < 800 ? (
            <Grid container spacing={8} my="3%" key={el.id}>
              <Grid item xs={12} lg={6} xl={6} md={6}>
                <el.img color={theme.palette.primary.main} />
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
                <Typography variant="h3">
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
            <Grid container spacing={8} my="2%" key={el.id}>
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
                <Typography variant="h3">
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
                <el.img color={theme.palette.primary.main} />
              </Grid>
            </Grid>
          )
        )}
      </Box>
    </Container>
  );
}
