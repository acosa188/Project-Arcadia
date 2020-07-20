import React, { Component } from 'react';
import './ServicesNavbar.css';


class ServicesNavbar extends Component{
    render(){
        return(
            <div className="services-navbar-container">
                <nav className="services-navbar">
                    <a href="#" className="services-item">Branding</a>
                    <a href="#" className="services-item">UI/UX</a>
                    <a href="#" className="services-item">Animation</a>
                    <a href="#" className="services-item">Advertising</a>
                </nav>
            </div>
        );
    }
}

export default ServicesNavbar;