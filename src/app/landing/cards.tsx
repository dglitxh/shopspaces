import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@mui/material";
import Image from "next/image";
import { Home } from "@mui/icons-material";
import { cardData } from "@/utils/data";

export default function MediaCards() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cardData.map((el) => (
        <Card sx={{ maxWidth: 345, margin: 1 }} key={el.id}>
          {/* <CardMedia
            sx={{ height: 40 }}
            image="https://www.svgrepo.com/show/530443/interface-control.svg"
            title="green iguana"
          /> */}
          <Image
            width="60"
            height="60"
            alt="svg"
            style={{ marginLeft: "5%" }}
            src="https://www.svgrepo.com/show/530443/interface-control.svg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
