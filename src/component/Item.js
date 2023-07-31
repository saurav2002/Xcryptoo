import { HStack, Text } from "@chakra-ui/react";

const Item = (props) => {
  return (
    <HStack justifyContent={"space-between"} w={"70%"} my={"4"}>
      <Text fontWeight={"bold"}>{props.title}</Text>
      <Text fontWeight={"medium"}>{props.value}</Text>
    </HStack>
  );
};

export default Item;
