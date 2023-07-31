import { Button, Img, Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../assets/no.png";

const Header = () => {
  return (
    <Box
      width={"full"}
      bgColor={"blackAlpha.900"}
      display={"flex"}
      justifyContent={"center"}
    >
      <HStack width={"80%"} shadow={"base"} p={4} pl={"10%"}>
        <Button variant={"unstyled"} color={"white"} _hover={{ color: "grey" }}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} _hover={{ color: "grey" }}>
          <Link to="/exchange">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} _hover={{ color: "grey" }}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
      <Box
        width={"20%"}
        display={"flex"}
        // justifyContent={"center"}
        alignItems={"center"}
      >
        <Img src={img} width={"17%"} height={"45%"} />
      </Box>
    </Box>
  );
};
export default Header;
