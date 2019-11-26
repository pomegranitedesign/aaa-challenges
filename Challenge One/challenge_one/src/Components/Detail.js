import React from "react";
import styled from "styled-components";

export default ({ title, description, image, style }) => {
  return (
    <Wrapper style={{ ...style }}>
      <Icon src={image} />

      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  justify-content: initial;
  align-items: center;
  grid-template-columns: 140px 0;
  grid-template-rows: auto;
  grid-template-areas: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 140px;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  margin-top: 10px;
  line-height: 1.4;

  @media screen and (min-width: 1000px) {
    min-width: 282.88px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 15%;
    width: auto;
  }

  @media screen and (max-width: 566px) {
    margin-left: 10%;
    width: auto;
  }

  @media screen and (max-width: 480px) {
    margin-left: 5%;
    width: auto;
  }
`;
const Title = styled.span`
  font-size: 22px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  letter-spacing: 0.3px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: auto;
    margin-bottom: 0;
  }
`;
const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-top: 5px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  width: 288.88px;
  height: 44px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: auto;
  }
`;
