import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = ({ showToast }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clientId = '924412817786-qnstr8p176s7157t9vq6c48md1fse0dn.apps.googleusercontent.com';

    const handleSuccess = async (credentialResponse) => {
        // if (!credentialResponse || !credentialResponse.credential) {
        //     showToast('Authentication failed. Please try again.', 'error');
        //     return;
        // }

        // try {
        //     const response = await fetch('http://localhost:5000/api/auth/google-auth', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             credential: credentialResponse.credential,
        //             client_id: clientId,
        //         }),
        //     });

        //     if (!response.ok) throw new Error('Authentication request failed');
        //     const data = await response.json();

        //     if (data.token) {
        //         dispatch(loginUser(data));

        //         const decodedToken = jwtDecode(data.token);
        //         showToast('Login successful!', 'success');

        //         if (decodedToken.id) {
        //             const siteData = await getSiteById(decodedToken.id);
        //             if (siteData.message === 'success') {
        //                 dispatch(setSiteData(siteData.data));
        //                 navigate('/dashboard');
        //             } else {
        //                 navigate('/addsite');
        //             }
        //         }
        //     } else {
        //         showToast('Token not received. Login unsuccessful.', 'error');
        //     }
        // } catch (err) {
        //     console.error('Error during authentication:', err);
        //     showToast('An error occurred. Please try again later.', 'error');
        // }
    };

    const handleError = () => {
        showToast('Google login failed. Please try again.', 'error');
        console.log('Google Login Failed');
    };

    return (
        <div className="w-full flex justify-center">
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                    className="w-full"
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default GoogleAuth;
