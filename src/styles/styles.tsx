import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --font-inters: 'Inter', sans-serif;
    --font-poppins: 'Poppins', sans-serif;
    --font-open-sans: 'Open Sans', sans-serif;;

    --width-web: 75%;
    --width-tablet: 90%;
    --width-mobile: 100%;

    --rounded: 0.625rem;
  } 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    z-index: 1;
  } 
  
  body{
    min-height: 100vh;
    position: relative;
    font-family: var(--font-inters);
  }

  html{
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar{
    width: 0;
  }

`;
