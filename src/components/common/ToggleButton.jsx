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
width: 20px;
min-width: 20px;
min-height: 20px;
height: 20px;
display: flex;
background: ${({ status }) => status ? '#cdcdcd' : '#ababab'};
align-items: center;
justify-content: center;
margin-right: 10px;
cursor: pointer;
border-radius: 50%;

`;