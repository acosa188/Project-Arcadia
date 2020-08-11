import React, { Component } from 'react';
import arrow from '../images/play_arrow-24px.png';
import './ProjectsSection.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CustomButton from './CustomButton';

class ProjectsSection extends Component {
    render() {
        return (
            <div className="project-section-container">
                <header>
                    <h1>Our Projects</h1>
                    <CustomButton name="View All Project" />
                </header>

                <div className="project-info-contents">
                    <Row>
                        <Col className="proj-img-1">
                            <Row className="d-flex flex-column align-items-start p-5">
                                <h4>MOTION 2020 / HONORABLE MENTION</h4>
                                <h2 className="pt-4 pr-5">Scrovex Intro Video</h2>
                                <Button variant="outline-primary project-circle-button mt-auto">
                                    <div class="d-flex align-items-center">
                                        <img src={arrow} alt="arrow-button-logo" height="20px" class="mx-auto" />
                                    </div>
                                </Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="d-flex flex-column">
                                <Col className="proj-img-2">
                                    <Row className="d-flex flex-column align-items-start p-5">
                                        <h4>GEN/EX EXCELLENCE</h4>
                                        <h2 className="pt-4 pr-5">Cyber Security Solutions</h2>
                                        <Button variant="outline-primary project-circle-button mt-auto">
                                            <div class="d-flex align-items-center">
                                                <img src={arrow} alt="arrow-button-logo" height="20px" class="mx-auto" />
                                            </div>
                                        </Button>
                                    </Row>
                                </Col>
                                <Col className="proj-img-3">
                                    <Row className="d-flex flex-column align-items-start p-5">
                                        <h4>APPS FOR KIDS</h4>
                                        <h2 className="pt-4 pr-5">Moma Apps</h2>
                                        <Button variant="outline-primary project-circle-button mt-auto">
                                            <div class="d-flex align-items-center">
                                                <img src={arrow} alt="arrow-button-logo" height="20px" class="mx-auto" />
                                            </div>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ProjectsSection;