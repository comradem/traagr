import React from "react";
import styled from "styled-components";
import url from "../images/logo.svg";

const Card = ({ data }) => (
  <Container>
    {data} card
    <Image src={url} />
    <Description>desc</Description>
  </Container>
);

export default Card;

const Container = styled.div`
  width: 25%;
  height: 25%;
  min-height: 100px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0.1, 0.2);
  box-sizing: border-box;
  padding: 5px;
  border-radius: 10px;
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

const Description = styled.div`
  display: inline-block;
  border-radius: 3px;
  border-color: black;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: blue;
  border: 2px solid white;
  font: arial  bold 12px/30px Georgia, serif;
`;
