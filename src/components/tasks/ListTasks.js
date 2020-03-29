import React, { Fragment, useContext } from 'react';
import Task from "../tasks/Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { currentProject, deleteProject } = projectsContext;

    // If no project selected
    if (!currentProject) return <h2>Select a project</h2>

    // Array destructuring to get current project
    const [getCurrentProject] = currentProject;

    const ProjectTasks = [
        { name: 'Task 1', state: true },
        { name: 'Task 2', state: false },
        { name: 'Task 3', state: true },
        { name: 'Task 4', state: true },
        { name: 'Task 5', state: false }
    ]

    return (
        <Fragment>
            <h2>Task list for <span>{getCurrentProject.name}</span></h2>

            <ul className="list-tasks">
                {ProjectTasks.length === 0
                    ? (<li className="task"><p>No tasks yet.</p></li>)
                    : ProjectTasks.map(taskElement => (
                        <Task task={taskElement} />
                    ))

                }
            </ul>
            <button
                type="button"
                className="btn btn-delete"
                onClick={() => deleteProject(getCurrentProject.id)}>
                Delete project
            </button>

        </Fragment>
    )
}

export default ListTasks
