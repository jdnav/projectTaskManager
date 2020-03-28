import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS } from '../../types';

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
                projects: [...state.projects, action.payload]
            }
        default:
            return state;
    }
}