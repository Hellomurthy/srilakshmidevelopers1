import React from 'react';
import {Link} from "react-router-dom";
import {ProjectsUC} from '../helpers/ProjectsUC';
import Project from '../Components/Project'
import "../styles/projects.css";

function Projects(){
    return (
        <>
        <div className="project">
            <h1 className="projectTitle">Projects in progress...</h1>
            <div className="projectList">
                {ProjectsUC.map((project, key) => {
                    return(
                        <Project
                            key={key}
                            image={project.image}
                            name={project.name}
                            localtion={project.location}
                            description={project.description}
                        />                    
                    )
                })}
            </div>
        </div>
        <div className="project">
        <h1 className="projectTitle">Projects in progress...</h1>
        <div className="projectList">
            {ProjectsUC.map((project, key) => {
                return(
                    <Project
                        key={key}
                        image={project.image}
                        name={project.name}
                        localtion={project.location}
                    />                    
                )
            })}
        </div>
    </div>
    </>
    )
}
export default Projects;