import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS
} from '../../types';

const projects = [
    { id: 1, name: `name 1 project` },
    { id: 2, name: `name 2 project` },
    { id: 3, name: `name 333 project` }
];

const ProjectState = props => {
    const initialState = {
        form: false,
        projects: []
    }

    // Dispatch to execute actions
    // Hook used 
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Display form DISPATCH
    const displayForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    // Display form DISPATCH
    const getProjects = (projects) => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }
    // CRUD functions

    // It creates provider
    // {props.children} = All children are consumers
    // It must be imported by App.js
    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                displayForm
            }}>
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;
