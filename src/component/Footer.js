import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import { BsCurrencyBitcoin, BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { PiTwitterLogo } from "react-icons/pi";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      minH={"150"}
      display={"flex"}
      justifyContent={"center"}
      color={"white"}
      width={"full"}
    >
      <HStack width={"80%"}>
        <VStack width={"50%"}>
          <BsCurrencyBitcoin size={"40"} />
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            XcryptooO
          </Text>
          <Text fontSize={"x-small"} fontStyle={"italic"}>
            Xcrypto is one of the largest and most popular crypto media outlets
            in the world. Originally founded in 2023, Xcrypto features updates
            on cryoto coin and informataion related to any cryotocurrency
          </Text>
        </VStack>
        <VStack width={"50%"}>
          <Text fontWeight={"bold"}>Contact Us</Text>
          <input className="inp" placeholder="Email" />
          <HStack>
            <a href="https://google.com">
              <BsInstagram size={"25"} />
            </a>
            <a href="https://google.com">
              <AiOutlineFacebook size={"30"} />
            </a>
            <a href="https://google.com">
              <PiTwitterLogo size={"30"} />
            </a>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
