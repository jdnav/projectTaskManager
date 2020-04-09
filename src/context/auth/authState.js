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
} from '../../types';
// axios client
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

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

    // Register user function
    const registerUser = async data => {
        try {

            // Send to proper endpoint
            const response = await clientAxios.post('/api/users', data);

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            });

            // Get user info
            userAuthenticated();

        } catch (error) {
            console.log(error);
            // Create alert
            const alert = {
                msg: error.response.data.msg,
                category: 'error'
            }
            dispatch({
                type: SIGNUP_FAILURE,
                payload: alert
            })
        }
    }

    // Get authenticated user data
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // It sets JWT in header
            tokenAuth(token)
        }

        try {
            const response = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })

        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE
            })
        }
    }

    // Login function
    const login = async data => {
        try {
            // request
            const response = await clientAxios.post('/api/auth', data);

            // Dispatch action
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data // It will be "token"
            });

            // Get user info
            userAuthenticated();

        } catch (error) {
            console.log(error);
            // Create alert
            const alert = {
                msg: error.response.data.msg,
                category: 'error'
            }
            dispatch({
                type: LOGIN_FAILURE,
                payload: alert
            })
        }
    }

    // Log-out
    const logOut = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
                userAuthenticated,
                login,
                logOut
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
