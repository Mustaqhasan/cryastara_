import React from "react";
import styles from "../Styles/cart.module.css";
import { CiPercent } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Redux/Cart/actionTypes";
import { Heading, Image, Link } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import {
  deleteCartItem,
  getProductsCart,
  subTotalFound,
  TotalItemFound,
  TotalpriceFound,
  TotalsavingFound,
} from "../Redux/Cart/action";

const Cart = () => {
  // const [cart, setcart] = React.useState([]);
  const dispatch = useDispatch();

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
  console.log("cart in cart", cart);
  // console.log(wishlistItem);
  const totalitem = cart?.length;

  const ref = React.useRef([]);

  const [sum, setsum] = React.useState(0);
  const [originalsum, setoriginalsum] = React.useState(0);
  const [discount, setdiscount] = React.useState(0);

  React.useEffect(() => {
    // axios.get(`http://localhost:8080/cart`).then((res)=>{
    //   dispatch({type:types.Get, payload:res.data})
    // });
    dispatch(getProductsCart());
  }, [totalitem, sum]);
  React.useEffect(() => {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    if (cart.length != 0) {
      for (let i = 0; i < cart.length; i++) {
        sum1 += cart[i].currentPrice * ref.current[i].value;
        sum3 += cart[i].originalPrice * ref.current[i].value;

        if (cart.length != 0 && cart[i].originalPrice != "") {
          sum2 +=
            (Number(cart[i].originalPrice) - Number(cart[i].currentPrice)) *
            ref.current[i].value;
        }
      }

      setsum((prev) => prev + sum1);
      setoriginalsum((prev) => prev + sum3);
      // dispatch(subTotalFound(originalsum))
      dispatch(TotalpriceFound(sum1));
      setdiscount((prev) => prev + sum2);
      dispatch(TotalsavingFound(sum2));
      dispatch(TotalItemFound(totalitem));
    }
    localStorage.setItem("total", JSON.stringify(sum1));
    localStorage.setItem("save", JSON.stringify(sum3));
  }, [cart.length, totalitem]);

  const handlechange = () => {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let i = 0; i < cart.length; i++) {
      sum1 += cart[i].currentPrice * ref.current[i].value;
      sum3 += cart[i].originalPrice * ref.current[i].value;

      if (cart[i].originalPrice != "") {
        sum2 +=
          (Number(cart[i].originalPrice) - Number(cart[i].currentPrice)) *
          ref.current[i].value;
      }
    }
    setsum(sum1);
    dispatch(TotalpriceFound(sum1));
    setoriginalsum(sum3);
    setdiscount(sum2);
    dispatch(TotalsavingFound(sum2));
    dispatch(TotalItemFound(totalitem));
  };

  // const Renderdata = () => {
  //   axios
  //     .get(`http://localhost:8080/cart`)
  //     .then((res) => setcart(res.data))
  //     .catch((err) => console.log("error"));
  // };

  const del = (id) => {
    // axios.delete(`http://localhost:8080/cart/${id}`).then((res)=>{
    //   console.log(res)
    //   // dispatch({type:types.DEL_CART,payload:res.data})
    // });
    dispatch(deleteCartItem(id));
    dispatch(getProductsCart());
  };
  // const del = (id) => {
  //   axios
  //     .delete(`http://localhost:8080/cart/${id}`)
  //     .then((res) => setcart(res.data))
  //     .catch((err) => console.log(err));
  // };

  // const delfun = (id) => {
  //   del(id);
  // };
  //  console.log(cart)

  // const wishlistPost=(id)=>{
  //     let dummy = cart.filter((el)=>{
  //         return el.id==id
  //     })
  //     console.log(dummy[0])

  //     let data = dummy[0]

  //   axios
  //     .post(`http://localhost:8080/wishlist`, data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log("error"));
  //   delfun(id)
  //   router.push("/wishList")

  // }

  return (
    <>
      <Heading>
        <title> cart page </title>
      </Heading>

      <Navbar />

      <div className={styles.cartmainDiv}>
        <div className={styles.cartdiv1}>
          <div className={styles.pointDiv}>
            <p className={styles.P13}>
              {" "}
              Get ₹ 12671 xCLusive points on this order.
            </p>
            <p className={styles.P14}>
              You can redeem these points on your next order
            </p>
            <p className={styles.P14}>
              ( 1 Point = 1 rupee ){" "}
              <span className={styles.know}> Know More </span>{" "}
            </p>
          </div>

          <p className={styles.P15}>
            {" "}
            {`Total (${totalitem} Items) : ₹ ${Price}`}{" "}
          </p>

          {cart.length > 0 &&
            cart.map((el, i) => {
              return (
                <div className={styles.singleCart} key={el.id}>
                  <div className={styles.singleCart1}>
                    <Image src={el.src1} width={250} height={250} alt="pic" />
                  </div>
                  <div className={styles.singleCart2}>
                    <p className={styles.P14}> {el.name}</p>
                    <p className={styles.P16}>UT00702-1Y0000</p>
                    <p className={styles.P17}>
                      Quantity :
                      <select
                        className={styles.select}
                        ref={(ele) => {
                          ref.current[i] = ele;
                        }}
                        onClick={() => handlechange(i)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>{" "}
                    </p>

                    <p className={styles.P18}>Delivery by - Tomorrow</p>
                    <p>
                      {" "}
                      <span className={styles.span1}>
                        ₹{~~el.currentPrice}
                      </span>{" "}
                      <span className={styles.span2}>
                        ₹{~~el.originalPrice}
                      </span>{" "}
                      <span className={styles.span3}>
                        Save ₹{~~el.originalPrice - ~~el.currentPrice}
                      </span>{" "}
                    </p>
                  </div>
                  <div className={styles.singleCart3}>
                    <button
                      className={styles.removeBtn}
                      onClick={() => del(el.id)}
                    >
                      {" "}
                      Remove
                    </button>
                    <button className={styles.wishListBtn}>
                      {" "}
                      Move to Wishlist
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className={styles.cartdiv2}>
          <div className={styles.coupondiv}>
            <p className={styles.P19}>
              {" "}
              <CiPercent className={styles.percentIcon} /> Apply Coupon{" "}
              <span className={styles.available}> - 2 Available</span>{" "}
            </p>
          </div>

          <div className={styles.coupondiv2}>
            <p className={styles.P19}>
              {" "}
              <BsTruck className={styles.percentIcon2} />{" "}
              <span className={styles.available2}>Deliver to </span> - {Pincode}{" "}
            </p>
          </div>

          <p className={styles.P20}>Order Summary</p>

          <div className={styles.orderdiv}>
            <div className={styles.orderdiv1}>
              <div className={styles.orderInsideDiv1}>Subtotal</div>
              <div>₹ {Price - Saving}</div>
            </div>

            <div className={styles.orderdiv1}>
              <div className={styles.orderInsideDiv1}>You Saved</div>
              <div className={styles.orderInsideDiv2}>- ₹ {Saving}</div>
            </div>

            <div className={styles.orderdiv1}>
              <div className={styles.orderInsideDiv1}>Coupon Discount</div>
              <div className={styles.orderInsideDiv3}>Apply Coupon</div>
            </div>

            <div className={styles.orderdiv1}>
              <div className={styles.orderInsideDiv1}>
                Delivery Charge (Standard)
              </div>
              <div className={styles.orderInsideDiv2}>FREE</div>
            </div>

            <div className={styles.orderdiv1}>
              <div className={styles.orderInsideDiv5}>TOTAL COST</div>
              <div className={styles.orderInsideDiv5}>₹ {Price}</div>
            </div>
          </div>

          <Link href={"/payment-method"}>
            <button className={styles.checkout}>
              {" "}
              <FaLock className={styles.lockIcon2} /> Checkout Securely
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.cartfooter}>
        <p className={styles.P26}>
          Contact Us: +91-44-42935000 (Helpline) | contactus@caratlane.com
        </p>
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   let res = await fetch(`http://localhost:8080/cart`);
//   let data = await res.json();

//   return { props: { data } };
// }

export default Cart;
