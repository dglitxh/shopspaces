import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { aboutData } from "@/utils/data";

export function About() {
  return (
    <Container>
      <Grid container>
        {aboutData.map((el) => (
          <Box key={el.id}>
            <Grid item xs={12}>
              <Typography variant={"h2"} color="green">
                el.title
              </Typography>
              <Typography component={"p"}>el.text</Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
