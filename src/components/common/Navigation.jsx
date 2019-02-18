import React from 'react';
import { withRouter } from 'react-router';
import  styled from 'styled-components';


const links = [
    {id: 'events', route: '/events', label: 'events'},
    {id: 'basket', route: '/basket', label: 'basket'}
];

const Navigation = props =>{
    return (
        <Bar>The shadows writhe around me
            {
                links.map(link => <Link onClick = {()=> props.history.push(link.route)}
                key = {link.id}
                >{link.label}</Link>)
            }
        </Bar>
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

const Link = styled.div`
font-size: 14px;
font-weight: 500;
color: #fff;
margin-right: 20px;
text-transform: uppercase;
cursor: pointer;
`;