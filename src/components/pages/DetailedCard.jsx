import React from 'react';
import { withRouter } from 'react-router'; 
import styled from 'styled-components';



const DetailedCard = ({data}) => {
    return (
        <Container>detailed card</Container>
    );
}


export default withRouter(DetailedCard);


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

 const Image = styled.img`
 flex: 0 0 96px;
 width: 60%;
 height: 60%;
 margin: 2;
 border-radius: 10px;
 border-style: solid;`