import React from "react";
import { Grid, Divider } from "@mui/material";

import Carousel from "./Carousel/Carousel";
import Gifts from "./Tabs/Gifts";
import TeddyBear from "./Tabs/TeddyBear";



import Tabs from "./Tabs/Tabs";

import useStyles from "./Tabs/styles";

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
      <Carousel />
      <Divider />
      <Tabs categories={categories} onAddToCart={onAddToCart} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {categories.map(category => {
            console.log(categories)
          return (
            category.name === "Gifts" ? (
              <Gifts category={category} onAddToCart={onAddToCart} />
            ) : category.name === "Teddy Bear" &&
            (
                <TeddyBear category={category} onAddToCart={onAddToCart} />
            ) 
          );
        })}
      </main>
    </>
  );
};

export default Products;
