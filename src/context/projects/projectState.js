import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECTS,
    VALIDATE_PROJECT_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
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
        projects: [],
        errorForm: false,
        currentProject: ''
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

    // Display error when name of project is invalid
    const displayError = () => {
        dispatch({
            type: VALIDATE_PROJECT_FORM
        })
    };

    // Select project clicked
    const getCurrentProject = (projectId) => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    };

    // Delete project
    const deleteProject = (projectId) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
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
                errorForm: state.errorForm,
                currentProject: state.currentProject,
                displayForm,
                getProjects,
                addProject,
                displayError,
                getCurrentProject,
                deleteProject
            }}>
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;
