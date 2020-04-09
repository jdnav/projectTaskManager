import React, { Fragment, useContext } from 'react';
import Task from "../tasks/Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const ListTasks = () => {

    // Get PROJECT CONTEXT with the hook useContext
    const projectsContext = useContext(projectContext);
    const { currentProject, deleteProject } = projectsContext;

    // Get TASK CONTEXT with the hook useContext
    const tasksContext = useContext(taskContext);
    const { currentProjectTasks } = tasksContext;

    // If no project selected
    if (!currentProject) return <h2>Select a project</h2>

    // Array destructuring to get current project
    const [getCurrentProject] = currentProject;

    return (
        <Fragment>
            <h2>Task list for <span>{getCurrentProject.name}</span></h2>

            <ul className="list-tasks">
                {currentProjectTasks.length === 0
                    ? (<li className="task"><p>No tasks yet.</p></li>)
                    : currentProjectTasks.map(taskElement => (
                        <Task task={taskElement} />
                    ))

                }
            </ul>
            <button
                type="button"
                className="btn btn-delete"
                onClick={() => deleteProject(getCurrentProject._id)}>
                Delete project
            </button>

        </Fragment>
    )
}

export default ListTasks
