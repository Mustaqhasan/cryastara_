import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Description from "../Components/Description";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../landingpage/Card";
import Card_2 from "../landingpage/Card_2";
import Carousel from "../landingpage/Carousel";
import Middle from "../landingpage/Middle";
import { getProductsCart } from "../Redux/Cart/action";

const Home = () => {
  const dispatch=useDispatch()
  const { Price, Saving, Item, cart, Pincode, wishlistItem, SubTotal } =
    useSelector((state) => {
      return {
        Price: state.cartReducer.Price,
        Saving: state.cartReducer.Saving,
        Item: state.cartReducer.Item,
        cart: state.cartReducer.cart,
        Pincode: state.cartReducer.Pincode,
        wishlistItem: state.cartReducer.wishlistItem,
        SubTotal: state.cartReducer.SubTotal,
      };
    });
  console.log("cart", cart);
  React.useEffect(() => {
    dispatch(getProductsCart());
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card />
      <Middle />
      <Card_2 />

      <Description/>
      <Footer/>
    </div>
  );
};

export default Home;
