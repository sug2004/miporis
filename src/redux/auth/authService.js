// // src/features/auth/authService.js
// import axios from 'axios';
// const API_URL = process.env.REACT_APP_MIPORIS_SERVER;

// const login = async (credentials) => {
//     const response = await axios.post(`${API_URL}/auth/login`, credentials);
//     return response.data;
// };

// const signup = async (userData) => {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     return response.data;
// };

// const authService = { login, signup };
// export default authService;

// src/features/auth/authService.js
import axios from 'axios';
const API_URL = process.env.REACT_APP_MIPORIS_SERVER;

const login = async (credentials) => {
    const response = await axios.post(`https://app-miporis-eight.vercel.app/api/auth/login`, credentials, {
        withCredentials: true
    });
    return response.data;
};

const signup = async (userData) => {
    const response = await axios.post(`https://app-miporis-eight.vercel.app//api/auth/register`, userData, {
        withCredentials: true
    });
    return response.data;
};

const authService = { login, signup };
export default authService;
