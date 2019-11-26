import React from "react";
import styled from "styled-components";

import { Navigation, Details } from "../Components";

export default props => {
  return (
    <Wrapper>
      <Navigation />

      <Content>
        <Title>Introducing the New Regulated Standard</Title>
        <Details />
      </Content>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.div`
  background: #132f6e;
  height: 100vh;
`;

const Content = styled.div`
  padding: 1em 13em;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  font-size: 42px;
  font-weight: 600;
  margin-top: 7px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    width: auto;
    margin: 0 auto;
    margin-left: 30px;
  }

  @media screen and (max-width: 566px) {
    text-align: left;
    font-size: 22px;
    width: auto;
  }
`;
