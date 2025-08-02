import React, { useState, useRef } from 'react';
import axios from 'axios';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Icon } from 'react-icons-kit';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const API_URL = process.env.REACT_APP_MIPORIS_SERVER;

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^[0-9]*$/.test(value)) return;

        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && pin[index] === "") {
            if (index > 0) inputsRef.current[index - 1].focus();
        }
    };

    const handleForgotPassword = async () => {
        try {
            setLoading(true);
            setError('');
            setSuccess('');
            await axios.post(`${API_URL}/auth/forgot-password`, { email });
            setSuccess('PIN has been sent to your email address.');
            setStep(2); // Move to the next step
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        try {
            setLoading(true);
            setError('');
            setSuccess('');
            await axios.post(`${API_URL}/auth/reset-password`, { email, pin: pin.join(""), newPassword });
            setSuccess('Password reset successfully. Redirecting to login...');
            setTimeout(() => {
                window.location.href = '/login'; // Redirect to login page
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password</h2>
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg "
                        />
                        <button
                            onClick={handleForgotPassword}
                            disabled={loading}
                            className={`w-full mt-4 px-4 py-2 text-white bg-[#0070BC] rounded-lg hover:bg-indigo-700 focus:outline-none ${loading && 'opacity-50 cursor-not-allowed'
                                }`}
                        >
                            {loading ? 'Sending...' : 'Send PIN'}
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>
                        <p className="text-gray-600 text-sm mb-4">Email: {email}</p>
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}
                        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                            PIN
                        </label>
                        <div className="flex space-x-2 mt-2 justify-center">
                            {pin.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputsRef.current[index] = el)}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-12 h-12 border border-gray-300 text-center rounded-lg "
                                />
                            ))}
                        </div>
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium text-gray-700 mt-4"
                        >
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg pr-12"
                                autoComplete="off"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 mt-2 flex items-center text-gray-500"
                            >
                                {showPassword ? <Icon className="mr-1" icon={eyeOff} size={20} /> : <Icon className="mr-1" icon={eye} size={20} />}
                            </button>
                        </div>
                        <button
                            onClick={handleResetPassword}
                            disabled={loading}
                            className={`w-full mt-4 px-4 py-2 text-white bg-[#0070BC] rounded-lg hover:bg-indigo-700 focus:outline-none ${loading && 'opacity-50 cursor-not-allowed'
                                }`}
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgetPassword;
