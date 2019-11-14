import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            services: [
                {
                    icon:<FaCocktail/>,
                    title: 'Free cocktails',
                    info: 'Lorem ipsum dolor sit amet consecterue adipisicing alit, Magni, corporis!'
                },
                {
                    icon:<FaHiking/>,
                    title: 'Endless Hiking',
                    info: 'Lorem ipsum dolor sit amet consecterue adipisicing alit, Magni, corporis!'
                },
                {
                    icon:<FaShuttleVan/>,
                    title: 'Free shuttle',
                    info: 'Lorem ipsum dolor sit amet consecterue adipisicing alit, Magni, corporis!'
                },
                {
                    icon:<FaBeer/>,
                    title: 'Strongest Beer',
                    info: 'Lorem ipsum dolor sit amet consecterue adipisicing alit, Magni, corporis!'
                },
            ]
        }
    }

    render(){
        return(
            <React.Fragment>
                    <div className = 'text-center text-white' style = {{"background": "rgba(0, 0, 0, 0.5)"}}>
                        <h1 >Services</h1>
                        {
                            this.state.services.map((item, index)=>{
                                return(
                                    <div key = {index} className = 'dib' style = {{"width": "18rem","fontSize": "1.2rem"}}>
                                        <h6  style = {{"fontSize": "1.2rem"}} >{item.icon}</h6>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p> 
                                    </div>
                                )
                            })
                        }
                    </div>
            </React.Fragment>
        )
    }
}

export default Services;