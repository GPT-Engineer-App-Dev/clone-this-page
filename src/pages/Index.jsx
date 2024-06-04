import { Box, Container, Flex, Link, Text, VStack, HStack, Button } from "@chakra-ui/react";

const articles = [
  {
    title: "Example Article 1",
    points: 100,
    author: "author1",
    time: "2 hours ago",
    comments: 50,
    link: "#"
  },
  {
    title: "Example Article 2",
    points: 200,
    author: "author2",
    time: "3 hours ago",
    comments: 30,
    link: "#"
  },
  // Add more articles as needed
];

const Index = () => {
  return (
    <Container maxW="container.lg">
      <Flex as="nav" bg="brand.900" p={4} mb={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Link href="#" fontWeight="bold" color="white">new</Link>
          <Link href="#" color="white">past</Link>
          <Link href="#" color="white">comments</Link>
          <Link href="#" color="white">ask</Link>
          <Link href="#" color="white">show</Link>
          <Link href="#" color="white">jobs</Link>
          <Link href="#" color="white">submit</Link>
        </HStack>
        <Button colorScheme="brand" size="sm">login</Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        {articles.map((article, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Link href={article.link} fontWeight="bold" fontSize="lg">{article.title}</Link>
            <Text fontSize="sm" color="gray.500">
              {article.points} points by {article.author} {article.time} | {article.comments} comments
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;