import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";

export const Hero = () => (
  <Container as="section" maxW="container.lg">
    <Stack
      spacing="12"
      py="48"
      alignItems="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Box minW={{ base: "full", lg: "33%" }}>
        <Heading as="h1">software engineer, web applications</Heading>
      </Box>
      <Box>
        <Text fontSize="xl">
          I'm a software engineer based in Vancouver, BC. I build solutions for
          the web in complex domains. Currently working on an enterprise
          ecommerce build with the{" "}
          <Link
            href="https://www.linkedin.com/company/tile"
            display="inline"
            textDecoration="underline"
            isExternal={true}
          >
            web and platform team at Tile.
          </Link>
        </Text>
      </Box>
    </Stack>
  </Container>
);
