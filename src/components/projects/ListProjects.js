import React from 'react';
import Project from './Project';

// {project} = PROPS 
export const ListProjects = () => {

const projects = [
    {name: `name 1 project`},
    {name: `name 2 project`},
    {name: `name 3 project`}
]

    return (
        <ul className="list-projects">
            {projects.map(projectItem => (
                <Project project={projectItem} />
            ))}
        </ul>
    )
}

export default ListProjects;