import React, { useContext, useState } from 'react';
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    // Get TASK CONTEXT with the hook useContext
    const tasksContext = useContext(taskContext);
    const { addTask } = tasksContext;

    // Form State
    const [task, saveTask] = useState({
        name: ''
    });

    // Get name of the project
    const { name } = task;

    // If no project selected
    if (!currentProject) return null;

    // Array destructuring to get current project
    const [getCurrentProject] = currentProject;

    // Read form values
    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {

        e.preventDefault();

        // validate

        // add task
        task.projectId = getCurrentProject.id;
        task.state = false;
        addTask(task);

        // reboot form

    }

    return (
        <div className="form">
            <form
                onSubmit={onSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name of the task"
                        name="name"
                        value={name}
                        onChange={handleChange}
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
