import { Box } from "@chakra-ui/react";

export const Card: React.FC = ({ children }) => {
  return (
    <Box
      p="4"
      h="100%"
      borderRadius={6}
      width="100%"
      bgGradient={`linear-gradient(240deg, #2C344D 50%, rgba(44, 52, 77, 0.5) 100%)`}
      boxShadow="md"
    >
      {children}
    </Box>
  );
};
