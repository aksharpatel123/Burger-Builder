import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder_api_key_here.firebaseio.com/'
});

export default instance;