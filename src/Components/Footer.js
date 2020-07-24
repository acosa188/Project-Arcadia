import React, {Component} from 'react';
import HeaderNavbar from './HeaderNavbar';
import './Footer.css';
import logo from '../images/logo.png';

class Footer extends Component{
    render(){
        return(
            <div className="footer-container">
                <div className="logoClass">
                    <img src={logo} alt="arcadia-logo"></img>
                </div>
                <HeaderNavbar />
                <div className="logoClass">

                </div>
            </div>
        );
    }
}
export default Footer;