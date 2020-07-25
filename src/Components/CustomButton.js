import React, {Component} from 'react';
import './CustomButton.css';
import arrow from '../images/play_arrow-24px.png';

class CustomButton extends Component{
    render(){
        return(
            <div className="custom-button-container">
                <a href="#" className="button-container">
                        <div className="custom-button-left">
                            <h4>
                                {this.props.name}
                            </h4>
                        </div>
                        <div className="custom-button-right">                    
                            <img src={arrow} alt=""></img>     
                        </div>
                    </a>
            </div>
        );
    }
}

export default CustomButton;