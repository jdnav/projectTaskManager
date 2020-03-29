import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import {
    GET_TASKS_PROJECT,
    ADD_TASK
} from '../../types';

const TaskState = props => {

    const ProjectTasks = [
        { projectId: 1, name: 'Task 1', state: true },
        { projectId: 1, name: 'Task 11', state: false },
        { projectId: 2, name: 'Task 2', state: true },
        { projectId: 2, name: 'Task 22', state: true },
        { projectId: 3, name: 'Task 3', state: false }
    ]

    const initialState = {
        tasks: ProjectTasks,
        currentProjectTasks: null
    }

    // Create dispatch and state
    // Hook used 
    const [state, dispatch] = useReducer(taskReducer, initialState);

    // GET project tasks
    const getProjectTasks = projectId => {
        dispatch({
            type: GET_TASKS_PROJECT,
            payload: projectId
        })
    }

    // ADD task
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }


    // It creates provider
    // {props.children} = All children are consumers
    // It must be imported by App.js
    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                currentProjectTasks: state.currentProjectTasks,
                getProjectTasks,
                addTask
            }}>
            {props.children}
        </taskContext.Provider>
    );
}

export default TaskState;
