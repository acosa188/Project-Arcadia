import React, {Component} from 'react';
import './HeaderNavbar.css';

class HeaderNavbar extends Component{
    render(){
        return(
            <div className="header-navbar-container">
                <nav className="header-navbar">
                    <div className="header-navbar-item">
                        <div className="circle"></div>   
                        <a href="#">                PORTFOLIO</a>
                    </div>
                   
                    <div className="header-navbar-item">
                        <div className="circle"></div>   
                        <a href="#"> ABOUT US</a>
                    </div> 

                    <div className="header-navbar-item">
                        <div className="circle"></div>   
                        <a href="#"> AWARDS</a>
                    </div>

                    <div className="header-navbar-item">
                        <div className="circle"></div>   
                        <a href="#"> CONTACTS</a>
                    </div>
                   
                </nav>
            </div>
        );
    }
}

export default HeaderNavbar;