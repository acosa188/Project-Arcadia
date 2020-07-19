import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="headerClass">
                <div className="logoClass">

                </div>
                <nav className="navigation" >
                    PORTFOLIO   ABOUT US   AWARDS   CONTACTS
                </nav>
            </div>
        );
    }
}

export default Header;