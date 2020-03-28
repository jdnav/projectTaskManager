import React, { Fragment, useState } from 'react'

export const AddProject = () => {

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

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
                Add project
            </button>
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
        </Fragment>
    )
}

export default AddProject;
