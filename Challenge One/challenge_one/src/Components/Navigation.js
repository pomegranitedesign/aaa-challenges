import React from "react";
import styled from "styled-components";

import logo from "../Assets/Images/logo.png";

export default props => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />

      <ul style={{ display: "flex", alignItems: "center" }}>
        <Link>About Us</Link>
        <Link isJoin>Join Us</Link>
      </ul>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.nav`
  padding: 42px 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Link = styled.div`
  color: #ffffff;
  font-size: ${({ isJoin }) => (isJoin ? "13px" : "14px")};
  display: inline-block;
  cursor: pointer;
  font-weight: ${({ isJoin }) => isJoin && "bold"};
  padding: ${({ isJoin }) => isJoin && "15px"};
  border: ${({ isJoin }) => isJoin && "2px solid #ffffff"};
  border-radius: ${({ isJoin }) => isJoin && "23px"};
  margin-right: 1.3em;
  width: ${({ isJoin }) => isJoin && "135px"};
  height: ${({ isJoin }) => isJoin && "38px"};
  display: ${({ isJoin }) => isJoin && "flex"};
  align-items: center;
  justify-content: center;

  &:hover {
    font-weight: bold;
    ${({ isJoin }) => isJoin && "background: #ffffff;"}
    ${({ isJoin }) => isJoin && "color: rgb(19, 47, 110);"}
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
