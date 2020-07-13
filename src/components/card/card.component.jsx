 import React from 'react';

 import './card.css'

 const Card = (props) => {
    return(
        <div className='Card'>
            <img className='avatar' src={`https://robohash.org/${props.id}?set=set4&size=260x260`} alt='userAvatar'></img>
            <h2 className='name'>{ props.name }</h2>
            <h4 className='email'>{ props.email }</h4>
        </div>
    )
 }

 export default Card;