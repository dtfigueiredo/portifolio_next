import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --font-inters: 'Inter', sans-serif;
    --font-poppins: 'Poppins', sans-serif;
    --font-open-sans: 'Open Sans', sans-serif;

    --color-body-bg: #1a1a1a;
    /* --gradient-body-bg: linear-gradient(315deg, rgba(26,26,26,1) 0%, rgba(46,66,77,1) 80%, rgba(91,178,145,1) 100%); */
    --gradient-body-bg: linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(46,66,77,1) 100%);
    --color-green: #5bb291;
    --font-light: #f4f6fa;
    --font-light-sec: #dbdbdb;

    --bg3: #98dad9;

    --width-web: 1200px;
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
    background: var(--color-body-bg);
    background: var(--gradient-body-bg);
    color: var(--font-light);
    font-family: var(--font-inters);
  }

  html{
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar{
    width: 0;
  }

`;

export const HeaderWrapper = styled.header`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageBox = styled.figure`
  width: fit-content;
`;

export const PhotoBox = styled.figure`
  width: 100%;

  /* -webkit-animation: slide-in-left 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  } */
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  padding: 1rem;
  margin: 0 0.5rem;

  font-size: 1.25rem;
  font-weight: normal;

  border-bottom: 3px solid transparent;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.125);
    font-weight: bold;
    color: var(--color-green);
    border-bottom: 3px solid var(--color-green);
    cursor: pointer;
  }
`;

export const Main = styled.main`
  margin: 5rem auto 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading1 = styled.h1`
  span {
    display: block;
  }

  font-family: var(--font-poppins);
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const Heading2 = styled.h2`
  margin: 1rem 0 2rem;
  font-family: var(--font-poppins);
  font-size: 3rem;
`;
