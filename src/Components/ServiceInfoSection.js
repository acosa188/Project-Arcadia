import React, {Component} from 'react';
import ServiceInfoCard from './ServiceInfoCard';
import './ServiceInfoSection.css'

class ServiceInfoSection extends Component {
    render(){
        return(
            <div className="service-info-section-container">
                <h1>Services We Provide</h1>
                <div className="service-cards">
                    <ServiceInfoCard />
                    <ServiceInfoCard />
                    <ServiceInfoCard />
                    <ServiceInfoCard />
                </div>
            </div>
        );
    }

}

export default ServiceInfoSection;