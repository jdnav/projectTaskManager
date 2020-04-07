import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Contexts
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

// Typing "rafce" react arrow function comp with ES7
const SignUp = (props) => {

    // Extract values from ALERT-context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // Extract values from AUTH-context
    const authContext = useContext(AuthContext);
    const { registerUser, authenticated, message } = authContext;

    // If user is already auth
    useEffect(() => {
        if(authenticated) {
            props.history.push('/projects');
        }

        if(message) {
            showAlert(message.msg, message.category);;
        }

    }, [message, authenticated, props.history])

    // State for SignUp
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // Extract user
    const { name, email, password, confirm } = user;

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
        if (name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirm.trim() === '') {
            showAlert('All fields are required', 'error');
            return;
        }

        // password > 6 && password + confirm OK
        if (password.length < 6) { showAlert('Password lenght < 6 chars', 'error'); return };
        if (password !== confirm) { showAlert('Passwords do not match', 'error'); return }

        // dispatch to action
        registerUser({ name, email, password })
    }

    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="container-form shadow-dark">
                <h2>Create account</h2>

                <form onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">Repeat Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Your password again"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Sign up" />
                    </div>
                </form>
                <Link to={'/'} className="link-signup">
                    Back to login
                </Link>
            </div>
        </div>
    )
}

export default SignUp

