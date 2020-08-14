import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import appleLogo from '../images/apple-brands.svg';
import './AppleButton.css'

export default () => (
    <div class="apple-button-container">
        <Button variant="outline-primary" size="lg">
            <Row>
                <Col xs={3}>
                    <img src={appleLogo} alt="apple logo" style={{width:"40px"}} />
                </Col>
                <Col>
                    <Row className="flex-column">
                        <Col>
                            <h5>Download on the</h5>
                        </Col>
                        <Col>
                            <h3>App Store</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Button>
    </div>
)