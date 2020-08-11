import React, { Component } from 'react';
import CustomButton from './CustomButton';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './TestimonialSection.css';
import bogologo from '../images/bogologo.png';
import momalogo from '../images/momalogo.png';
import artalogo from '../images/artalogo.png';

class TestimonialSection extends Component {
    render() {
        return (
            <div className="testimonial-section-container">
                <header>
                    <h1>Testimonals</h1>
                </header>
                <div className="testimonial-content">
                    <nav className="navigation">

                        <a href="#">
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">
                                    <img src={bogologo} alt="bogo-logo" height="50px" />
                                </div>

                                <div className="info">
                                    <h3>Eric Holland</h3>
                                    <h4>BOGO Apps</h4>
                                </div>
                            </div>
                        </a>

                        <a href="#">
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">
                                    <img src={momalogo} alt="moma-logo" height="50px" />
                                </div>
                                <div className="info">
                                    <h3>William Smith</h3>
                                    <h4>Moma</h4>
                                </div>
                            </div>
                        </a>

                        <a href="#">
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">
                                    <img src={artalogo} alt="arta-logo" height="50px" />
                                </div>
                                <div className="info">
                                    <h3>Monica Hunt</h3>
                                    <h4>ARTA Gallery</h4>
                                </div>
                            </div>
                        </a>
                    </nav>
                    
                    <Jumbotron>
                        <div className="testimonial-qoutes">
                            <h3>" Creating a compelling corporate site at such a complex time in Bogo's history was a fascinating challenge. "</h3>
                            <div className="testimonial-button-container">
                                <CustomButton name="Contact Us" />
                            </div>

                        </div>
                    </Jumbotron>
                    
                </div>

            </div>
        );
    }

}

export default TestimonialSection;