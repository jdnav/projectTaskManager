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
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                authenticated: true,
                message: null
            }
        case SIGNUP_FAILURE:
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