import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER,
    LOGOUT
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case SIGNUP_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                alert: action.payload
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                alert: null
            }
        default:
            return state;
    }
}