import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";

const NewsCard = () => {
  return (
    <Box
      width="full"
      height="100px"
      borderRadius="lg"
      backgroundColor="blue.800"
      padding={3}
    >
      <VStack spacing={7} align="flex-start">
        <HStack>
          <Text fontSize="lg" paddingX={2} color="gray.400">
            1
          </Text>
          <Divider
            width="2px"
            height="30px"
            orientation="vertical"
            backgroundColor="blue.300"
            borderColor={0}
          />
          <Text fontSize="xl" color="gray.300">
            Go performance from version 1.2 to 1.18
          </Text>
        </HStack>
        <HStack paddingLeft={10}>
          <Text fontSize="xs" color="blue.300">
            golang.org
          </Text>
          <Text fontSize="xs" color="gray.300">
            by karthik
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default NewsCard;
