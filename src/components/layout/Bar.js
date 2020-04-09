import React, { useContext, useEffect } from 'react';
import AuthContext from "../../context/auth/authContext";

export const Bar = () => {

    const authContext = useContext(AuthContext);
    const { userAuthenticated, user } = authContext;

    useEffect(() => {
        userAuthenticated()
    }, [])

    return (
        <header className="app-header">
            {user ? <p className="username">Hello <span>{user.name}</span></p> : null}
            <nav className="nav-main">
                <a href="#!">Log out</a>
            </nav>
        </header>
    )
}

export default Bar;
