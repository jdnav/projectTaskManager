import {
    GET_TASKS_PROJECT,
    ADD_TASK

} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TASKS_PROJECT:
            return {
                ...state,
                currentProjectTasks: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}