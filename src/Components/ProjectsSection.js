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
                            <h3>
                                View All Projects
                            </h3>
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