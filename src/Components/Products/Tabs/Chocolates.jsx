import React from "react";
import Product from "../Product/Product";
import Carousel from '../../Products/Carousel/Carousel';
import Tabs from "./Tabs";
import left from '../../../assets/left.jpg';
import right from '../../../assets/right.jpg';

import useStyles from "./styles";

import { Grid, Divider } from "@mui/material";

const Chocolates = ({ categories, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
      
      <Carousel />
      <Divider />
      <Tabs categories={categories} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        {categories
          .filter(category => category.name === "Chocolates")
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
      <Grid container spacing={2}>
      
        <div className="row my-5 justify-content-evenly">
          <div className="col-5">
            <img className="img-fluid" src={left} alt="" srcset="" />
          </div>
          <div className="col-5">
          <img className="img-fluid" src={right} alt="" srcset="" />
        </div>
      </div>
          
          
          
      </Grid>
    </>
  );
};

export default Chocolates;
