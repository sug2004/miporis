import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ForgetPassword from '../components/ForgetPassword';

function ForgetPass() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); // Redirect to home if authenticated
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <ForgetPassword />
        </div>
    );
}

export default ForgetPass;
