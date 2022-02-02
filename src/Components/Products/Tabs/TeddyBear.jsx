import React from "react";
import Product from "../Product/Product";
import Carousel from "../../Products/Carousel/Carousel";
import Tabs from "./Tabs";

import useStyles from "./styles";

import { Grid, Divider } from "@mui/material";

const TeddyBear = ({ categories, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
      <Carousel />
      <Divider />
      <Tabs categories={categories} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {categories
          .filter(category => category.name === "Teddy Bear")
          .map(category => (
            <Grid
              key={category.id}
              container
              justifyContent="center"
              spacing={4}
            >
              {category.productsData.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          ))}
      </main>
    </>
  );
};

export default TeddyBear;
