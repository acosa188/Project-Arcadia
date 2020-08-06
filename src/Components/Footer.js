import React, {Component} from 'react';
import HeaderNavbar from './HeaderNavbar';
import './Footer.css';
import logo from '../images/logo.png';
import facebooklogo from '../images/facebook-f-brands.png';
import twitterlogo from '../images/twitter-brands.png';
import instagramlogo from '../images/instagram-brands.png';

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
                            <img src={twitterlogo} alt="facebook-logo" height="30px"/>
                        </a>
                        <a href="#" className="logo-footer">
                            <img src={facebooklogo} alt="facebook-logo" height="30px"/>
                        </a>
                        <a href="#" className="logo-footer">
                            <img src={instagramlogo} alt="facebook-logo" height="30px"/>
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