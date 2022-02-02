import React, { useRef } from "react";
import { Container, Typography, Button, Grid, Divider } from '@mui/material';
import { CartSideBar, EmptyCart, SideBarHeader } from "./styles";
import CartItem from "../Cart/CartItem/CartItem";
import { Link } from 'react-router-dom';

import useStyles from './stylesCopy';

import useOnClickOutside from "../../Hooks/useOnClickOutside";

const CartSlide = ({ toggle, setToggle, cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const $sideBarRef = useRef();

  useOnClickOutside($sideBarRef, () => setToggle(false));

  const classes = useStyles();
    
    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You have no items in your shopping cart, start adding some!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid item spacing={0}>
            
                {cart.line_items.map((item) => (
                    <Grid item key={item.id}>
                        <CartItem item ={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid> 
            <div className={classes.toolbar}/>
            <Divider/>
            
            <div className={classes.cardDetails}>
                
                <Typography style={{fontWeight: '600'}} variant='body1'>
                    Subtotal:
                </Typography>
                <Typography style={{fontWeight: '600'}} variant='body1'>
                    {cart.subtotal.formatted_with_symbol}
                </Typography>
            
            </div>
            <div className={classes.buttons}>
                <Button className={classes.emptyButton} size='large' type='button' onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to="/checkout" className={classes.checkoutButton} size='large' type='button' onClick={() => setToggle(false)}>Checkout</Button>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

  return (
    <>
      <CartSideBar ref={$sideBarRef} className={toggle ? "expand" : "shrink"}>
        <SideBarHeader>Shopping Cart</SideBarHeader>
          {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </CartSideBar>
    </>
  );
};

export default CartSlide;
