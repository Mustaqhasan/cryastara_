import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Image,
  Link
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ShowOtp from "../Components/ShowOtp";
import { getProductsCart } from "../Redux/Cart/action";

const CardsForPay = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [number, setNumber] = useState(false);
  const [date, setDate] = useState(false);
  const [cvv, setCvv] = useState(false);
  const [name, setName] = useState(false);

  const finalRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (number == false || date == false || cvv == false || name == false) {
      alert("Enter all details");
    } else {
      setLoading(!loading);
      setShow(!show);
    }
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const enteringNumber = (e) => {
    console.log(e.target.value);
    if (e.target.value == "123123") {
      setNumber(!number);
    }
  };
  const enteringDate = (e) => {
    if (e.target.value == "12/22") {
      setDate(!date);
    }
  };
  const enteringCVV = (e) => {
    if (e.target.value == "123") {
      setCvv(!cvv);
    }
  };
  const enteringName = (e) => {
    if (e.target.value == "mustaq shaikh") {
      setName(!name);
    }
  };

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

  if (loading)
    return (
      <>
        <Flex
          bgColor={"gray.200"}
          height="50rem"
          align="center"
          justifyContent={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Flex>
      </>
    );

  return (
    <Box bgColor={"gray.100"}>
      {!show && (
        <Center
          w={"50%"}
          margin="auto"
          // marginTop={"1rem"}
          color="black"
          border={"1px solid #f5f5f5"}
          bgColor="white"
          paddingTop={"1rem"}
          paddingBottom={"5rem"}
        >
          <Flex>
            <Box p="4">
              <Flex align={"center"} justifyContent="space-between">
                <Link href={"/paymentoptions"}>
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
                  ₹{crPrice - (ogPrice - crPrice)}
                </p>
              </Flex>
              <br />
              <h6>Transaction id: FSHJAH6S3</h6>
            </Box>
            <Spacer />
            <Box p="4">
              <h1 style={{ color: "#c5a899" }}>CREDIT CARD</h1>
              <Box
                marginTop={"1rem"}
                border={"5px solid purple"}
                borderBottom="none"
                borderTop={"none"}
                borderRight="none"
                gap={"4rem"}
              >
                <Flex
                  // minH={"100vh"}
                  //   background={"Background"}

                  align={"center"}
                  justify={"center"}
                  //   bg={useColorModeValue("gray.50", "gray.800")}
                >
                  <Stack
                    spacing={8}
                    mx={"auto"}
                    marginTop="1rem"
                    maxW={"sm"}
                    px={6}
                  >
                    <Box
                      rounded={"lg"}
                      //   bg={useColorModeValue("#fafafa", "gray.700")}
                      //   boxShadow={"lg"}

                      p={8}
                    >
                      <Stack spacing={4}>
                        <FormControl isRequired>
                          <FormLabel fontWeight={"light"}>
                            Card Number
                          </FormLabel>
                          <Input
                            onChange={enteringNumber}
                            backgroundColor={"Background"}
                            type="text"
                          />
                        </FormControl>
                        <HStack>
                          <Box>
                            <FormControl id="firstName" isRequired>
                              <FormLabel fontWeight={"light"}>
                                Expiry Date
                              </FormLabel>
                              <Input
                                onChange={enteringDate}
                                backgroundColor={"Background"}
                                type="text"
                              />
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="lastName" isRequired>
                              <FormLabel fontWeight={"light"}>CVV</FormLabel>
                              <Input
                                onChange={enteringCVV}
                                backgroundColor={"Background"}
                                type="text"
                              />
                            </FormControl>
                          </Box>
                        </HStack>

                        <FormControl id="password" isRequired>
                          <FormLabel fontWeight={"light"}>
                            Name on Card
                          </FormLabel>
                          <InputGroup>
                            <Input
                              onChange={enteringName}
                              backgroundColor={"Background"}
                              type="text"
                            />
                          </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                          <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"start"}
                            justify={"space-between"}
                            fontWeight="light"
                          >
                            <Checkbox>
                              Secure this option for faster checkouts
                            </Checkbox>
                            {/* <Link color={"blue.400"}>Forgot password?</Link> */}
                          </Stack>
                          <Button
                            type="submit"
                            mt={4}
                            onClick={handleClick}
                            loadingText="Processing"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={"none"}
                            // disabled={number==false || data==false || cvv==false || name==false}
                          >
                            PROCEED
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Center>
      )}

      {show && <ShowOtp />}
    </Box>
  );
};

const paymentOptions = [
  {
    logo: "https://api.payu.in/public/assets/images/card-icon.svg",
    name: "Credit Card",
    desc: "Pay using any credit card",
    id: 1,
  },
  {
    logo: "https://api.payu.in/public/assets/images/upi-icon.svg",
    name: "UPI",
    desc: "Pay with any UPI app like Phonepay, Paytm,Google Pay and more",
    id: 2,
  },
  {
    logo: "https://api.payu.in/public/assets/images/gpay.svg",
    name: "Google Pay",
    desc: "Pay using any credit card",
    id: 3,
  },
  {
    logo: "https://api.payu.in/public/assets/images/upi-logos/upi2/WhatsApp.svg",
    name: "WhatsApp",
    desc: "Pay using any credit card",
    id: 4,
  },
];
export default CardsForPay;
