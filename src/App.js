import React, { useState, useEffect } from "react";

import { Divider } from "@mui/material";

import { MainContainer, OverLay } from "./AppStyles";

import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import Gifts from "./Components/Products/Tabs/Gifts";
import TeddyBear from "./Components/Products/Tabs/TeddyBear";
import Flowers from "./Components/Products/Tabs/Flowers";
import GreetingCards from "./Components/Products/Tabs/GreetingCards";
import Chocolates from "./Components/Products/Tabs/Chocolates";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Products/Carousel/Carousel";
import Tabs from "./Components/Products/Tabs/Tabs";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import { commerce } from "./lib/commerce";
import CartSlide from "./Components/CartSlide/CartSlide";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState(false);

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list({ limit: 100 });
    const { data: categoriesData } = await commerce.categories.list();

    const productsPerCategory = categoriesData.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter(product =>
            product.categories.find(cat => cat.id === category.id)
          ),
        },
      ];
    }, []);
    setCategories(productsPerCategory);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async productId => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incommingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incommingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <>
        <MainContainer>{toggle && <OverLay />}</MainContainer>
        <Navbar totalItems={cart.total_items} setToggle={setToggle} />
        <CartSlide toggle={toggle} setToggle={setToggle} cart = {cart} handleUpdateCartQty={handleUpdateCartQty}handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />

        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route
            exact
            path="/home"
            element={
              <Chocolates
                categories={categories}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            exact
            path="/teddy-bear"
            element={
              <TeddyBear
                categories={categories}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            exact
            path="/flowers"
            element={
              <Flowers categories={categories} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            exact
            path="/gifts"
            element={
              <Gifts categories={categories} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            exact
            path="/greeting-cards"
            element={
              <GreetingCards
                categories={categories}
                onAddToCart={handleAddToCart}
              />
            }
          />

          {/* <Route exact path="/cart" element={<Cart cart = {cart} handleUpdateCartQty={handleUpdateCartQty}handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} /> */}
          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
                refreshCart={refreshCart}
              />
            }
          />
        </Routes>
        <Footer/>
      </>
    </Router>
    
  );
}

export default App;
