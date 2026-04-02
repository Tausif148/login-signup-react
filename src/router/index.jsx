import { createHashRouter } from "react-router-dom";

import AuthGaurd from '../component/AuthGaurd';
import Signup from "../component/Signup";
import Login from "../component/Login";
import Profile from "../component/Profile";
import Dashboard from "../component/Dashboard";
import Settings from "../component/Settings";
import PageNotFound from "../component/PageNotFound";

const router = createHashRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
        element: <AuthGaurd />,
        children: [
            { path: "/profile", element: <Profile /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/settings", element: <Settings /> }
        ]
    },
    { path: "/*", element: <PageNotFound /> }
]);

export default router;