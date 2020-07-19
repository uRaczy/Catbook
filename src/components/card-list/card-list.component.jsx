import React, { Component } from 'react';

import './card-list.css';

import Card from '../card/card.component'

class CardList extends Component {

    render() {
            return(
                <div className='cardList'>
                    {this.props.users.map(element => 
                    <Card key={element.id} id={element.id} name={element.name} email={element.email} />    
                    )}          
                </div>
            )
    }
}

export default CardList;