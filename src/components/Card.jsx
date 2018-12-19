import React from "react";
import styled from "styled-components";
import url from '../images/logo.svg';

const Card = ({ data }) => <Container>{data}<Image src = {url}></Image></Container>;

export default Card;

const Container = styled.div`
  width: 25%;
  height: 25%;
  min-height: 100px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0.1, 0.2);
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  border-color: black;
  border-width: thick;
`;

const Image = styled.img`
  flex: 0 0 96px;
  width: 150px;
  height: 150px;
  margin: 0;
  border-radius: 20px;
`;
