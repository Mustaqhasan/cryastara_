import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Link,
  Image
} from "@chakra-ui/react";
import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCart } from "../Redux/Cart/action";

const PaymentOptions = () => {
  // let totalPrice=JSON.parse(localStorage.getItem("total"))
  // let totalSave=JSON.parse(localStorage.getItem("save"))

  // const { Price, Saving, Item, cart } = useSelector((state) => {
  //   return {
  //     Price: state.cartReducer.Price,
  //     Saving: state.cartReducer.Saving,
  //     Item: state.cartReducer.Item,
  //     cart: state.cartReducer.cart,
  //   };
  // })

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
    //   console.log("cart", Price);
    //   console.log("Saving", Saving);
    let ogPrice = 0;
    let crPrice = 0;
    cart?.map((el) => {
      ogPrice += el.originalPrice;
      crPrice += el.currentPrice;
    });
    console.log(ogPrice, "original price");
    console.log(crPrice, "current price");
    React.useEffect(() => {
      dispatch(getProductsCart());
    }, []);
  return (
    <Box bgColor={"gray.100"}>
      <Center
        w={"50%"}
        margin="auto"
        // marginTop={"1rem"}
        color="black"
        // border={"1px solid #f5f5f5"}
        bgColor="white"
        paddingTop={"1rem"}
        paddingBottom={"15rem"}
      >
        <Flex>
          <Box p="4">
            <Flex align={"center"} justifyContent="space-between">
              <Link href={"/payment-method"}>
                <Flex gap={2}>
                  <HiArrowLeft cursor={"pointer"} size={30} />
                  <p style={{ fontWeight: "bold" }}>Back</p>
                </Flex>
              </Link>
              <Box border={"1px solid #f5f5f5"}>
                <Stack padding={3}>
                  <Image
                    src={
                      "https://web-assets.payu.in/web/images/assets/logo/631035cddb8f2"
                    }
                    alt="payment-optipn-logo"
                    height={50}
                    width={50}
                  />
                </Stack>
              </Box>
            </Flex>
            <br />
            {/* <h1 style={{fontWeight:"bolder", fontSize:""}}>Choose a payment Option</h1> */}
            <Text fontSize={"xl"} fontWeight="bold">
              Choose a payment option
            </Text>
            <br />
            <Flex align={"center"} justifyContent="space-between">
              <p>payable now</p>
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                ₹{crPrice-(ogPrice-crPrice)}
              </p>
            </Flex>
            <br />
            <h6>Transaction id: FSHJAH6S3</h6>
          </Box>
          <Spacer />
          <Box p="4">
            <h1 style={{ color: "#c5a899" }}>PAYMENT OPTIONS</h1>
            <Box
              border={"5px solid purple"}
              borderBottom="none"
              borderTop={"none"}
              borderRight="none"
              marginTop={"1rem"}
              gap={"4rem"}
              p={"1rem"}
            >
              {paymentOptions.map((item) => {
                return (
                  <>
                    <Link href={item.url} key={item.id}>
                      <Flex
                        cursor={"pointer"}
                        paddingTop={"1.5rem"}
                        paddingBottom="1.5rem"
                        align="center"
                        key={item.id}
                        justifyContent={"space-between"}
                      >
                        <Flex align={"center"} gap={"0.5rem"}>
                          <Box>
                            <Image
                              src={item.logo}
                              alt="prd"
                              height={10}
                              width={20}
                            />
                          </Box>
                          <Box>
                            <p>{item.name}</p>
                            <p
                              style={{
                                fontSize: "10px",
                              }}
                            >
                              {item.desc}
                            </p>
                            {/* <p>{item.date}</p> */}
                          </Box>
                        </Flex>
                        <Box>
                          <p
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            <IoIosArrowForward />
                          </p>
                        </Box>
                      </Flex>
                      <Divider />
                    </Link>
                  </>
                );
              })}
            </Box>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

const paymentOptions = [
  {
    logo: "https://api.payu.in/public/assets/images/card-icon.svg",
    name: "Credit Card",
    desc: "Pay using any credit card",
    id: 1,
    url: "/cards",
  },
  {
    logo: "https://api.payu.in/public/assets/images/upi-icon.svg",
    name: "UPI",
    desc: "Pay with any UPI app like Phonepay, Paytm,Google Pay and more",
    id: 2,
    url: "",
  },
  {
    logo: "https://api.payu.in/public/assets/images/gpay.svg",
    name: "Google Pay",
    desc: "Pay using any credit card",
    id: 3,
    url: "",
  },
  {
    logo: "https://api.payu.in/public/assets/images/upi-logos/upi2/WhatsApp.svg",
    name: "WhatsApp",
    desc: "Pay using any credit card",
    id: 4,
    url: "",
  },
];
export default PaymentOptions;
