import React, { Fragment, useState, useContext } from 'react';
import projectContext from "../../context/projects/projectContext";

export const AddProject = () => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { form, displayForm } = projectsContext;

    // State for Project
    const [project, addProject] = useState({
        name: ''
    });

    // Extract name of the project
    const { name } = project;

    // Read form
    const onChangeProject = e => {
        addProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    // when form submitted
    const onSubmitProject = e => {
        e.preventDefault();
        // validate project

        // add to state

        // reboot form
    }

    const onClickAddForm = () => {
        displayForm();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={onClickAddForm}
            >
                Add project
            </button>
            {
                form
                    ?
                    (
                        <form
                            className="form-add-project"
                            onSubmit={onSubmitProject}
                        >
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Project Name"
                                name="nombre"
                                value={name}

                            ></input>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Add project"
                                onChange={onChangeProject}
                            ></input>
                        </form>
                    )
                    : null
            }
        </Fragment>
    )
}

export default AddProject;
