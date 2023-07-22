import { Container, Grid } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Container sx={{ height: "100vh", width: "100vw" }}>
      <Grid sx={{ display: { xs: 12, sm: 12, md: 6, lg: 6 } }}>
        <h3>Yours Truly the boy</h3>
      </Grid>
      <Grid sx={{ display: { xs: 12, sm: 12, md: 6, lg: 6 } }}>
        <h1>Is Going To School</h1>
      </Grid>
    </Container>
  );
}
