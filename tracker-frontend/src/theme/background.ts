import { Theme, useTheme } from "@chakra-ui/react";

export const useBackgroundGradient = (direction: "br") => {
  const theme = useTheme<Theme>();
  const { colors } = theme;
  return `linear-gradient(115deg, ${colors.blue[500]} 0%, ${colors.blue[700]} 100%)`;
};
