import { Box, Image, Text } from "@chakra-ui/react";
import btc from "../assets/btc.png";
import "./home.css";
import { useState } from "react";

const Home = () => {
  const [color, setColor] = useState(true);

  const colorHandler = () => {
    setColor((prev) => !prev);
  };

  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image
        className={color ? "filter always" : "always"}
        w={"full"}
        h={"full"}
        objectFit={"contain"}
        src={btc}
        onClick={colorHandler}
      ></Image>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        color={"whiteAlpha.900"}
        mt={"-20"}
      >
        XCRYPTO
      </Text>
    </Box>
  );
};
export default Home;
