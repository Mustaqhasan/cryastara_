import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
const Card_2 = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6} padding="10"
        
      >
        <GridItem>
          {" "}
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Personal/01/2X.jpg"
            alt=""
          />{" "}
        </GridItem>
        <GridItem>
          {" "}
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/RunWay/1X.jpg"
            alt=""
          />{" "}
        </GridItem>
      </Grid>
      <br />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6} padding="10"
      >
        <GridItem>
          {" "}
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif"
            alt=""
          />{" "}
        </GridItem>
        <GridItem>
          {" "}
          <img
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Best/01/2x.jpg"
            alt=""
          />{" "}
        </GridItem>
      </Grid>
      <br />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6} pl={10} pr={10}
      >
        <GridItem>
          {" "}
          <img
            src="https://banner.caratlane.com/live-images/79a051bec38941a2a055387f502579a9.jpg"
            alt=""
          />{" "}
        </GridItem>
        <GridItem>
          {" "}
          <img
            src="https://banner.caratlane.com/live-images/bdd989ae1f2549ae9f8e8d41c144221e.jpg"
            alt=""
          />{" "}
        </GridItem>
      </Grid>
    </>
  );
};

export default Card_2;
