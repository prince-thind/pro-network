// styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
  min-height: 100vh;
   margin: 0;
    padding: 0;
  },
  #__next {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f7f9fc;
    display: flex;
    flex-direction:column;
    min-height: 100vh;
  },
  
`;

export default GlobalStyles;
