import React from "react";

function Project({image, name, location, description} ){
    return(
        <div className="projectItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{location}</p>
            <p>{description}</p>
        </div>
    )
}
export default Project;