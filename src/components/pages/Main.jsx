import React from "react";
import styled from "styled-components";
import ToggledButton from "../common/ToggleButton";

const Main = () => {
  return <ToggledButton status={true} />;
};

export default Main;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;
