import clientAxios from './axios';

const tokenAuth = token => {
    if (token) {
        // It will add token in the header of all request
        clientAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        // if not exits, it deletes the header
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;