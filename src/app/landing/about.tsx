import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { aboutData } from "@/utils/data";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
      <Box p={"10%"}>
        {aboutData.map((el) => (
          <Grid container spacing={2} key={el.id} p={"5%"}>
            <Grid item lg={6} xl={6} md={6}>
              <Typography variant={"h2"}>{el.title}</Typography>
              <Typography component={"p"}>{el.text}</Typography>
            </Grid>
            <Grid item xs={12} lg={6} xl={6} md={6}>
              <Image src={el.img} width={300} height={300} alt="grid pic" />
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  );
}
