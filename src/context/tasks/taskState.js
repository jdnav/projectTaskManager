import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import clientAxios from '../../config/axios';
import {
    GET_TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK_FORM,
    EDIT_TASK,
    DELETE_TASK,
    SELECT_CURRENT_TASK,
    CLEAN_TASK
} from '../../types';

const TaskState = props => {

    // Dev purposes
    // const ProjectTasks = [
    //     { projectId: 1, name: 'Task 1', state: true },
    //     { projectId: 1, name: 'Task 11', state: false },
    //     { projectId: 2, name: 'Task 2', state: true },
    //     { projectId: 2, name: 'Task 22', state: true },
    //     { projectId: 3, name: 'Task 3', state: false }
    // ]

    const taskState = {
        tasksProject: [],
        currentProjectTasks: null,
        errorTask: false
    }

    // Create dispatch and state
    // Hook used 
    const [state, dispatch] = useReducer(taskReducer, taskState);

    // GET project tasks
    const getProjectTasks = async project => {

        try {
            const result = await clientAxios.get('/api/tasks', {params: {project}});
            console.log(result);
            
            dispatch({
                type: GET_TASKS_PROJECT,
                payload: result.data.tasks
            })
        } catch (error) {
            
        }
    }

    // ADD task
    const addTask = async task => {

        try {
            await clientAxios.post('/api/tasks', task);
            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
    }

    // DELETE task
    const deleteTask = async (taskId, project) => {

        try {
            await clientAxios.delete(`/api/tasks/${taskId}`, { params: { project }});
            dispatch({
                type: DELETE_TASK,
                payload: taskId
            })
        } catch (error) {
            console.log(error);
        }
    }

    // EDIT task
    const editTask = async task => {

        try {
            await clientAxios.put(`/api/tasks/${task._id}`);
            dispatch({
                type: EDIT_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Selected task
    const saveCurrentTask = task => {
        dispatch({
            type: SELECT_CURRENT_TASK,
            payload: task
        })
    }

    // Deselect task that was selected
    const deselectTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    // Display error when name of task is invalid
    const displayError = () => {
        dispatch({
            type: VALIDATE_TASK_FORM,
        })
    };

    // It creates provider
    // {props.children} = All children are consumers
    // It must be imported by App.js
    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                currentProjectTasks: state.currentProjectTasks,
                errorTask: state.errorTask,
                getProjectTasks,
                addTask,
                saveCurrentTask,
                editTask,
                deleteTask,
                deselectTask,
                displayError
            }}>
            {props.children}
        </taskContext.Provider>
    );
}

export default TaskState;
