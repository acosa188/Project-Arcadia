import React, {Component} from 'react';
import './ProjectsSection.css';

class ProjectsSection extends Component{
    render(){
        return(
            <div className="project-section-container">
                <header>
                    <h1>Our Projects</h1>
                    <a href="#">
                        <div className="view-all-project-button">
                            View All Projects
                        </div>
                    </a>
                </header>
                <div className="project-info-contents">

                </div>
            </div>
        );
    }
}

export default ProjectsSection;