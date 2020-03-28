import React from 'react'
import AddProject from "../projects/AddProject";
import ListProjects from "../projects/ListProjects";

const Sidebar = () => {
    return (
        <aside>
            <h2>Project<span>Taks</span></h2>
            <AddProject />
            <div className="projects">
                <h3>Your Projects</h3>
                <ListProjects />
            </div>
        </aside>
    );
}

export default Sidebar;
