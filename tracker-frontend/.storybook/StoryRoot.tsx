import { ChakraProvider, Box } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

export const StoryRoot: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS>
      <Box
        bg="linear-gradient(115deg, #1A2136 0%, #161C2C 100%)"
        h="calc(100vh - 3rem)"
      >
        {children}
      </Box>
    </ChakraProvider>
  );
};
