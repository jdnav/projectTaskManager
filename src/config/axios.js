import axios from 'axios';

// The app will take the base url from here
const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clientAxios;