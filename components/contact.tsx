import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export const Contact = () => (
  <Container
    id="contact"
    as="section"
    maxW="container.lg"
    centerContent
    mb="24"
  >
    <Stack spacing={3} shadow="md" borderWidth="1px" p="8" w="66%">
      <Heading as="h2" fontSize="3xl">
        get in touch
      </Heading>
      <FormControl isRequired>
        <FormLabel htmlFor="contact-email">email</FormLabel>
        <Input
          id="contact-email"
          name="email"
          size="md"
          placeholder="name@email.com"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="contact-message">message</FormLabel>
        <Textarea
          id="contact-message"
          name="message"
          size="md"
          placeholder="what's up?"
        />
      </FormControl>

      <Box>
        <Button type="submit" px="8">
          Send
        </Button>
      </Box>
    </Stack>
  </Container>
);
