import { Outlet,Navigate } from "react-router-dom";

const AuthGaurd = () => {
    const user = localStorage.getItem("loggedUser");

    // if not logged in redirect to login
    if (!user) {
        return <Navigate to="/login-signup-react" replace />;
    }
    return <Outlet />;
};

export default AuthGaurd;