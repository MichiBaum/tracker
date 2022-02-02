import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "../src/theme";

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];