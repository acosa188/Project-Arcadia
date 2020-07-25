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
                    <div class="footer-copyright">
                        <h6>© 2020 Arcadia.</h6>
                        <h6>All rights reserved.</h6>
                    </div>
                    
                </div>
                <HeaderNavbar />
                <div className="footer-logoClass-container">
                    <div class="media-container">
                        <a href="#" className="logo-footer">
    
                        </a>
                        <a href="#" className="logo-footer">
    
                        </a>
                        <a href="#" className="logo-footer">
    
                        </a>
                    </div>

                    <div className="ptc-container">
                        <h6>Privacy</h6>
                        <h6>Terms & Conditions</h6>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default Footer;