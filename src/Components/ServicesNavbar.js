import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './ServicesNavbar.css';


class ServicesNavbar extends Component {
    render() {
        return (

            <div className="services-navbar-container">
                <Nav fill defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">
                            <div className="services-item">
                                <div className="nav-item">
                                    <h5>01</h5>
                                    <p>
                                        Branding
                                    </p>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">                
                            <div className="services-item">
                                <div className="nav-item">
                                    <h5>02</h5>
                                    <p>
                                        UI/UX
                                    </p>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">
                            <div className="services-item">
                                <div className="nav-item">
                                    <h5>02</h5>
                                    <p>
                                        Animation
                                    </p>
                                </div>
                            </div>         
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">
                            <div className="services-item">
                                <div className="nav-item">
                                    <h5>02</h5>
                                    <p>
                                        Advertising
                                    </p>
                                </div>
                            </div>       
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </div>
        );
    }
}

export default ServicesNavbar;