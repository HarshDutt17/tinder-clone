import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://git.heroku.com/tinderclonehdbackend.git',
});

export default instance;