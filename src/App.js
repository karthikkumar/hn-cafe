import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import NewsCard from "./components/NewsCard";
import DateHeader from "./components/DateHeader";
function App() {
  return (
    <Box backgroundColor="blue.800">
      <Container maxWidth="container.xl" padding={5}>
        <Flex height="96vh" py={0}>
          <VStack width="200px" height="full" paddingX={10}>
            <Heading color="gray.600">KOFFEE NEWS</Heading>
          </VStack>
          <VStack
            width="800px"
            height="full"
            padding={5}
            backgroundColor="blue.900"
            borderRadius="lg"
          >
            <DateHeader />
            <NewsCard />
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
