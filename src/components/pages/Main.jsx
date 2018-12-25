import React from "react";
import styled from "styled-components";
import ToggledButton from "../common/ToggleButton";

const Main = () => {
  return <Container>
      <ToggledButton status='true' />
      <ToggledButton status='false' />
  </Container>;
};

export default Main;

const Container = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  height: calc(100vh - 60px);
  background-color : grey
`;
