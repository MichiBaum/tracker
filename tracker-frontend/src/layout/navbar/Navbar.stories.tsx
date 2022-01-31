import { chakra, Flex } from "@chakra-ui/react";
import { useState } from "@storybook/addons";
import { ComponentMeta } from "@storybook/react";
import { FaClipboardCheck, FaHome } from "react-icons/fa";
import Navbar from ".";
import { StoryRoot } from "../../../.storybook/StoryRoot";

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
      <Flex width="80px">
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
      </Flex>
    </StoryRoot>
  );
};
