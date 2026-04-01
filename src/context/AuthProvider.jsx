import { createContext } from "react";
import { useState } from "react";

import { userSignup, userLogin } from '../apis/index.js';
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Signup functionality
    const signup = ({ username, email, password }) => {
        // console.log(`Auth:  ${username},  ${email},  ${password}`);
        const result = userSignup({ username, email, password });

        if (result.success) {
            setError('');
            setSuccess(result.message);
            setUser(username, email,)
            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);
            return true;
        } else {
            setSuccess('');
            setUser(result)
            setError(result.message);
            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);
            return false;
        }
    }


    // Login functionality 
    const login = ({ email, password }) => {
        const result = userLogin({ email, password });

        if (result.success) {
            setUser(result.user);
            return true;
        }
        else {
            setError(result.message);
            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);
            return false;
        }
    };


    // Logout functionality
    const logout = () => {
        localStorage.removeItem("loggedUser");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, error, success, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;