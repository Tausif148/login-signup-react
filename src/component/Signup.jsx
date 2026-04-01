import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from '../context/AuthProvider'

export function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // hide and show password
    const [show, setShow] = useState(false);
    function displayPassword() {
        setShow(!show);
    }


    // using context from here 
    const { signup, error, success } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        // console.log("Signup:"+ email, password);
        signup({ error, success, username, email, password });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
                <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSignup}>
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
                        <label htmlFor="username" className="mb-1 text-sm font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="username"
                            placeholder="Enter Username"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

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
                            autoComplete="new-password"
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
                        Signup
                    </button>
                    <hr />
                    <p className="text-sm text-center">
                        Already have an account? {''}
                        <Link
                            to="/login-signup-react/"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup
