// axios.ts

import axios from 'axios';

// Define the base URL for your API
export const baseURL = import.meta.env.VITE_BASE_URL;

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: baseURL
});

export const setAuthtoken = (token:string) =>{
  window.localStorage.setItem('auth_token',token);
}

export const getAuthtoken = () => {
  return window.localStorage.getItem('auth_token');
}

export default axiosInstance;
