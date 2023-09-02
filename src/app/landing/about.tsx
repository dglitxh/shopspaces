import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import aboutData from "@utils/data";

export function About() {
  return (
    <Container>
      <Grid container>
        {data.map((el) => (
          <Box id={el.id}>
            <Grid item>
              <Typography variant={"h2"} color="green">
                aboutData.title
              </Typography>
              <Typography variant="p">aboutData.text</Typography>
            </Grid>
            <Grid item></Grid>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
