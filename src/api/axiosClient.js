import axios from 'axios';

const baseURL = 'https://be-project-reactjs.vercel.app/api/v1';

export const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
