import React from "react";
import styled from "styled-components";
import Cards from "./components/Cards";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Cards>Cards
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </Cards>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: no wrap;

`;
