"use client";
import {
  Container,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BACKEND, productsData } from "@/utils/data";
import { httpReq } from "@/utils/helpers";

export default function Catalog() {
  let [products, setProducts] = useState<Array<string | object>>(productsData);
  useEffect(() => {
    const getProds = async () => {
      const prods = await httpReq("GET", `${BACKEND}/stores/1/products`, "");
      setProducts(prods);
    };
    getProds();
  }, []);
  // useProductStore((state: any) => state.addProducts(products));
  // let items = useProductStore((state: any) => state.items);

  return (
    <Container>
      <Typography> My Catalog</Typography>
      {products &&
        products.map((el: any) => (
          <Card sx={{ maxWidth: 345, margin: 1 }} key={el.id}>
            {/* <CardMedia
            sx={{ height: 40 }}
            image="https://www.svgrepo.com/show/530443/interface-control.svg"
            title="green iguana"
          /> */}

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Add to cart</Button>
            </CardActions>
          </Card>
        ))}
    </Container>
  );
}
