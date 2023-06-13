import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://frutopia-production.up.railway.app/frutopia',
});