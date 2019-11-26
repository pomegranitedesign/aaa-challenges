import React from "react";
import styled from "styled-components";
import uuid from "uuid/v4";

import Detail from "./Detail";
import regulatory from "../Assets/Images/regulatory.svg";
import safety from "../Assets/Images/safety.svg";
import trading from "../Assets/Images/trading.svg";

const detailsInformation = [
  {
    title: "Regulatory Oversight",
    description: "Built according to SEC, FINRA and EU regulations",
    image: regulatory,
    style: { marginTop: "14px" }
  },
  {
    title: "World-Class Safety",
    description: "The highest security standards to ensure funds are protected",
    image: safety
  },
  {
    title: "A Broad Crypto Trading Offering",
    description:
      "Aiming to establish a spot trading suite for cryptocurrencies and security tokens",
    image: trading
  }
];

const Details = props => {
  return (
    <Wrapper>
      {detailsInformation.map(({ title, description, image, style }) => (
        <Detail
          title={title}
          description={description}
          image={image}
          key={uuid()}
          style={style}
        />
      ))}
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.div`
  display: grid;
  grid-gap: 2.9em;
  justify-content: flex-start;
  align-items: initial;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-top: 20px;
  }
`;

export default Details;
