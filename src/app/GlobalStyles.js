import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100vh;
    background-color: #33d9b2;
  }
`;

export default GlobalStyle;
