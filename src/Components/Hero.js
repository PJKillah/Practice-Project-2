import React from 'react';
import HeroLogo from '../Images/photo-grid.png'

export default function Hero() {
    return(
        <div className='hero'>
            <img className='hero--logo' src={HeroLogo} alt="" />
            <h1 className='hero--h1'>Online Experiences</h1>
            <p className='hero--p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}