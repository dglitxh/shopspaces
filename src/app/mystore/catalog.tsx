import {
  Container,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BACKEND } from "@/utils/data";
import { httpReq } from "@/utils/helpers";

export default async function Catalog() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProds = async () => {
      const prods = await httpReq("GET", `${BACKEND}/products`, "");
      setProducts(prods);
    };
    getProds();
  });

  return (
    <Container>
      <Typography> My Catalog</Typography>
      {products.map((el: any) => (
        <Card sx={{ maxWidth: 345, margin: 1 }} key={el.id}>
          {/* <CardMedia
            sx={{ height: 40 }}
            image="https://www.svgrepo.com/show/530443/interface-control.svg"
            title="green iguana"
          /> */}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ( el.name)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el}
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