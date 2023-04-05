import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
const Middle = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        padding="10"
      >
        <GridItem w="100%">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/Collection/Collection_Harry_potter_1.jpg"
            alt=""
          />{" "}
        </GridItem>
        <GridItem w="100%">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Blaze.jpg"
            alt=""
          />{" "}
          <Button
            colorScheme="blue"
            variant="outline"
            display={"block"}
            m="auto"
            fontSize={15}
            padding="3"
            mt={8}
          >
            View All Collection
          </Button>
        </GridItem>

        <GridItem w="100%">
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Mogra.jpg"
            alt=""
          />{" "}
        </GridItem>
      </Grid>
    </>
  );
};

export default Middle;
