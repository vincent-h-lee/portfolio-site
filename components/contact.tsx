import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FormEventHandler, useState } from "react";

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Contact = () => {
  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "idle"
  >("idle");
  const isLoading = status === "loading";

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        console.log(error);
      });
  };

  const onClose = () => setStatus("idle");

  const renderFormStatus = () => {
    switch (status) {
      case "success":
        return (
          <Alert status="success">
            <AlertIcon />
            Message received!
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        );
      case "error":
        return (
          <Alert status="error">
            <AlertIcon />
            Something went wrong with the contact form.
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <Container
      id="contact"
      as="section"
      maxW="container.lg"
      centerContent
      mb="24"
    >
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Box
          w={{
            base: "full",
            lg: "66%",
          }}
        >
          <Stack spacing={4} shadow="md" borderWidth="1px" p="8">
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
              <Button type="submit" px="8" disabled={isLoading}>
                Send
              </Button>
            </Box>

            {renderFormStatus()}
          </Stack>
        </Box>
      </form>
    </Container>
  );
};
