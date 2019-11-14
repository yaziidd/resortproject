import React from 'react';
import {Link} from 'react-router-dom';

const Banner = ({mainHeader, subHeader, link, btnTag})=>{
    return(
        <React.Fragment>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className ='col-lg-6 col-sm-6 text-capitalize text-white col-md-6 mx-auto text-center' style = {{"background": "rgba(0, 0, 0, 0.5)"}}>
                        <h1>{mainHeader}</h1>
                        <h2>{subHeader}</h2>
                        <div className = 'mx-auto col-lg-6 my-3 col-sm-6' style = {{"height": "0.1rem", "background": "red"}} />
                        <Link to = {`/${link}`}>
                            <button className = 'btn mb-3 btn-warning'>{btnTag}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;