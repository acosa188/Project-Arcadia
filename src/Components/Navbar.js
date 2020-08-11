import React from 'react';
import logo from '../images/logo.png';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';

export default () => (
    <Navbar expand="lg">
        <Navbar.Brand href="#home">
            <img src={logo} alt="arcadia-logo"></img>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home" className="header-navbar-item">
                    <div className="circle"></div> 
                    <span className="nav-label">
                        PORTFOLIO
                    </span>
                </Nav.Link>
                <Nav.Link href="#link" className="header-navbar-item">
                    <div className="circle"></div> 
                    <span className="nav-label">
                        ABOUT US
                    </span>
                </Nav.Link>  
                <Nav.Link href="#link" className="header-navbar-item">
                    <div className="circle"></div> 
                    <span className="nav-label">
                        AWARDS
                    </span>
                </Nav.Link> 
                <Nav.Link href="#link" className="header-navbar-item">
                    <div className="circle"></div> 
                    <span className="nav-label">
                        CONTACTS
                    </span>
                </Nav.Link>      
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)