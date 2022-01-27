import { Box, chakra, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaClipboardCheck, FaHome } from "react-icons/fa";
import Navbar from "./layout/navbar";

const Home = chakra(FaHome);
const ClipboardCheck = chakra(FaClipboardCheck);

function App() {
  const [selected, setSelected] = useState("home");

  return (
    <Grid
      templateColumns="80px 1fr"
      h="100vh"
      w="100vw"
      bg="linear-gradient(115deg, #1A2136 0%, #161C2C 100%)"
    >
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
      <Box p="10">
        <Text color="white">Hello World</Text>
      </Box>
    </Grid>
  );
}

export default App;
