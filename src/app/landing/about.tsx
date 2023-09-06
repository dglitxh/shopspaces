import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography} from "@mui/material";
import { aboutData } from "@/utils/data";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        {aboutData.map((el) => (
          <Box key={el.id}>
            <Grid item xs={12}>
              <Item>
                <Typography variant={"h2"} color="green">
                  {el.title}
                </Typography>
              </Item>

              <Typography component={"p"}>{el.text}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Image src={el.img} width={500} height={500} alt="grid pic" />
            </Grid>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
