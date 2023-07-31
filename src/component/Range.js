import { Progress, VStack, HStack, Badge, Text } from "@chakra-ui/react";

const Range = (props) => {
  return (
    <VStack w={"50%"}>
      <Progress w={"full"} value={50} colorScheme={"teal"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge children={props.low} colorScheme={"red"} />
        <Text fontSize={"sm"}>24H Range</Text>
        <Badge children={props.high} colorScheme={"green"} />
      </HStack>
    </VStack>
  );
};

export default Range;
