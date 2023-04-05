import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { getAllProductsNavbarAPI } from "../Redux/Products/action";

// import { useAppSelector } from "../Redux/store";
// import { Product } from "../utils/types";
const { useThrottle } = require("use-throttle");

const NavSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
  const [products, setProducts] = useState([]);

  const throttledText = useThrottle(query, 400);

  useEffect(() => {
    //run some logic
    getAllProductsNavbarAPI().then((r) => {
      setProducts(r);
    });

    if (throttledText === "") {
      setSuggestions([]);
    } else {
      console.log(throttledText);
      let newSuggestions = products.filter((item) => {
        return item.name
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .indexOf(throttledText) !== -1
          ? true
          : false;
      });
      // console.log(newSuggestions);
      setSuggestions(newSuggestions);
      setShowDropdown.on();
    }
  }, [throttledText]);

  const clickToOffDropdown = () => {
    setShowDropdown.off();
    setQuery("");
  };

  return (
    <Box w="100%" position="relative">
      <InputGroup>
        <Input
          border={"1px solid purple"}
          background="white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
          width={"100%"}
        />
        <InputRightElement
          color={"white"}
          bgColor={"purple.400"}
          children={<BsSearch color="gray.300" />}
        />
      </InputGroup>
      {suggestions.length > 0 && (
        <Box className="dropdown-box">
          {suggestions.map((item) => {
            return (
              <Link key={item.id} href={`/${"products"}/${item.id}`}>
                <Box className="dropdown-box-content">
                  <Text
                    fontSize="md"
                    cursor="pointer"
                    onClick={clickToOffDropdown}
                  >
                    {item.name}
                  </Text>
                </Box>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default NavSearch;
