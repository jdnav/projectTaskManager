import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Typing "rafce" react arrow function comp with ES7
const Login = () => {

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

        // dispatch to action
    }

    return (
        <div className="form-user">
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

