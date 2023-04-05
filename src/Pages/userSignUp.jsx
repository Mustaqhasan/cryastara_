// import Head from 'next/head';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Code,
  RadioGroup,
  Radio,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrFormViewHide, GrView } from "react-icons/gr";
// import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
// import { registerUser } from "@/redux/login/action.login";
// import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { registerUser } from "../Redux/login/action.login";
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

const UserSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
//   const router = useRouter();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    number: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleRegister = () => {
    if (
      data.first_name === "" ||
      data.number === "" ||
      data.email === "" ||
      data.password === "" ||
      data.gender === ""
    ) {
      toast({
        title: "Fill the required data",
        status: "error",
        position: "top",
        isClosable: true,
      });
      return;
    }

    dispatch(registerUser(data));
    toast({
      title: "Welcome to Crystara Family",
      status: "success",
      position: "top",
      isClosable: true,
    });
    // router.push(`/userLogin`);
  };

  return (
    <>
      <Heading>
        <title>User Sign-Up</title>
      </Heading>

      {/* Body */}

      <div>
        <Navbar />

        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#e9e2dc"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} gap={"20px"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up with Crystara
              </Heading>
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
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        onChange={(e) =>
                          setData({ ...data, first_name: e.target.value })
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        onChange={(e) =>
                          setData({ ...data, last_name: e.target.value })
                        }
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="number" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="number"
                    onChange={(e) =>
                      setData({ ...data, number: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <GrFormViewHide /> : <GrView />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <RadioGroup onChange={(e) => setData({ ...data, gender: e })}>
                  <Stack direction="row">
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                    <Radio value="Prefer not to say">Prefer not to say</Radio>
                  </Stack>
                </RadioGroup>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"#8863fb"}
                    color={"white"}
                    _hover={{
                      bg: "white",
                      color: "#8863fb",
                      border: "1px solid #8863fb",
                    }}
                    onClick={handleRegister}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link href={"/userlogin"}>
                      <Code color={"blue"} bg={"white"}>
                        Login
                      </Code>
                    </Link>
                  </Text>
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

export default UserSignUp;
