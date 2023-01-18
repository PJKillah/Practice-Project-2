import React from 'react';
import Airbnb from '../Images/airbnb-logo.png'

export default function Navbar() {
    return(
        <div className='navbar'>
            <img className='logo' src={Airbnb} alt="" />
        </div>
    )
}