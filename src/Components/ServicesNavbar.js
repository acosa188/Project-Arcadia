import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './ServicesNavbar.css';


class ServicesNavbar extends Component {
    render() {
        return (
            <div class="service-navbar-container">
                <Nav fill variant="pills" defaultActiveKey="branding">
                    <Nav.Item>
                        <Nav.Link eventKey="branding" >
                            <div class="mylink-wrapper">
                                <h5>01</h5>
                                <p>
                                    Branding
                                </p>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="ui-ux">
                            <div class="mylink-wrapper">
                                <h5>02</h5>
                                <p>
                                    UI/UX
                                </p>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="animation">
                            <div class="mylink-wrapper">
                                <h5>03</h5>
                                <p>
                                    Animation
                                </p>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="advertising">
                            <div class="mylink-wrapper">
                                <h5>04</h5>
                                <p>
                                    Advertising
                                </p>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default ServicesNavbar;