import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../assets/miporis.webp";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/authSlice";
import GoogleAuth from "../Auth/GoogleAuth";

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const Login = ({ showToast }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await dispatch(login({ email, password }));
            if (data.payload.token && data.payload.isPaid) {
                window.location.replace(process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000/");
            } else {
                if (data.payload === "Invalid credentials") {
                    return
                } else {
                    navigate('/pricing');
                }
            }
        } catch (err) {
            console.error(err, "error");
        }
    };
    

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }


    return (
        <div className="max-w-md mx-auto px-8 pt-24 pb-8 mb-12">
            <div className="shrink-0 flex justify-center ">
                <a
                    className=" flex items-center sm:order-1 text-black flex-none text-xl font-bold focus:outline-none focus:opacity-80"
                    onClick={() => navigate("/")}
                >
                    <img className=" h-[70px]" src={Logo} alt="logo" />
                </a>
            </div>
            <h3 className="text-2xl  text-dark-grey-900 text-center mb-2">Welcome</h3>
            <h3 className="text-sm  text-dark-grey-900 mb-6 text-center">
                Log in to Miporis to continue to dashboard.
            </h3>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email" className="text-sm text-grey-900 mb-1">
                    Email*
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@loopple.com"
                    className=" w-full px-4 py-3 mb-4 bg-grey-200 text-sm text-dark-grey-900 rounded focus:outline-none border-2 focus:border-2 focus:border-[#5D5FEF]"
                    required
                />
                <label htmlFor="password" className="text-sm text-grey-900 mb-1">
                    Password*
                </label>
                <div className="relative w-full mb-6">
                    <input
                        id="password"
                        type={type}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter a password"
                        className="w-full px-4 py-3 bg-grey-200 text-sm text-dark-grey-900 rounded focus:outline-none border-2 focus:border-[#5D5FEF]"
                        required
                    />
                    <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleToggle}
                    >
                        <Icon className="mr-1" icon={icon} size={20} />
                    </span>
                </div>
                <div className="flex justify-between mb-4">
                    <a
                        href="javascript:void(0)"
                        className="text-sm font-medium text-purple-blue-500"
                        onClick={() => navigate('/password/new')}
                    >
                        Forgot password?
                    </a>
                </div>
                <button
                    className="w-full px-6 py-3 mb-4 text-sm font-bold text-white transition duration-300 bg-[#0070BC] hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 rounded"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Logging In..." : "Continue"}
                </button>
                <p className="text-sm text-grey-900 ">
                    Not registered yet?{" "}
                    <a href="/signup" className="font-bold text-grey-700">
                        Create an Account
                    </a>
                </p>
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-grey-500" />
                    <span className="mx-2 text-grey-600">or</span>
                    <hr className="flex-grow border-grey-500" />
                </div>
                <div className="flex flex-col justify-center">
                    <GoogleAuth showToast={showToast} />
                </div>
            </form>
        </div>
    );
};

export default Login;