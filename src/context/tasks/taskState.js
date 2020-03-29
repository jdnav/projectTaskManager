import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import {
    FORM_PROJECT,
} from '../../types';
import { v4 as uuid } from 'uuid';

const TaskState = props => {

    const initialState = {
        tasks: [],
    }

    // Create dispatch and state
    // Hook used 
    const [state, dispatch] = useReducer(taskReducer, initialState);



    // It creates provider
    // {props.children} = All children are consumers
    // It must be imported by App.js
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
            }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;
