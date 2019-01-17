import React from 'react';
import { withRouter } from 'react-router'; 
import styled from 'styled-components';



const Info = () => {
    return (
        <Container>info page</Container>
    );
}


export default withRouter(Info);


const Container = styled.div`
width: 100%;
  min-height: 100%;
  background: #ffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
`;