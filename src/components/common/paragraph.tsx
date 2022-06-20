import styled from "styled-components";

export const Paragragh = styled.p<{ component: string }>`
  margin: ${(props) => (props.component === "button" ? "0" : "0 auto")};
  margin-top: ${(props) => (props.component === "button" ? "0" : "1em")};
  text-indent: ${(props) => (props.component === "button" ? "0" : "5ch")};
  line-height: ${(props) => (props.component === "button" ? "0" : "1.5rem")};
  font-size: ${(props) => (props.component === "button" ? "1.125rem" : "1.25rem")};
  color: var(--font-light);
`;
