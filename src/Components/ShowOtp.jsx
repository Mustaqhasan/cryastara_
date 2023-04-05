import {
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Link
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
// import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ShowOtp() {
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick=()=>{
    setLoading(!loading)
    setShow(!show)
  }
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        onOpen()
      }, 2000);
    }
  }, [loading]);

  
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"sm"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={10}
      >
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Verify your Number
          </Heading>
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          We have sent code to your Mobile
        </Center>
        {/* <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color={useColorModeValue("gray.800", "gray.400")}
        >
          username@mail.com
        </Center> */}
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField value={1} />
                <PinInputField value={2} />
                <PinInputField value={3} />
                <PinInputField value={4} />
              </PinInput>
            </HStack>
            {loading && <Spinner />}
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={handleClick}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Verify
          </Button>
          {show && 
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />

              <ModalContent>
                <ModalHeader>Order has been placed Successfully..</ModalHeader>
                <Link href={"/"}>
                  <ModalCloseButton />
                </Link>
                <ModalBody>
                  <Text>Thank You for Choosing Crystara</Text>
                </ModalBody>

                <ModalFooter>
                  {/* <Link href={"/cart"} >
                <Button colorScheme={"red"} mr={3} onClick={onClose}>
                  Close
                </Button>
                </Link> */}
                  <Link href={"/products"}>
                    <Button colorScheme={"purple"}>Continue for More...</Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          }
        </Stack>
      </Stack>
    </Flex>
  );
}
