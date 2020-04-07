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
    const registerUser = async data => {
        try {

            // Send to proper endpoint
            const response = await clientAxios.post('/api/users', data);

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            })

        } catch (error) {
            // console.log(error.response.data.msg);
            // Create alert
            const alert = {
                msg:error.response.data.msg,
                category: 'error'
            }
            dispatch({
                type: SIGNUP_FAILURE,
                payload: alert
            })
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
