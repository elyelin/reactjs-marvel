import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
 margin: 0px;
 width: 100%;
 max-width: 100vw;
 overscroll-behavior: none;
  min-height: 100vh;
  display: flex;
}

html {
  background-color: #fefefe;
  width: 100%;
}
`;
