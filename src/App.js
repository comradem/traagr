import React from "react";
import styled from "styled-components";
import Cards from "./components/Cards";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Cards>card</Cards>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 40px;
`;
