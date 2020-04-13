import {
  GET_TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK_FORM,
  DELETE_TASK,
  SELECT_CURRENT_TASK,
  EDIT_TASK,
  CLEAN_TASK,
} from "../../types";

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
    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter(
          (task) => task._id !== action.payload
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case SELECT_CURRENT_TASK:
      return {
        ...state,
        currentProjectTasks: action.payload,
      };
    case CLEAN_TASK:
      return {
        ...state,
        currentProjectTasks: null,
      };
    default:
      return state;
  }
};
