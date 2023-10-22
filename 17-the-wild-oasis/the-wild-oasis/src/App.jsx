import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 1.4rem;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello world</H1>
        <Button>Check in</Button>
        <Button>Check out</Button>
      </StyledApp>
    </>
  );
}
