import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phoneImg from '../images/phone-img.png';
import rigoliLogo from '../images/rigoli-app-logo.png';
import AppleButton from './AppleButton';
import './ServicesContent.css';

class ServicesContent extends Component {
    render(){
        return(
            <div className="services-content">
                <Row>
                    <Col>
                        <div>
                            <img src={phoneImg} alt="phone image"/>     
                        </div>
                    </Col>
                    <Col>
                        <Row className="flex-column">
                            <Col>
                                <img src={rigoliLogo} alt="rigoli app logo" style={{marginLeft: "-5px", paddingTop: "80px"}}/>
                                <h3>Rigoli App</h3>
                            </Col>
                            <Col style={{paddingTop: "80px"}}>
                                <h2>A Present With Limitless Choices</h2>
                            </Col>
                            <Col>
                                <div className="apple-button-wrapper">
                                    <AppleButton/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ServicesContent;