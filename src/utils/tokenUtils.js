// src/utils/tokenUtils.js
import jwt_decode from 'jwt-decode';

export const isTokenExpired = (token) => {
    const decoded = jwt_decode(token);
    const now = Date.now() / 1000;
    return decoded.exp < now;
};
