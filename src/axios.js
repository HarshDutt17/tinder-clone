import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinderclone-backendbyhd.herokuapp.com',
});

export default instance;