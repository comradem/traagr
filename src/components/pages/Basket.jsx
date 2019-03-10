
import styled from "styled-components";

import React, { Component } from 'react'

export default class Basket extends Component {

  render() {
    return (
      <Container>
        this should contain list of the items
      </Container>
    )
  }
}

const Container = styled.div`
  width: 95vw;
  display: flex;
  justify-content: center;
  height: calc(100vh - 60px);
  background-color : white-off
`;
