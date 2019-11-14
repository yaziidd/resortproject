import React from 'react';
import {Link} from 'react-router-dom';
import './Room.css';

const Room = ({room})=>{
    const {price, name, title, slug, images} = room;
    const [firstImage,...otherImages] = images;
    return(
        <div className = 'my-3 mx-3' style = {{"display":"inline-block"}}>
            <div className = 'card' style = {{"width": "21rem"}}>
                <div className = 'imageContainer'>
                    <img src = {firstImage} alt = 'room'/>
                    <div className = 'priceBtn pb-0'>
                        <p className = 'mb-0'>${price}</p>
                        <p className = 'mb-0' style = {{"fontSize": "0.8rem"}}>per Night</p>
                    </div>
                    <Link to = {`/rooms/${slug}`}>
                        <button className = 'btn btn-primary roomLink'>Features</button>
                    </Link>
                </div>
                <div className = 'card-footer text-capitalize text-center'>
                    <h6>{name}</h6>
                </div>
            </div>
        </div>
    )
}

export default Room;