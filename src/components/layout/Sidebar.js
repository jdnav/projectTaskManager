import React from 'react'
import AddProject from "../projects/AddProject";
import ListProjects from "../projects/ListProjects";

const Sidebar = () => {
    return (
        <aside>
            <h1>ProjectTask <span>Manager</span></h1>
            <AddProject />
            <div className="projects">
                <h3>Your Projects</h3>
                <ListProjects />
            </div>
        </aside>
    );
}

export default Sidebar;
