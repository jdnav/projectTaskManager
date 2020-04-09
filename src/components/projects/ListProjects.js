import React, { useContext, useEffect } from 'react';
import Project from './Project';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Contexts
import ProjectContext from "../../context/projects/projectContext";
import AlertContext from "../../context/alerts/alertContext";

// {project} = PROPS 
export const ListProjects = () => {

    // Get projects from State with the hook useContext
    const projectsContext = useContext(ProjectContext);
    const { message, projects, getProjects } = projectsContext;

    // Alert context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // Load projects when component ready
    useEffect(() => {
        // if error/alert
        console.log('en efect');
        console.log(message);
        console.log(alert);
        
        if (message) {
            showAlert(message.msg, message.category);
        }

        getProjects();

        // eslint-disable-next-line
    }, [message]);

    // For satety
    if (projects.length === 0) return <p>No projects yet. Add one to start!</p>;

    return (
        <ul className="list-projects">

            {alert ? (<div className={`${alert.category}`}>{alert.msg}</div>) : null}

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