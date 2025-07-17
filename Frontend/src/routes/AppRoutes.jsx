import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/auth/LandingPage.jsx';
import LoginPage from '../pages/auth/LoginPage.jsx';
import RegisterPage from '../pages/auth/RegisterPage.jsx';
import HomePage from '../pages/home/HomePage.jsx';
import FoodPage from '../pages/food/FoodPage.jsx';
import EssentialsPage from '../pages/essentials/EssentialsPage.jsx';
import MenuPage from '../pages/menu/MenuPage.jsx';
import CartPage from '../pages/cart/CartPage.jsx';
import Checkout from '../pages/checkout/CheckoutPage.jsx';
import OrderDetailsPage from '../pages/orderdetails/OrderDetailsPage.jsx';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />   
      <Route path="/login" element={<LoginPage />} />      
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/essentials" element={<EssentialsPage />} />
      <Route path="/restaurant/:id/menu" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<OrderDetailsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
