import { Divider, Flex, Text } from "@chakra-ui/react";

const DateHeader = () => {
  return (
    <Flex direction="row" align="center">
      <Divider width="650px" borderColor="gray.600" />
      <Text fontSize="md" color="yellow.400">
        Feburary 6
      </Text>
    </Flex>
  );
};

export default DateHeader;
