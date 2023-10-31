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
import { BACKEND } from "@/utils/data";
import { httpReq } from "@/utils/helpers";
import { useProductStore } from "@/utils/data";

export default function Catalog() {
  let products: Array<any> = [];
  useEffect(() => {
    const getProds = async () => {
      const prods = await httpReq("GET", `${BACKEND}/products`, "");
      console.log(prods);
      products = prods;
    };
    getProds();
  }, []);
  // useProductStore((state: any) => state.addProducts(products));
  // let items = useProductStore((state: any) => state.items);

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
