import React from 'react';
import {ProductContext} from '../context';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../components/Banner';
import StyledCover from '../components/StyledCover';

class SingleRoom extends React.Component{
    static contextType = ProductContext;
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    render(){
        const {getSingleRoom} = this.context;
        let room = getSingleRoom(this.state.slug);
        if(!room){
            return(
                <div className = 'd-flex align-items-center justify-content-center' style = {{"min-height":"60vh"}}>
                    <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-lg-6 mx-auto text-center'>
                                <h1>Room Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            const {images, capacity, name, description, extras, pets, breakfast, price, size} = room;
            const [firstImage,...otherImages] = images;
            return(
                <React.Fragment>
                    <StyledCover img = {firstImage}>
                        <Banner link = 'rooms' btnTag = 'Back To Rooms' mainHeader = {name} link = 'rooms' />
                    </StyledCover>
                    <div className = 'text-center'>
                        {
                            otherImages.map((item, index)=>{
                                return(
                                    <img src = {item} key = {index} className = 'mx-3 my-3' style = {{"width": "21rem"}}/>
                                )
                            })
                        }
                    </div>
                    <div className = 'row'>
                        <div className = 'col-lg-6'>
                            <h1 className = 'text-center'>Description</h1>
                            <p className = 'text-justify'>{description}</p>
                        </div>
                        <div className = 'col-lg-6'>
                            <h1 className = 'text-center'>Information</h1>
                            <h5>Price: ${price}</h5>
                            <h5>Size: SQFT {size}</h5>
                            <h5>Capacity: {(capacity > 1) ? `${capacity} people` : `${capacity} person`}</h5>
                            <h5>Pets: {(pets) ? "Pets are allowed" : "Pets not allowed"}</h5>
                            <h5>Breakfast: {(breakfast && "Breakfast for Free")}</h5>
                        </div>
                    </div>
                    <div className = 'text-center'>
                        {
                            extras.map((item, index)=>{
                                return(
                                    <div className = 'mx-3 my-3' style = {{"display": "inline-block"}}>
                                        <li style = {{"width": "27rem"}} key = {index} className = 'list-group-item'>{item}</li>
                                    </div>
                                )
                            })
                        }                 
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default SingleRoom;