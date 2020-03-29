import {
    GET_TASKS_PROJECT,

} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TASKS_PROJECT:
            return {
                ...state,
                currentProjectTasks: state.tasks.filter(task => task.projectId === action.payload)
            }
        default:
            return state;
    }
}