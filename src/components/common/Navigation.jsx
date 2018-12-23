import React from 'react';
import { withRouter } from 'react-router';
import  styled from 'styled-components';


const Navigation = props =>{
    return (
        <Bar>hell</Bar>
    );
}


export default withRouter(Navigation);


const Bar = styled.div`
  width: 100vw;
  height: 60px;
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
`;