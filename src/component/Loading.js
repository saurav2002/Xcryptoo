import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      w={"full"}
      bgColor={"white"}
      color={"blackAlpha.900"}
      display={"Flex"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {" "}
        Loading....
      </Text>
    </Box>
  );
};
export default Loading;
