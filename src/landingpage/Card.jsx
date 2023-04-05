import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
const Card = () => {
  return (
    <>
    <Grid  templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(4, 1fr)",
    }} gap={3}  padding="10">
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_1.jpg" alt="" />{" "}
      </GridItem>
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_2.jpg" alt="" />{" "}
      </GridItem>
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_3.jpg" alt="" />{" "}
      </GridItem>
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_2.jpg" alt="" />{" "}
      </GridItem>
    </Grid>
    
    <Grid  templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(4, 1fr)",
    }} gap={3}  padding="10">
      <GridItem >
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_4.jpg" alt="" />{" "}
      </GridItem>
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/08/Desktop_9.jpg" alt="" />{" "}
      </GridItem>
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_7.jpg" alt="" />{" "}
      </GridItem>
      <GridItem>
        {" "}
        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/08/Desktop_9.jpg" alt="" />{" "}
      </GridItem>
    </Grid>
    </>
  );
};

export default Card;
