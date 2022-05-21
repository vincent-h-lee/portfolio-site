import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Link as ChakraLink,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaHamburger } from "react-icons/fa";

const links = [
  {
    isExternal: true,
    text: "github",
    href: "https://github.com/vincent-h-lee",
  },
  {
    isExternal: true,
    text: "linkedin",
    href: "https://linkedin.com/in/leevincenth",
  },
  {
    href: "#contact",
    text: "contact",
  },
];

export const Navigation = () => {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box borderBottom="1px" borderColor="blackAlpha.300" shadow="xs">
      <Container
        maxW="container.lg"
        as="nav"
        py={{
          base: "4",
          lg: "6",
        }}
        fontSize="lg"
        fontWeight="semibold"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <ChakraLink href="/">vincent</ChakraLink>

          <Box display={{ md: "none" }}>
            <Button
              variant="ghost"
              ref={btnRef}
              onClick={onOpen}
              aria-label="mobile menu toggle"
            >
              <FaHamburger aria-label="mobile menu toggle icon" size="24" />
            </Button>
          </Box>

          <Box display={{ base: "none", md: "block" }}>
            <HStack spacing="4">
              {links.map(({ text, href, isExternal }) => (
                <ChakraLink
                  key={text}
                  href={href}
                  isExternal={isExternal ?? false}
                >
                  {text}
                </ChakraLink>
              ))}
            </HStack>
          </Box>
        </Flex>
      </Container>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody display="flex" flexDir="column" justifyContent="center">
            <VStack spacing="6" py="12" fontWeight="semibold" fontSize="2xl">
              {links.map(({ text, href, isExternal }) => (
                <ChakraLink
                  key={text}
                  href={href}
                  isExternal={isExternal ?? false}
                  fontWeight="semibold"
                >
                  {text}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
