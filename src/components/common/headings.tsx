import styled from "styled-components";

export const Heading1 = styled.h1`
  span {
    text-align: center;
    display: block;
  }

  font-family: var(--font-poppins);
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  /* -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  } */
`;

export const Heading2 = styled.h2`
  margin: 1rem 0 2rem;
  font-family: var(--font-poppins);
  font-size: 3rem;
`;

export const Heading4 = styled.h4`
  margin: 1em 0 2rem;
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  letter-spacing: 0.125rem;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;
