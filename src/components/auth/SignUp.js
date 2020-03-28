import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Typing "rafce" react arrow function comp with ES7
const SignUp = () => {

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

        // password > 6 && password + confirm OK

        // dispatch to action
    }

    return (
        <div className="form-user">
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

