import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Navigation = () => (
  <Box borderBottom="1px" borderColor="blackAlpha.300" shadow="xs">
    <Container
      maxW="container.lg"
      as="nav"
      py="6"
      fontSize="lg"
      fontWeight="semibold"
    >
      <Flex justifyContent="space-between">
        <Link href="/" passHref>
          <ChakraLink>vincent</ChakraLink>
        </Link>
        <HStack spacing="4">
          <ChakraLink href="https://github.com/vincent-h-lee" isExternal={true}>
            github
          </ChakraLink>

          <ChakraLink
            href="https://linkedin.com/in/leevincenth"
            isExternal={true}
          >
            linkedin
          </ChakraLink>

          <ChakraLink href="#contact">contact</ChakraLink>
        </HStack>
      </Flex>
    </Container>
  </Box>
);
