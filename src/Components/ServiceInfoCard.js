import React, {Component} from 'react';
import './ServiceInfoCard.css';

class ServiceInfoCard extends Component{
    render(){
        return(
            <div className="service-info-card-container">
                <a href="#">
                    <div className="service-logo">
                        <img src={this.props.logo} alt="search_logo" height="70px"/>
                    </div>
                    
                    <div className="service-textarea">
                        <h4>{this.props.number}</h4>
                        <h3>{this.props.label}</h3>
                    </div>
                </a>
               
            </div>
        );
    }

}

export default ServiceInfoCard;