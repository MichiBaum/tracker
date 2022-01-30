import { Box } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { useBackgroundGradient } from "../src/theme/background";

export const StoryRoot: React.FC = ({ children }) => {
  const bgGradient = useBackgroundGradient("br");

  return (
    <Box display="flex" bg={bgGradient} h="calc(100vh - 3rem)">
      {children}
    </Box>
  );
};
