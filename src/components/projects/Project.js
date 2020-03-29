import React, { useContext } from 'react'
import projectContext from "../../context/projects/projectContext";

export const Project = ({ project }) => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { getCurrentProject } = projectsContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => getCurrentProject(project.id)}
            >
                {project.name}
            </button>

        </li>
    )
}

export default Project;