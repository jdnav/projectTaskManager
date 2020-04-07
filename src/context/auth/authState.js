import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER,
    LOGOUT
} from '../../types'
const AuthState = props => {

    // inital state
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    };

    // hook
    const [state, dispatch] = useReducer(authReducer, initialState);

    // functions
    const blablabla = () => {

    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
