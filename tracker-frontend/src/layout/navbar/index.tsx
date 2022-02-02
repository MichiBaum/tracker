import { Box, Flex, HStack, IconButton, Theme, useTheme, VStack } from "@chakra-ui/react";
import React from "react";

type NavbarItem = {
  key: string;
  icon: React.ReactElement;
};

type NavbarProps = {
  items: NavbarItem[];
  selected: string;
  onSelect: (key: string) => void | Promise<void>;
};

const Navbar: React.FC<NavbarProps> = ({ items, selected, onSelect }) => {
  const theme = useTheme<Theme>();
  return (
    <Flex
      w="100%"
      borderRight="2px solid"
      borderRightColor="whiteAlpha.400"
      my="4"
    >
      <VStack mt="2" spacing="3" w="100%">
        {items.map(({ key, icon }) => (
          <IconButton
            key={key}
            onClick={() => {
              onSelect(key);
            }}
            w="100%"
            h="60px"
            aria-label={key}
            borderRadius="0"
            _hover={{ bgColor: theme.colors.blue[300] }}
            _active={{ bgColor: theme.colors.blue[200] }}
            icon={
              <HStack h="100%">
                <Box
                  bgColor="white"
                  h="100%"
                  width="4px"
                  borderRightRadius="20px"
                  mr="3"
                  visibility={key === selected ? "visible" : "hidden"}
                />
                {React.cloneElement(icon, {
                  h: "100px",
                  color: key === selected ? "white" : "whiteAlpha.400",
                })}
              </HStack>
            }
            variant="unstyled"
          />
        ))}
      </VStack>
    </Flex>
  );
};

export default Navbar;
