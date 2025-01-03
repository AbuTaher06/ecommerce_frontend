import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://yourapiurl.com/api', // Replace with your API base URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default instance;