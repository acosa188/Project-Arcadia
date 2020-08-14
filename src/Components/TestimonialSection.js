import React, { Component } from 'react';
import CustomButton from './CustomButton';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './TestimonialSection.css';
import bogologo from '../images/bogologo.png';
import momalogo from '../images/momalogo.png';
import artalogo from '../images/artalogo.png';

class TestimonialSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "bogoApps"
        }
    }

    handleClick(tab) {
        this.setState({ selected: tab });
    }

    render() {
        return (
            <div className="testimonial-section-container">
                <header>
                    <h1>Testimonals</h1>
                </header>

                <div className="testimonial-content">
                    <Nav fill variant="pills" defaultActiveKey="bogo-app" className="navigation">
                        <Nav.Item>
                            <Nav.Link eventKey="bogo-app" onClick={() => this.handleClick("bogoApps")}>
                                <div className="testimonial-person">
                                    <div className="testimonial-logo-bg">
                                        <img src={bogologo} alt="bogo-logo" height="50px" />
                                    </div>

                                    <div className="info">
                                        <h3>Eric Holland</h3>
                                        <h4>BOGO Apps</h4>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="moma" onClick={() => this.handleClick("momaApps")}>
                                <div className="testimonial-person">
                                    <div className="testimonial-logo-bg">
                                        <img src={momalogo} alt="moma-logo" height="50px" />
                                    </div>
                                    <div className="info">
                                        <h3>William Smith</h3>
                                        <h4>Moma</h4>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="arta" onClick={() => this.handleClick("artaApps")}>
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">
                                    <img src={artalogo} alt="arta-logo" height="50px" />
                                </div>
                                <div className="info">
                                    <h3>Monica Hunt</h3>
                                    <h4>ARTA Gallery</h4>
                                </div>
                            </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Jumbotron className="testimonial-qoutes">
                        {this.state.selected == "bogoApps" ?
                            <h3><span>"</span>Creating a compelling corporate site at such a complex time in Bogo's history was a fascinating challenge. <span>"</span></h3> :
                            this.state.selected == "momaApps" ?
                                <h3><span>"</span> Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs <span>"</span></h3> :
                                <h3><span>"</span> Business has only two functions – marketing and innovation. – Peter Drucker <span>"</span></h3>
                        }

                        <div className="testimonial-button-container">
                            <CustomButton name="Contact Us" />
                        </div>
                    </Jumbotron>

                </div>

            </div>
        );
    }

}

export default TestimonialSection;