import React from "react";
import styled from "styled-components";
import ToggleButton from '../common/ToggleButton';

const Card = ({ data }) => (
  <Container>
    <Image src= {data.img}/>
    <Description>{data.desc}</Description>
    <ToggleButton text = '+'></ToggleButton>
  </Container>
);

export default Card;

const Container = styled.div`
  width: 30%;
  height: 30%;
  min-height: 100px;
  background: #c0c4c4;
  box-shadow: 0 5px 20px rgba(0, 0, 0.1, 0.2);
  box-sizing: border-box;
  border-radius: 15px;
  padding: 5px;
  &:hover {
    transform: scale(1.125);
    transition: all 0.125s ease-in-out;
  }
`;

const Image = styled.img`
  flex: 0 0 96px;
  width: 150px;
  height: 150px;
  margin: 0;
  border-radius: 20px;
  border-style: solid;
`;

const Description = styled.div`
  display: inline-block;
  border-radius: 3px;
  border-color: black;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #abc;
  color: blue;
  border: 5px black;
  font: arial  bold 12px/30px Georgia, serif;
`;
