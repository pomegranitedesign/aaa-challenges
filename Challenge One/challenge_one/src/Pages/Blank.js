import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default _ => (
  <Wrapper>
    <StyledLink to="/test">Перейти к следующей странице</StyledLink>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  display: block;
  background: rgb(3, 7, 252);
  padding: 20px;
  border-radius: 3px;
  position: absolute;
  font-size: 2rem;
  transition: all 450ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px -10px rgba(3, 7, 252, 0.9);
    background: rgb(252, 3, 136);
  }
`;
