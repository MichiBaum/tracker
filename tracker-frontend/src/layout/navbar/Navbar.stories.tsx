import { Box, chakra, ChakraProvider } from "@chakra-ui/react";
import { useState } from "@storybook/addons";
import { ComponentMeta } from "@storybook/react";
import { FaClipboardCheck, FaHome } from "react-icons/fa";
import { StoryRoot } from "../../../.storybook/StoryRoot";
import Navbar from ".";

const Home = chakra(FaHome);
const ClipboardCheck = chakra(FaClipboardCheck);

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const SimpleNavbar = () => {
  const [selected, setSelected] = useState("home");

  return (
    <StoryRoot>
      <Box
        bg="linear-gradient(115deg, #1A2136 0%, #161C2C 100%)"
        h="500px"
      >
        <Box width="80px" h="100%">
          <Navbar
            onSelect={setSelected}
            items={[
              { key: "home", icon: <Home fontSize="4xl" /> },
              {
                key: "clipboard",
                icon: <ClipboardCheck fontSize="3xl" ml="0.125rem" />,
              },
            ]}
            selected={selected}
          />
        </Box>
      </Box>
    </StoryRoot>
  );
};
