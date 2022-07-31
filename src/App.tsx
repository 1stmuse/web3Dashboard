import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"
import Router from "./navigations"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Router/>
  </ChakraProvider>
)
