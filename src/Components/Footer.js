import React, { Component } from 'react';
import HeaderNavbar from './HeaderNavbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import logo from '../images/logo.png';
import facebooklogo from '../images/facebook-f-brands.png';
import twitterlogo from '../images/twitter-brands.png';
import instagramlogo from '../images/instagram-brands.png';

class Footer extends Component {
    render() {
        return (
            <Container>
                <div className="footer-container">
                    <Row>
                        <Col xs={3}>
                            <div className="logoClass">
                                <img src={logo} alt="arcadia-logo"></img>
                                <div className="footer-copyright">
                                    <h6>© 2020 Arcadia.</h6>
                                    <h6>All rights reserved.</h6>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <HeaderNavbar />
                        </Col>
                        <Col xs={3}>
                            <div className="footer-logoClass-container">
                                <div className="media-container">
                                    <a href="#" className="logo-footer">
                                        <img src={twitterlogo} alt="facebook-logo" height="25px" />
                                    </a>
                                    <a href="#" className="logo-footer">
                                        <img src={facebooklogo} alt="facebook-logo" height="25px" />
                                    </a>
                                    <a href="#" className="logo-footer">
                                        <img src={instagramlogo} alt="facebook-logo" height="25px" />
                                    </a>
                                </div>
    
                                <div className="ptc-container">
                                    <h6>Privacy</h6>
                                    <h6>Terms & Conditions</h6>
                                </div>
    
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
export default Footer;