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
      <form
        name="contact"
        method="post"
        action="/pages/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <Heading as="h2" fontSize="3xl">
          get in touch
        </Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="contact-email">email</FormLabel>
          <Input
            id="contact-email"
            autoComplete="email"
            type="email"
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
      </form>
    </Stack>
  </Container>
);
