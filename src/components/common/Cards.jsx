import React from "react";
import styled from "styled-components";

const Cards = ({ children }) => <Container>{children}</Container>;

export default Cards;

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  background: #fff;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
`;
