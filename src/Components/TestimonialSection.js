import React, {Component} from 'react';
import './TestimonialSection.css';

class TestimonialSection extends Component {
    render(){
        return(
            <div className="testimonial-section-container">
                <header>
                    <h1>Testimonals</h1>
                </header>
                <div className="testimonial-content">
                    <nav className="navigation">
                        <a href="#">
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">

                                </div>
    
                                <div class="info">
                                    <h3>Eric Holland</h3>
                                    <h4>BOGO Apps</h4>
                                </div>                                
                            </div>
                        </a>
                        <a href="#">
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">

                                </div>
                                <div class="info">
                                    <h3>William Smith</h3>
                                    <h4>Moma</h4>
                                </div>   
                            </div>
                        </a>
                        <a href="#">
                            <div className="testimonial-person">
                                <div className="testimonial-logo-bg">

                                </div>
                                <div class="info">
                                    <h3>Monica Hunt</h3>
                                    <h4>ARTA Gallery</h4>
                                </div>   
                            </div>
                        </a>
                    </nav>
                    <div className="testimonial-qoutes">
                        
                    </div>
                </div>
            
            </div>
        );
    }

}

export default TestimonialSection;