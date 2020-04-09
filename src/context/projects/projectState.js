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
// for dev purposes
// import { v4 as uuid } from 'uuid';
import clientAxios from "../../config/axios";

const ProjectState = props => {

    // for dev purposes
    // const projects = [
    //     { id: 1, name: `name 1 project` },
    //     { id: 2, name: `name 2 project` },
    //     { id: 3, name: `name 3 project` }
    // ];

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
    const getProjects = async () => {
        try {
            const response = await clientAxios.get('/api/projects')
            dispatch({
                type: GET_PROJECTS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    // CRUD functions
    const addProject = async project => {
        // project.id = uuid();
        try {
            const result = await clientAxios.post('/api/projects', project);
            dispatch({
                type: ADD_PROJECTS,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }
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
    const deleteProject = async (projectId) => {

        try {
            await clientAxios.delete(`/api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            })
        } catch (error) {
            console.log(error);
        }
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
