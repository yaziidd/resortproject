import React from 'react';
import RoomList from './RoomList';
import RoomsFilter from './RoomsFilter';

const RoomsContainer = ()=>{
    return(
        <React.Fragment>
            <div className = 'text-center'>
                <RoomsFilter/>
                <RoomList/>
            </div>
        </React.Fragment>
    )
}

export default RoomsContainer;