import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "focus-visible/dist/focus-visible";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
