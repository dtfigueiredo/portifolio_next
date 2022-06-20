import styled from "styled-components";

export const DefaultBtn = styled.button`
  width: 10em;
  padding: 0.75rem 1rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.color || "tomato"};
`;
