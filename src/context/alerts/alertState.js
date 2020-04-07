import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from '../../types';

const AlertState = props => {

    // inital state
    const initialState = {
        alert: null
    };

    // hook
    const [state, dispatch] = useReducer(alertReducer, initialState);

    // functions
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        });

        // hide alert after 5s
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 5000);
    }

    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;
