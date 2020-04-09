import React, { useContext, useEffect } from 'react';
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";
// Context
import AuthContext from "../../context/auth/authContext";
import authContext from '../../context/auth/authContext';

// Typing "rafce" react arrow function comp with ES7
const Projects = () => {

    // Auth info
    const authToken = useContext(AuthContext);
    const {userAuthenticated}= authContext;

    useEffect(() => {
        userAuthenticated()
    }, [])

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

