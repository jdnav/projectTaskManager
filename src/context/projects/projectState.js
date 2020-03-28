import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        form: false
    }

    // Dispatch to execute actions
    // Hook used 
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // CRUD functions

    // It creates provider
    // {props.children} = All children are consumers
    // It must be imported by App.js
    return (
        <projectContext.Provider value={{ form: state.form }}>
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;
