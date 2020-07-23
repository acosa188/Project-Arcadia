import React, { Component } from 'react';
import './ServicesNavbar.css';


class ServicesNavbar extends Component{
    render(){
        return(
            <div className="services-navbar-container">
                <nav className="services-navbar">  
                    <a href="#" className="services-item">
                        <div class="nav-item">
                            <h5>01</h5>
                            <p>
                                Branding
                            </p>
                        </div>
                    </a>
                    <a href="#" className="services-item">
                        <div class="nav-item">
                            <h5>02</h5>
                            <p>
                                UI/UX
                            </p>
                        </div>
                    </a>
                    <a href="#" className="services-item">
                        <div class="nav-item">
                            <h5>03</h5>
                            <p>
                                Animation
                            </p>
                        </div>
                    </a>
                    <a href="#" className="services-item">
                        <div class="nav-item">
                            <h5>04</h5>
                            <p>
                                Advertising
                            </p>
                        </div>
                    </a>
                </nav>
            </div>
        );
    }
}

export default ServicesNavbar;