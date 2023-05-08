import React from 'react';
import './Player.css'

const Player = (props) => {
    const {isAvailable, transferFee, picture, age, country, name} = props.player;
    const addToWishlist = (id , name) => {
        console.log(id, name);
    }
    return (
        <div className='single-player'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>Age: {age}</h4>
            <p><small>Country: {country}</small></p>
            <p>Market Value: {transferFee}</p>
            <p>Availability: <span className='bold'>{isAvailable ? 'Yes':'No'}</span></p>
            <button onClick={() => addToWishlist(props.player.id, name)} className='wishlist-btn'>Wishlist</button>

        </div>
    );
};

export default Player;