import type { AppProps } from "next/app";
import {
  ChakraProvider,
  theme as baseTheme,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    sizes: {
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    components: {
      Form: {
        baseStyle: {
          requiredIndicator: {
            color: "red.600",
          },
        },
      },
    },
  },
  baseTheme
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
