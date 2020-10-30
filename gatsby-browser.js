import React from "react"
import "./main.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/js/theme"
import { UsuarioProvider } from "./src/js/store"

const Globalstyle = createGlobalStyle`
  *{
    box-sizing: border;
    margin:0;
    padding: 0;
    
    box-sizing: border-box;
    font-family: "Proxima Nova", sans-serif;
    
  }
 
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Globalstyle />
    <UsuarioProvider>{element}</UsuarioProvider>
  </ThemeProvider>
)
