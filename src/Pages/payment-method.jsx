import React, { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Heading,
  Divider,
  border,
  Textarea,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Collapse,
  Grid,
  Image,
} from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
// import Image from "next/image";
// import FooterPaymentMethod from "@/components/Footer-Payment-Method";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillQuestionCircle, BiRupee } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import FooterPaymentMethod from "../Components/Footer-Payment-Method";
import { getProductsCart } from "../Redux/Cart/action";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function PaymentMethod({ data }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuth] = useState(true);
  const [value, setValue] = useState("1");
  //   const { Price, Saving, Item, cart } = useSelector((state) => {
  //     return {
  //       Price: state.cartReducer.Price,
  //       Saving: state.cartReducer.Saving,
  //       Item: state.cartReducer.Item,
  //       cart: state.cartReducer.cart,
  //     };
  //   });
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
    <>
      <Box
        className="sticky"
        bg={useColorModeValue("#E9D5EF", "gray.900")}
        px={4}
        minH={"5rem"}
        boxShadow={"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        width="100%"
      >
        <Flex alignItems={"center"} gap={10}>
          <Flex alignItems={"center"}>
            <Link href={"/cart"}>
              <Stack direction={"row"} spacing={7}>
                <HiArrowLeft size={30} />
              </Stack>
            </Link>
          </Flex>
          <Flex align={"center"} justifyContent="center">
            <Image
              src={"/same_color1.png"}
              alt="logo"
              width={150}
              height={70}
            />
          </Flex>
        </Flex>
      </Box>
      {/* <Flex justifyContent={"space-between"} width={"100%"} direction={{ sm: "column", lg: "row" }}> */}
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        direction={{ base: "column", sm: "column", lg: "row" }}
      >
        <Stack width={{ base: "100%", sm: "100%", lg: "50%" }}>
          <Accordion defaultIndex={[2]}>
            <AccordionItem id="login-section" isFocusable>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "black", color: "white" }}
                  // gap={10}
                  paddingLeft={10}
                >
                  <Box height={"2.3rem"} as="span" flex="1" textAlign="left">
                    1. Log In
                  </Box>
                  {isAuth ? <BsCheckCircleFill /> : ""}
                </AccordionButton>
              </h2>
              <AccordionPanel
                paddingLeft={{ base: "0", sm: "0", lg: "10" }}
                pb={4}
              >
                <Stack bgColor={"rgba(249, 246, 246, 0.868)"}>
                  <Box textAlign={"left"} margin={"auto"}>
                    Logged in as {"shaikhmustaq7714gmai.com"}
                    <br />
                    <Button bgColor={"purple.300"}>Continue to Checkout</Button>
                    <br />
                    use a different account:<Link>Log out</Link>
                  </Box>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  id="shipping-section"
                  paddingLeft={10}
                  _expanded={{ bg: "black", color: "white" }}
                >
                  <Box height={"2.3rem"} as="span" flex="1" textAlign="left">
                    2. Shipping Address
                  </Box>
                  {isAuth ? <BsCheckCircleFill /> : ""}
                </AccordionButton>
              </h2>
              <AccordionPanel paddingLeft={10} pb={4}>
                <Stack
                  // paddingLeft={"3rem"}
                  paddingLeft={{ base: "0", sm: "0", lg: "10" }}
                  bgColor={"rgba(249, 246, 246, 0.868)"}
                >
                  <h1
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    Shipping Adress
                  </h1>

                  <Box
                    // width={"2rem"}
                    height={"auto"}
                    border={"3px solid purple"}
                    width="20rem"
                    padding={3}
                    bg="Background"
                  >
                    <h1>Mustaq Shaikh</h1>
                    <p>09/11</p>
                    <p>Nanded , Maharashtra, 431806</p>
                    <p>India</p>
                    <p>Adress Type: Home</p>
                  </Box>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  paddingLeft={10}
                  _expanded={{ bg: "black", color: "white" }}
                >
                  <Box height={"2.3rem"} as="span" flex="1" textAlign="left">
                    3. Payment Method
                  </Box>
                  {isAuth ? <BsCheckCircleFill /> : ""}
                </AccordionButton>
              </h2>
              <AccordionPanel paddingLeft={10} pb={4}>
                <Box
                  // paddingLeft={"3rem"}
                  paddingLeft={{ base: "0", sm: "0", lg: "10" }}
                  paddingTop={"1rem"}
                  bgColor={"rgba(249, 246, 246, 0.868)"}
                >
                  <h1
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    Select Payment Method
                  </h1>

                  <h1>Exchange Method</h1>
                  <br />
                  <Stack
                    width={"30rem"}
                    padding={2}
                    bg={"Background"}
                    // border={"1px solid gray"}
                    spacing={5}
                    direction="row"
                    flex={"1"}
                    justifyContent="space-between"
                    align={"center"}
                  >
                    <Checkbox isDisabled>Exchange order</Checkbox>
                    <AiFillQuestionCircle />
                  </Stack>
                  <br />
                  <br />
                  <RadioGroup onChange={setValue} value={value} width={"30rem"}>
                    {paymentOptions.map((item) => {
                      return (
                        <Stack
                          key={item.id}
                          width={"30rem"}
                          padding={2}
                          bg={"Background"}
                          // border={"1px solid gray"}
                          spacing={5}
                          direction="row"
                          marginTop={"0.5rem"}
                        >
                          <Radio value={item.value}>{item.name}</Radio>
                        </Stack>
                      );
                    })}
                  </RadioGroup>
                  <br />
                  <Link
                    textDecoration={"none"}
                    outline={"none"}
                    href="/paymentoptions"
                  >
                    <Button
                      bgColor={"rgb(206,89,233)"}
                      color="white"
                      width={"20rem"}
                      _hover={"none"}
                      textDecoration="none"
                    >
                      Pay ₹{crPrice - (ogPrice - crPrice)}
                    </Button>
                  </Link>
                  <Divider />
                  <h1>Shipping Adress</h1>
                  <br />
                  <Box
                    // width={"2rem"}
                    height={"auto"}
                    border={"3px solid purple"}
                    width="20rem"
                    padding={3}
                    bg="Background"
                  >
                    <h1>Mustaq Shaikh</h1>
                    <p>09/11</p>
                    <p>Nanded , Maharashtra, 431806</p>
                    <p>India</p>
                    <p>Adress Type: Home</p>
                  </Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Box
          boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
          p={10}
          paddingLeft={5}
          paddingRight={5}
          width={{ sm: "100%", lg: "50%" }}
        >
          <Stack>
            <h1
              style={{
                fontSize: "1.5rem",
              }}
            >
              Order Summary
            </h1>
            {cart?.map((item) => {
              return (
                <>
                  <Flex key={item.id} justifyContent={"space-between"}>
                    <Flex align={"center"} gap={"2rem"}>
                      <Box>
                        <Image
                          src={item.src1}
                          alt="prd"
                          height={10}
                          width={100}
                        />
                      </Box>
                      <Box>
                        {/* size: "34", date: "12/12/2055", */}
                        <p>{item.name}</p>
                        <p
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {"34M"}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {"27/02/2023"}
                        </p>
                      </Box>
                    </Flex>
                    <Box>
                      <p
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        ₹{item.currentPrice}
                      </p>
                      <p
                        style={{
                          textDecorationLine: "line-through",
                        }}
                      >
                        ₹{item.originalPrice}
                      </p>
                    </Box>
                  </Flex>
                  <Divider />
                </>
              );
            })}

            <Box>
              <Flex justifyContent={"space-between"}>
                <h1>SUBTOTAL</h1>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  ₹{ogPrice}
                </p>
              </Flex>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"}>
                <h1>CART DISCOUNT</h1>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  -₹{ogPrice - crPrice}
                </p>
              </Flex>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"}>
                <h1>SHIPPING CHARGES (standard)</h1>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  FREE
                </p>
              </Flex>
            </Box>
            <Divider />
            <Box>
              <Flex justifyContent={"space-between"}>
                <h1>TOTAL COST</h1>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  ₹{crPrice - (ogPrice - crPrice)}
                </p>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Flex>
      {/* </Flex> */}
      <FooterPaymentMethod />
    </>
  );
}

const paymentOptions = [
  { name: "Credit Card", value: "1", id: 1 },
  { name: "Debit Card", value: "2", id: 2 },
  { name: "UPI", value: "3", id: 3 },
  { name: "Netbanking", value: "4", id: 4 },
  { name: "Cash on Delivery", value: "5", id: 5 },
  { name: "Offline Payment", value: "6", id: 6 },
];

export async function getServerSideProps() {
  let res = await fetch(`http://localhost:8080/cart`);
  let data = await res.json();

  return { props: { data } };
}
