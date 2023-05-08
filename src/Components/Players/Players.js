import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from '../Player/Player';
import Wishlist from '../Wishlist/Wishlist';

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div className='show-players'>
            <div className='players-container'>
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                    ></Player>)
                }
            </div>
            <div>
               <Wishlist></Wishlist>
            </div>
        </div>
    );
};

export default Players;