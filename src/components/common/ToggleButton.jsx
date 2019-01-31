import React from 'react';
import styled from 'styled-components';





class ToggleButton extends React.Component {
    state = { 
        status : this.props.status,
        text : this.props.text
     }
    render() {
        const { status } = this.state;
        const { text } = this.state;
        return (
            <TBtnStyle onClick = {this.toggleStatus}>{text}</TBtnStyle>    
        );
    }

    toggleStatus = () => {
        this.setState(
            prevStatus => ({status : !prevStatus.status})
            );
    }
}



export default ToggleButton;


const TBtnStyle = styled.div`
width: 45px;
min-width: 20px;
height: 25px;
min-height: 10px;
display: flex;
background: ${({ status }) => status ? '#c6c3b8' : '#ddb72c'};
align-items: center;
justify-content: center;
margin-right: 10px;
cursor: pointer;
border-radius: 5%;
border-style: solid;
border-width: 1px;
text-transform: capitalize;
&:hover {
    background: #999;
  }
`;