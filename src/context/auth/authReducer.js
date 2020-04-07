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
            return {
                alert: action.payload
            }
        case SIGNUP_FAILURE:
            return {
                alert: null
            }
        case LOGIN_SUCCESS:
            return {
                alert: action.payload
            }
        case LOGIN_FAILURE:
            return {
                alert: null
            }
        case GET_USER:
            return {
                alert: action.payload
            }
        case LOGOUT:
            return {
                alert: null
            }
        default:
            return state;
    }
}