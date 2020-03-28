import React, { Fragment } from 'react';
import Task from "../tasks/Task";

const ListTasks = () => {

    const ProjectTasks = [
        { name: 'Task 1', state: true },
        { name: 'Task 2', state: false },
        { name: 'Task 3', state: true },
        { name: 'Task 4', state: true },
        { name: 'Task 5', state: false }
    ]

    return (
        <Fragment>
            <h3>Task list</h3>

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
                className="btn btn-delete">
                Delete project
            </button>

        </Fragment>
    )
}

export default ListTasks
