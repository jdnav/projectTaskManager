import React, { Fragment, useState, useContext } from 'react';
import projectContext from "../../context/projects/projectContext";

export const AddProject = () => {

    // Get form State with the hook useContext
    const projectsContext = useContext(projectContext);
    const { form, displayForm, addProject, errorForm, displayError } = projectsContext;

    // State for Project
    const [project, saveProject] = useState({
        name: ''
    });

    // Extract name of the project
    const { name } = project;

    // Read form
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    // when form submitted
    const onSubmitProject = e => {
        e.preventDefault();
        // validate project
        if (name === '') {
            displayError();
            return;
        }

        // add to state
        addProject(project)

        // reboot form
        saveProject({
            name: ''
        })
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
                                name="name"
                                value={name}
                                onChange={onChangeProject}

                            ></input>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Add project"
                            ></input>
                        </form>
                    )
                    : null
            }

            {errorForm ? <p className="message error">Name of project required</p> : null}
        </Fragment>
    )
}

export default AddProject;
