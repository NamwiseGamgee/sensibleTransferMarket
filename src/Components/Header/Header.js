import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h3>TransferMarket</h3>
            </div>
            <div className='links'>
                <a href="/Clubs">Clubs</a>
                <a href="/YoungStars">YoungStars</a>
                <a href="/Scout">Scouts</a>
            </div>
        </div>
    );
};

export default Header;