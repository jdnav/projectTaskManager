import React, { useContext, useState } from 'react';
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    // Get TASK CONTEXT with the hook useContext
    const tasksContext = useContext(taskContext);
    const { addTask, errorTask, displayError, getProjectTasks } = tasksContext;

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
        if (name.trim() === '') {
            displayError();
            return;
        }

        // add task
        task.projectId = getCurrentProject.id;
        task.state = false;
        addTask(task);

        // Get all tasks again with the new task added
        getProjectTasks(getCurrentProject.id);

        // reboot form
        saveTask({
            name: ''
        })
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

            {errorTask ? <p className="message error">Name task is required</p> : null}
        </div>
    )
}

export default FormTask
