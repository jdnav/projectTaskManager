import { GET_TASKS_PROJECT, ADD_TASK, VALIDATE_TASK_FORM } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_PROJECT:
      return {
        ...state,
        currentProjectTasks: action.payload, // (WITHOUT DB)--> state.tasksProject.filter(task => task.projectId === action.payload)
      };
    case ADD_TASK:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        errorTask: false,
      };
    case VALIDATE_TASK_FORM:
      return {
        ...state,
        errorTask: true,
      };
    default:
      return state;
  }
};
