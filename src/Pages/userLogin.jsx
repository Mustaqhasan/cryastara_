// import Head from "next/head";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Code,
  Link
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { loginUser } from "@/redux/login/action.login";
// import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { loginUser } from "../Redux/login/action.login";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const UserLogin = () => {
  const toast = useToast();
  const dispatch = useDispatch();
//   const router = useRouter();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (detail.email === "" || detail.password === "") {
      toast({
        title: "Fill the required data",
        status: "error",
        position: "top",
        isClosable: true,
      });
      return;
    }

    dispatch(loginUser(detail));
    
    toast({
      title: "Login Successful",
      status: "success",
      position: "top",
      isClosable: true,
    });
    // router.push(`/`);
  };

  // const { user } =
  //   useSelector((state) => {
  //     return {
  //       user: state.loginReducer.user
  //     };
  //   });
  //   console.log("userin login",user)
  return (
    <>
      <Heading>
        <title>User Login</title>
      </Heading>

      {/* Body */}

      <div>
        <Navbar />

        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#e9e2dc"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} gap={"20px"}>
              <Heading fontSize={"4xl"}>Login to your account</Heading>
              <Flex gap={"20px"}>
                <Flex
                  borderRadius={"10px"}
                  p={"10px"}
                  alignItems={"center"}
                  gap={"10px"}
                  bg={"white"}
                >
                  <FaFacebookSquare color={"blue"} />
                  <Text>Facebook</Text>
                </Flex>
                <Flex
                  borderRadius={"10px"}
                  p={"10px"}
                  alignItems={"center"}
                  gap={"10px"}
                  bg={"white"}
                >
                  <FcGoogle />
                  <Text>Google</Text>
                </Flex>
              </Flex>
            </Stack>

            <Text textAlign={"center"}>Or</Text>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    onChange={(e) =>
                      setDetail({ ...detail, email: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    onChange={(e) =>
                      setDetail({ ...detail, password: e.target.value })
                    }
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Code color={"blue.400"} bg={"white"}>
                      Forgot password?
                    </Code>
                  </Stack>
                  <Link href="/" >
                    <Button
                      bg={"#8863fb"}
                      color={"white"}
                      _hover={{
                        bg: "white",
                        color: "#8863fb",
                        border: "1px solid #8863fb",
                      }}
                      onClick={handleLogin}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Stack pt={2}>
                    <Text align={"center"}>
                      Don't have an account?{" "}
                      <Link href={"/usersignup"}>
                        <Code color={"blue"} bg={"white"}>
                          Sign up
                        </Code>
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <Footer />
      </div>
    </>
  );
};

export default UserLogin;
