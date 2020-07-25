import React, {Component} from 'react';
import './ProjectsSection.css';
import CustomButton from './CustomButton';

class ProjectsSection extends Component{
    render(){
        return(
            <div className="project-section-container">
                <header>
                    <h1>Our Projects</h1>                   
                    <CustomButton name="View All Project"/>      
                </header>
                <div className="project-info-contents">

                </div>
            </div>
        );
    }
}

export default ProjectsSection;