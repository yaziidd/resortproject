import React from 'react';
import {useContext} from 'react';
import {ProductContext} from '../context';
import Room from './Room';

const RoomList = ()=>{
    const context = useContext(ProductContext);
    const {sortedRooms} = context;

    return(
        <div className = 'text-center'>
            {
                sortedRooms.map(items =>{
                    return(
                        <Room room = {items} key = {items.id}/>
                    )
                })
            }
        </div>
    )
}

export default RoomList;