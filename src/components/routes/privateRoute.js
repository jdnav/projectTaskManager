import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

// Higher order component
const PrivateRoute = ({ component: Component, ...props }) => {
    //console.log(props);

    // auth-context
    const authContext = useContext(AuthContext);
    const { authenticated, isLoading, userAuthenticated } = authContext;

    /* Similar to  componentDidMount (executed after component rendered in DOM),
     componentDidUpdate (executed after updated happens in comp.) 
     and componentWillUnmount (Before dismount and destroy comp.) COMBINED.
    */
    useEffect(() => {
        userAuthenticated()
    }, [])

    return (
        <Route {...props} render={props => !authenticated && !isLoading ?
            (
                <Redirect to="/" /> /*If not authenticated, redirect to login*/
            ) : (
                <Component {...props} /> /*If authenticated, go ahead with all component props*/
            )}

        />
    )
}

export default PrivateRoute
