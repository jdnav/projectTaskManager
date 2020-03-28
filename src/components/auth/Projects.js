import React from 'react';
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask"
import ListTasks from "../tasks/ListTasks"

// Typing "rafce" react arrow function comp with ES7
const Projects = () => {
    return (
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <Bar />
                <main>
                    <FormTask />
                    <div className="container-tasks">
                        <ListTasks />
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Projects

