import React, {Component} from 'react';
import './ProjectsSection.css';
import arrow from '../images/play_arrow-24px.png';

class ProjectsSection extends Component{
    render(){
        return(
            <div className="project-section-container">
                <header>
                    <h1>Our Projects</h1>                   
                    <a href="#" className="button-container">
                        <div className="view-all-project-button-left">
                            <h4>
                                View All Projects
                            </h4>
                        </div>
                        <div className="view-all-project-button-right">                    
                            <img src={arrow} alt=""></img>     
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