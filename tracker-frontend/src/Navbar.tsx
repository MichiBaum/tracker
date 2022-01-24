import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";
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

export const Navbar: React.FC<NavbarProps> = ({ items, selected, onSelect }) => (
  <Box
    orientation="vertical"
    borderRight="2px solid"
    borderRightColor="whiteAlpha.400"
    my="4"
  >
    <VStack mt="2" spacing="3">
      {items.map(({ key, icon }) => (
        <IconButton
          onClick={() => {
            onSelect(key);
          }}
          w="100%"
          h="60px"
          aria-label="Home"
          borderRadius="0"
          _hover={{ bgColor: "#283152" }}
          _active={{ bgColor: "#37416D" }}
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
  </Box>
);