import React, { Component } from 'react';
import styled from "styled-components";
import ToggleButton from '../common/ToggleButton';




export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: this.props.card.img,
      desc: this.props.card.desc,
      key: this.props.card.key
    }
  }
  render() {
    return (
      <Container>
      <Image src= {this.state.img}/>
      <Description>{this.state.desc}</Description>
      <ToggleButton text = '+'></ToggleButton>
    </Container>
    )
  }
}

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
  width: 70%;
  height: 50%;
  margin: 0;
  border-radius: 10px;
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
