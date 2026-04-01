import { createBrowserRouter } from "react-router-dom";

import AuthGaurd from '../component/AuthGaurd';
import Signup from "../component/Signup";
import Login from "../component/Login";
import Profile from "../component/Profile";
import Dashboard from "../component/Dashboard";
import Settings from "../component/Settings";
import PageNotFound from "../component/PageNotFound";

const router = createBrowserRouter([
    // Public routes
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/login-signup-react/signup",
        element: <Signup />
    },

    // Protected routes
    {
        element: <AuthGaurd />,
        children: [
            { path: "/login-signup-react/profile", element: <Profile /> },
            { path: "/login-signup-react/dashboard", element: <Dashboard /> },
            { path: "/login-signup-react/settings", element: <Settings /> }
        ]
    },

    // 404 routes
    {
        path: "/*",
        element: <PageNotFound />
    }
]);

export default router;