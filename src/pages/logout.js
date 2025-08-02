import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice'; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const LogoutRoute = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate('/login')
    }, [dispatch]);

    return (
        <div>
            {/* Optionally, show a message or spinner while logging out */}
            <p>Logging out...</p>
        </div>
    );
};

export default LogoutRoute;
