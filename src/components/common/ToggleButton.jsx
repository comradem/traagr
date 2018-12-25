import React from 'react';
import styled from 'styled-components';





class ToggleButton extends React.Component {
    state = { 
        status : this.props.status
     }
    render() {
        const { status } = this.state;
        return (
            <TBtnStyle onClick = {this.toggleStatus}>button</TBtnStyle>    
        );
    }

    toggleStatus = () => {
        this.setState(
            prevStatus => ({status : !prevStatus.status}), 
            this.props.onChange(this.state.status)
            );
    }
}



export default ToggleButton;


const TBtnStyle = styled.div`
width: 100px;
min-width: 20px;
height: 80px;
min-height: 20px;
display: flex;
background: ${({ status }) => status ? '#c6c3b8' : '#ddb72c'};
align-items: center;
justify-content: center;
margin-right: 10px;
cursor: pointer;
border-radius: 5%;
text-transform: capitalize;
&:hover {
    background: #000;
  }
`;