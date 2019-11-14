import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import FeaturedRooms from '../components/FeaturedRooms';
import Service from '../components/Service';

const Home = ()=>{
    return(
        <React.Fragment>
            <Cover cover = 'homeCover'>
                <Banner btnTag = 'Check Out Rooms' link = 'rooms' mainHeader = 'Welcome To Ocean View Resort' subHeader = 'Enjoy!!!' />
            </Cover>
            <Service/>
            <FeaturedRooms/>
        </React.Fragment>
    )
}

export default Home;