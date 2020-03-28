import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from "../../context/projects/projectContext";


// {project} = PROPS 
export const ListProjects = () => {

    // Get projects from State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    // Load projects when component ready
    useEffect(() => {
        // if error
        if (!projects) {
            console.log('error, there are no projects');
        }
        getProjects();

        // eslint-disable-next-line
    }, []);

    // For satety
    if (projects.length === 0) return null;


    return (
        <ul className="list-projects">
            {projects.map(projectItem => (
                <Project project={projectItem} />
            ))}
        </ul>
    )
}

export default ListProjects;