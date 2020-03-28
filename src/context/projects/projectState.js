import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECTS
} from '../../types';
import { v4 as uuid } from 'uuid';

const ProjectState = props => {

    const projects = [
        { id: 1, name: `name 1 project` },
        { id: 2, name: `name 2 project` },
        { id: 3, name: `name 3 project` }
    ];

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
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    // CRUD functions
    const addProject = project => {
        project.id = uuid();
        dispatch({
            type: ADD_PROJECTS,
            payload: project
        })
    }

    // It creates provider
    // {props.children} = All children are consumers
    // It must be imported by App.js
    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                displayForm,
                getProjects,
                addProject
            }}>
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;
