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
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {cardData.map((el) => (
        <Card sx={{ maxWidth: 345, margin: 1, height: 250 }} key={el.id}>
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
            src={el.svg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
