import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';

const Navbar = ()=>{
    return(
        <nav className = 'navbar navbar-expand-md bg-dark navbar-dark'>
            <Link to = '/' className = 'navbar-brand'><img src = {logo} alt = 'logo'/></Link>
            <button className = 'navbar-toggler btn btn-dark' data-target = '#navList' data-toggle = 'collapse'>
                <span className = 'navbar-toggler-icon'></span>
            </button> 
            <div className = 'navbar-collapse collapse' id = 'navList'>
                <ul className = 'navbar-nav'>
                    <Link to = '/' className = 'nav-link'>
                        <li className = 'nav-item'>Home</li>
                    </Link>
                    <Link to = '/rooms' className = 'nav-link'>
                        <li className = 'nav-item'>Rooms</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;