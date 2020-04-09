import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from "../../context/projects/projectContext";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    if (projects.length === 0) return <p>No projects yet. Add one to start!</p>;


    return (
        <ul className="list-projects">

            {alert ? (<div className={`alert ${alert.category} `}>{alert.msg}</div>) : null}

            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="project"
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListProjects;