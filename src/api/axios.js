// axios.js

import axios from 'axios';

// Define the base URL for your API
export const baseURL = 'http://localhost:8080/api/users';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: baseURL
});

export default axiosInstance;
