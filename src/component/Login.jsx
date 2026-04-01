import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from '../context/AuthProvider'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // hide and show password
    const [show, setShow] = useState(false);
    function displayPassword() {
        setShow(!show);
    }

    // using context from here  
    const { login, error, success } = useContext(AuthContext);
    const nevigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const result = login({ email, password });

        if (result) {
            nevigate("/login-signup-react/profile");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form className="flex flex-col gap-4" onSubmit={handleLogin}>

                    {success && (
                        <div className="flex flex-col">
                            <small className="mb-1 text-sm font-medium text-green-700 bg-green-100 text-center p-1 rounded">
                                {success}
                            </small>
                        </div>
                    )}
                    {error && (
                        <div className="flex flex-col">
                            <small className="mb-1 text-sm font-medium text-red-600 bg-red-100 text-center p-1 rounded">
                                {error}
                            </small>
                        </div>
                    )}

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="current-email"
                            placeholder="Enter Email"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            placeholder="Enter Password"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 align-middle">
                        <label htmlFor="showpassword" className="text-sm">
                            Show password
                        </label>
                        <input onClick={displayPassword} type="checkbox" name="" id="showpassword" />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                    <hr />
                    <p className="text-sm text-center">
                        Don't have an account? {''}
                        <Link
                            to="/login-signup-react/signup"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Sigup
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login
