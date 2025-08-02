// src/features/auth/authSlice.js -- change the cookie domain to '.miporis.com'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const initialState = {
    user: null,
    token: Cookies.get('token') || null,
    isAuthenticated: !!Cookies.get('token'),
    loading: false,
    error: null
};

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await authService.login(credentials);
        const { token, isPaid, message } = response;

        if (token) {
            const decoded = jwtDecode(token);
            //Cookies.set('token', token, { secure: true, sameSite: 'Strict', expires: 5, domain: '.miporis.com' });
             Cookies.set('token', token, { secure: true, sameSite: 'Strict', expires: 5 });
            return { token, user: decoded, isPaid, message };
        } else {
            throw new Error('Invalid token received');
        }
    } catch (error) {
        const errorMsg = error.response?.data?.message || 'Login failed';
        return thunkAPI.rejectWithValue(errorMsg);
    }
});

export const signup = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
    try {
        const response = await authService.signup(userData);
        const { token } = response;

        if (token) {
            const decoded = jwtDecode(token);
            //Cookies.set('token', token, { secure: true, sameSite: 'Strict', expires: 5, domain: '.miporis.com' });
             Cookies.set('token', token, { secure: true, sameSite: 'Strict', expires: 5 });
            return { token, user: decoded };
        } else {
            throw new Error('Invalid token received');
        }
    } catch (error) {
        const errorMsg = error.response?.data?.message || 'Signup failed';
        return thunkAPI.rejectWithValue(errorMsg);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
             Cookies.remove('token');
            //Cookies.remove('token', { domain: '.miporis.com' });
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
