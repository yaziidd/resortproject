import React from 'react';
import {useContext} from 'react';
import {ProductContext} from '../context';
import Room from './Room';

const FeaturedRooms = ()=>{
    const context = useContext(ProductContext);
    const {featuredRooms} = context;

    return(
        <React.Fragment>
            <div className = 'text-center'>
            <h1>Featured Rooms</h1>
                {
                    featuredRooms.map(items =>{
                        return(
                            <Room key = {items.id} room = {items}/>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default FeaturedRooms;