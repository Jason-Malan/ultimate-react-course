import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  background-color: purple;
  border: none;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 1.4rem;
`;

export default function App() {
  return (
    <StyledApp>
      <H1>Hello world</H1>
      <Button>Check in</Button>
      <Button>Check out</Button>
    </StyledApp>
  );
}
