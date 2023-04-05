import { Box, Flex } from "@chakra-ui/react";
import { AiFillHome, AiFillStar, AiFillHeart } from "react-icons/ai";

function Description() {
  return (
    <Flex>
      <Box  w="33.33%" p={4}>
        
        <h1 style={{fontSize:"20px", color:"#76787e"}}>Online Jewellery Store</h1><br /> <br />
        <p style={{fontSize:"12.8px", color:"#76787e"}}>CaratLane.com began in 2008 with the simple motto of democratising jewellery. And today, after 13 glorious years, it has come to be recognised as one of the top 20 e-commerce portals in India. Steadily growing from strength to strength since inception, CaratLane has also established 165 stores across the length and breadth of India.<br/> <br />

Since July 2016, we joined forces with India’s most desired and largest jewellery brand, Tanishq, through a strategic investment made by Titan Company in CaratLane. This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.</p>
      </Box>
      <Box  w="33.33%" p={4}>
        
        <h1 style={{fontSize:"20px", color:"#76787e"}}>CaratLane’s Vision</h1> <br /> <br />
        <p style={{fontSize:"12.8px", color:"#76787e"}}>CaratLane works with the vision of offering tastefully designed jewellery at revolutionary prices. This is achieved by eliminating all inefficiencies which result in drastically reduced costs. With CaratLane, users stand to save as much as 30% when compared to prices in the market. <br /> <br />

Our app is designed to bridge the vast gap between the virtual and the physical world. This has been attained with the help of the Virtual Try-on feature that permits the users to virtually put on 1000s of earrings to see just how they look when placed on the ears. <br /> <br />

With over 100 thousand downloads, the CaratLane app has emerged to be one of the most liked applications in the jewellery circuit.</p>
      </Box>
      <Box w="33.33%" p={4}>
        
        <h1  style={{fontSize:"20px", color:"#76787e"}}>Shopping at CaratLane</h1> <br /> <br />
        <p style={{fontSize:"12.8px", color:"#76787e"}}>Placing security first, CaratLane ensures that every transaction made on the site is safe and smooth for the customers. To attain this, the company follows stern policies of transparency through the whole customer buying journey. <br /> <br />
        For further convenience, all CaratLane products come backed with certification from international laboratories, and a blanket 15-day-return policy, no questions asked. <br /> <br />
        CaratLane provides the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains, bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, CaratLane offers 22k (916) and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.
        </p>
      </Box>
    </Flex>
  );
}

export default Description;
