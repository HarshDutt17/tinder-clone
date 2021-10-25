import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinderclonehdbackend.herokuapp.com/',
});

export default instance;