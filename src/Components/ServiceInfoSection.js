import React, {Component} from 'react';
import ServiceInfoCard from './ServiceInfoCard';
import './ServiceInfoSection.css';
import searchlogo from  '../images/search-24px.png';
import starlogo from '../images/star-logo-96px.png';
import bulblogo from '../images/bulb.png';
import cogwheel from '../images/cog-wheel.png';

class ServiceInfoSection extends Component {
    render(){
        return(
            <div className="service-info-section-container">
                <h1>Services We Provide</h1>
                <div className="service-cards">
                    <ServiceInfoCard logo={searchlogo} number="01" label="Experience, Market Research"/>
                    <ServiceInfoCard logo={bulblogo} number="02" label="Concepting & Prototyping"/>
                    <ServiceInfoCard logo={starlogo} number="03" label="Branding & Strategy"/>
                    <ServiceInfoCard logo={cogwheel} number="04" label="Engineering, DevOps, QA"/>
                </div>
            </div>
        );
    }

}

export default ServiceInfoSection;