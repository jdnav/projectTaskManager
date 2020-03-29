import {
    FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS,
    VALIDATE_PROJECT_FORM, CURRENT_PROJECT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECTS:
            return {
                ...state,
                form: false,
                errorForm: false,
                projects: [...state.projects, action.payload],
            }
        case VALIDATE_PROJECT_FORM:
            return {
                ...state,
                errorForm: true,
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                currentProject: state.projects.filter(project => project.id === action.payload),
            }
        default:
            return state;
    }
}