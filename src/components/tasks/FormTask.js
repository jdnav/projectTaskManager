import React, { useContext } from 'react';
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    // If no project selected
    if (!currentProject) return null;

    // Array destructuring to get current project
    const [getCurrentProject] = currentProject;

    return (
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name of the task"
                        name="name"
                    />
                </div>
                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Add task"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTask
