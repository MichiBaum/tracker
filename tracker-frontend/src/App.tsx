import { Box, chakra, Grid, Text, Theme, useTheme } from "@chakra-ui/react";
import { useState } from "react";
import { FaClipboardCheck, FaHome } from "react-icons/fa";
import Navbar from "./layout/navbar";
import { useBackgroundGradient } from "./theme/background";

const Home = chakra(FaHome);
const ClipboardCheck = chakra(FaClipboardCheck);

function App() {
  const [selected, setSelected] = useState("home");

  const bgGradient = useBackgroundGradient("br");

  return (
    <Grid
      templateColumns="80px 1fr"
      h="100vh"
      w="100vw"
      bg={bgGradient}
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
