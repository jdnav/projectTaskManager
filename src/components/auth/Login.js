import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Contexts
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

// Typing "rafce" react arrow function comp with ES7
const Login = (props) => {

    // Extract values from ALERT-context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // Extract values from AUTH-context
    const authContext = useContext(AuthContext);
    const { login, authenticated, message } = authContext;

    // If user or psw do not exits
    useEffect(() => {

        // if (authenticated) {
        //     props.history.push('/projects');
        // }

        if (message) {
            showAlert(message.msg, message.category);;
        }

    }, [message, authenticated, props.history])

    // State for login
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // Extract user
    const { email, password } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Submit form
    const onSubmit = (e) => {
        e.preventDefault();

        // validate empty fields
        if (email.trim() === '' || password.trim() === '') showAlert('All fields are required', 'error')

        // dispatch to action
        login({ email, password });
    }

    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="container-form shadow-dark">
                <h2>Login</h2>

                <form onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Login" />
                    </div>
                </form>
                <Link to={'/sign-up'} className="link-signup">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default Login

