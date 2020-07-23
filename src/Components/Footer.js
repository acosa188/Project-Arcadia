import React, {Component} from 'react';
import HeaderNavbar from './HeaderNavbar';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer-container">
                <div className="logoClass">

                </div>
                <HeaderNavbar />
                <div className="logoClass">

                </div>
            </div>
        );
    }
}
export default Footer;