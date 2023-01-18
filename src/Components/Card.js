import React from 'react';
import Star from '../Images/star.png'

export default function Card(props) {

    let badgeText
    if(props.openSpots === 0) {

        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online") {

        badgeText = "ONLINE"
    }

    return(
        <div className='card'>
                {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card1' src={`../Images/${props.coverImg}`} alt="" />        
            <div className='rating'>
            <img className='star' src={Star} alt="" />
            <p className='card--p'>{props.rating}</p> 
                <div className="revcoun">    
                <p className="review">({props.reviewCount}) • </p>
                <p className="country">{props.location}</p>
                </div>
            </div>
            <p className='card--p2'>{props.title}</p>
            <p className='card--p3'><span className='card--span2'>From $ {props.price}</span><span className='card--span3'> / person</span></p>
        </div>
    )
}