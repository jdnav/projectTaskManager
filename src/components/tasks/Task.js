import React from "react";
import ProyectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/task/taskContext";

const Task = ({ task }) => {
  // PROJECT context to get the current one
  const proyectosContext = useContext(ProyectContext);
  const { project } = proyectosContext;

  // TASKS context functions
  const tareasContext = useContext(TaskContext);
  const { getProjectTasks, saveCurrentTask, deleteTask, editTask } = tareasContext;

  // Extraer el proyecto
  const [currentProject] = project;

  // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
  const deleteTask = (id) => {
    deleteTask(id, currentProject._id);
    getProjectTasks(currentProject.id);
  };

  // This function change the status of a task
  const changeStatus = (task) => {
    if (task.status) {
        task.status = false;
    } else {
        task.status = true;
    }
    editTask(task);
  };

  // Add current task when the user wants to edit it
  const editTask = (task) => {
    saveCurrentTask(task);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>
      <div className="state">
        {task.state ? (
          <button
            type="button"
            className="completed"
            onClick={() => changeStatus(task)}
          >
            Completed
          </button>
        ) : (
          <button
            type="button"
            className="incompleted"
            onClick={() => changeStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => editTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
