import React from 'react';
import items from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true, 
            type: 'all',
            capacity: 1, 
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false,   
            name: ''   
        }
    }

    componentDidMount(){
        let rooms = this.getData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(room => room.price));
        let maxSize = Math.max(...rooms.map(room => room.size));
        this.setState(()=>{
            return{
                rooms: rooms,
                price: maxPrice,
                maxPrice: maxPrice,
                sortedRooms: rooms,
                featuredRooms: featuredRooms,
                maxSize: maxSize,
                name: ""
            }
        })
    }

    handleChange = (event)=>{
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        let name = event.target.name;
        this.setState(()=>{
            return{
                [name] : value
            }
        },()=>this.filteredRooms())
    }

    filteredRooms = ()=>{
        let {rooms, price, breakfast, pets, minSize, maxSize, capacity, type} = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        tempRooms = tempRooms.filter(room => room.price <= price);
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        tempRooms = tempRooms.filter(room => room.name.toLowerCase().includes(this.state.name.toLowerCase()))
        this.setState(()=>{
            return{
                sortedRooms: tempRooms
            }
        })
    }

    getSingleRoom = (slug)=>{
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find(room => room.slug === slug);
        return room
    }

    getData = (item)=>{
        let tempRooms = item.map(data =>{
            let id = data.sys.id;
            let images = data.fields.images.map(image => image.fields.file.url);
            let room = {...data.fields, id, images};
            return room;
        })
        return tempRooms;
    }

    render(){
        return(
            <ProductContext.Provider value = {{
                ...this.state,
                getSingleRoom: this.getSingleRoom,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductContext, ProductProvider, ProductConsumer};