import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://to-do-api.codelatte.es',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
