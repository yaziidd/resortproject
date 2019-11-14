import React from 'react';
import {useContext} from 'react';
import {ProductContext} from '../context';

const getUnique = (array, value)=>{
    return[...new Set(array.map(item => item[value]))];
}

const RoomsFilter = ()=>{
    const context = useContext(ProductContext);
    const {rooms, type, price, maxPrice, minPrice, breakfast, pets, minSize, maxSize, handleChange, capacity} = context;

    let types = getUnique(rooms, 'type');
    types = ['all',...types];
    types = types.map((item, index)=>{
        return(
            <option key = {index} value = {item}>{item}</option>
        )
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index)=>{
        return(
            <option value = {item} key = {index}>{item}</option>
        )
    })

    return(
        <React.Fragment>
            <form className = 'form-row'>
                <div className = 'col-lg-2 form-group'>
                    <label htmlFor = 'name'>Search Name</label>
                    <input type = 'text' id = 'name' name = 'name' className ='form-control' onChange = {handleChange}/>
                </div>
                <div className = 'col-lg-2 form-group'>
                    <label htmlFor = 'type'>Room Type</label>
                    <select type = 'text' id = 'type' name = 'type' className = 'form-control' value = {type} onChange = {handleChange}>{types}</select>
                </div>
                <div className = 'col-lg-2 form-group'>
                    <label htmlFor = 'capacity'>Room Type</label>
                    <select type = 'capacity' id = 'capacity' name = 'capacity' className = 'form-control' value = {capacity} onChange = {handleChange}>{people}</select>
                </div>
                <div className = 'col-lg-2 form-group'>
                    <label htmlFor = 'price'>Price: ${price}</label>
                    <input type = 'range' id = 'price' name = 'price' min = {minPrice} max = {maxPrice} value = {price} className ='form-control' onChange = {handleChange}/>
                </div>
                <div className = 'col-lg-2 form-group'>
                    <label htmlFor = 'size'>Room size</label>
                    <div className = 'form-row text-center'>
                        <input type = 'number' name = 'minSize' id = 'size' value = {minSize} onChange = {handleChange} className = 'form-control col-lg-5'/>
                        <input type = 'number' name = 'maxSize' id = 'size' value = {maxSize} onChange = {handleChange} className = 'form-control col-lg-5'/>
                    </div>   
                </div>
                <div className = 'col-lg-2 form-group text-left mt-3 '>
                <div className = 'form-group mb-0'>
                    <input type = 'checkbox' name = 'breakfast' id = 'breakfast' checked = {breakfast} onChange = {handleChange} />
                    <label htmlFor = 'breakfast' >Breakfast</label>
                </div>
                <div className = 'form-group'>
                    <input type = 'checkbox' name = 'pets' id = 'pets' checked = {pets} onChange = {handleChange} />
                    <label htmlFor = 'pets' >pets</label>
                </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default RoomsFilter;