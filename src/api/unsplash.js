import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6f3ed621aa86356b0dd0520b9f0d12adf85986345705dd99b37a83490591ca91'
    }
});