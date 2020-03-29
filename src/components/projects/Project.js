import React, { useContext } from 'react'
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

export const Project = ({ project }) => {

    // Get Project context with hook useContext
    const projectsContext = useContext(projectContext);
    const { getCurrentProject } = projectsContext;

    // Get Task context with hook useContext
    const tasksContext = useContext(taskContext);
    const { getProjectTasks } = tasksContext;

    const selectProject = id => {
        getCurrentProject(id); // Fix current project in project
        getProjectTasks(id); // Fix current project in task
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >
                {project.name}
            </button>

        </li>
    )
}

export default Project;