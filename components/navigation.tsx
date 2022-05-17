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
  Hide,
  HStack,
  Link as ChakraLink,
  Show,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { createRef, useRef } from "react";
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

          <Hide above="md">
            <Button variant="ghost" ref={btnRef} onClick={onOpen}>
              <FaHamburger aria-label="mobile menu toggle" size="24" />
            </Button>

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                  <VStack spacing="4" py="12" fontWeight="semibold">
                    {links.map(({ text, href, isExternal }) => (
                      <ChakraLink
                        key={text}
                        href={href}
                        isExternal={isExternal ?? false}
                      >
                        {text}
                      </ChakraLink>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Hide>

          <Show above="md">
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
          </Show>
        </Flex>
      </Container>
    </Box>
  );
};
