import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = ()=>{
    return(
        <React.Fragment>
            <Cover cover = 'roomCover'>
                <Banner btnTag = 'Back Home' link = '' mainHeader = 'Select A Room' subHeader = 'Have a nice stay' />
            </Cover>
            <RoomsContainer/>
        </React.Fragment>
    )
}

export default Rooms;