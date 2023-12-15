"use client";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BACKEND, productsData } from "@/utils/data";
import { httpReq } from "@/utils/helpers";
import Image from "next/image";

export default function Catalog() {
  let [products, setProducts] = useState<Array<string | object>>(productsData);
  useEffect(() => {
    const getProds = async () => {
      const prods = await httpReq("GET", `${BACKEND}/stores/1/products`, "");
      prods && setProducts(prods);
    };
    getProds();
  }, []);
  // useProductStore((state: any) => state.addProducts(products));
  // let items = useProductStore((state: any) => state.items);

  return (
    <Container>
      <Grid container spacing={8}>
        {products &&
          products.map((el: any) => (
            <Grid
              key={String(Math.random() + Math.random())}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
            >
              <Paper key={el.name + String(Math.random())}>
                <a href="#">
                  <Image
                    className="p-8 rounded-t-lg"
                    src="/docs/images/products/apple-watch.png"
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight ">
                      {el.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Typography variant={"h6"} color="secondary">
                        {el.category}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold ">$ {el.price}</span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
