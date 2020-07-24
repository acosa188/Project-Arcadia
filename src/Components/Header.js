import React, {Component} from 'react';
import HeaderNavbar from './HeaderNavbar';
import './Header.css';
import logo from '../images/logo.png';

class Header extends Component{
    render(){
        return(
            <div className="headerClass">
                <a href="#" className="logoClass">
                    <img src={logo} alt="arcadia-logo"></img>
                </a>
                <nav className="navigation" >
                    <HeaderNavbar />
                </nav>
            </div>
        );
    }
}

export default Header;