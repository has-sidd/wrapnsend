import React from "react";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
// import './style.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/bag.png'
import useStyles from './styles';

const Navbar = ({ totalItems, setToggle }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/home" variant="h6" className={classes.title} color="inherit">
          <img src={logo} height='40px' alt="Wrap'n Send" className={classes.image} /> Wrap'n Send
          </Typography>
          <div className={classes.grow} />
          {location.pathname !== '/cart' && (
          <div className={classes.button}>
            <IconButton  aria-label="Show cart items" onClick={() => setToggle(true)}>
              <Badge badgeContent={totalItems}color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
    </>
  );
};

export default Navbar;
