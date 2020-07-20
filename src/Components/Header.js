import React, {Component} from 'react';
import HeaderNavbar from './HeaderNavbar';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="headerClass">
                <div className="logoClass">

                </div>
                <nav className="navigation" >
                    <HeaderNavbar />
                </nav>
            </div>
        );
    }
}

export default Header;