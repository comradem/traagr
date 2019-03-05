//frameworks
import React from 'react';


//local
import Cards from '../common/Cards'
import Card from '../common/Card'

const list = [
    {id: 'c1', img: require('../../images/img1.png'), desc: 'short desc for test1 sho for test1'},
    {id: 'c2', img: require('../../images/img2.png'), desc: 'short desc for test2'},
    {id: 'c3', img: require('../../images/img3.png'), desc: 'short desc for test3'},
    {id: 'c4', img: require('../../images/img4.png'), desc: 'short desc for test4'},
    {id: 'c5', img: require('../../images/img5.png'), desc: 'short desc for test5'},
    {id: 'c6', img: require('../../images/img6.png'), desc: 'short desc for test6'},
    {id: 'c7', img: require('../../images/img7.png'), desc: 'short desc for test7'}
];


const EventPicker = () => {
    return (
        <Cards>
            {
                list.map(card => <Card card = {card} key={card.id}/>)
            }
        </Cards>
    );
}


export default EventPicker;



