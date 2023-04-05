import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleProductPage from "../Components/SingleProductPage";
import Cart from "../Pages/cart";
import Home from "../Pages/Home";
import PaymentMethod from "../Pages/payment-method";
import CardsForPay from "../Pages/paymentCard";
import PaymentOptions from "../Pages/paymentOptions";
import Rings from "../Pages/Products";
import UserLogin from "../Pages/userLogin";
import UserSignUp from "../Pages/userSignUp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Rings />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/paymentoptions" element={<PaymentOptions />} />
        <Route path="/cards" element={<CardsForPay />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignup" element={<UserSignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
