import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => (
  <Box as="footer" borderTop="1px" borderColor="blackAlpha.300">
    <Container maxW="container.lg">
      <Flex justifyContent="space-between" fontWeight="semibold" py="4">
        <Text>site by Vincent Lee</Text>

        <HStack spacing="2">
          <Link
            href="https://github.com/vincent-h-lee"
            isExternal={true}
            px="2"
            aria-label="Vincent Lee Github profile"
          >
            <FaGithub aria-label="Github" size="24" />
          </Link>
          <Link
            href="https://linkedin.com/in/leevincenth"
            isExternal={true}
            px="2"
            aria-label="Vincent Lee Linkedin profile"
          >
            <FaLinkedinIn aria-label="Linkedin" size="24" />
          </Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);
