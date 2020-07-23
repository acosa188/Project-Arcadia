import React, {Component} from 'react';
import ServiceInfoCard from './ServiceInfoCard';
import './ServiceInfoSection.css'

class ServiceInfoSection extends Component {
    render(){
        return(
            <div className="service-info-section-container">
                <h1>Services We Provide</h1>
                <div className="service-cards">
                    <ServiceInfoCard number="01" label="Experience, Market Research"/>
                    <ServiceInfoCard number="02" label="Concepting & Prototyping"/>
                    <ServiceInfoCard number="03" label="Branding & Strategy"/>
                    <ServiceInfoCard number="04" label="Engineering, DevOps, QA"/>
                </div>
            </div>
        );
    }

}

export default ServiceInfoSection;