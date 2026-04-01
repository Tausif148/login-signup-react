import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from '../context/AuthProvider';

function Profile() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout(e) {
        e.preventDefault();

        logout();
        navigate("/login-signup-react");
    }

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="border p-8 shadow-xl mb-3">
                <h1 className="text-lg">Wellcome to Your Profile, {user?.username} </h1>
                <div>
                    <Link
                        to="/login-signup-react/dashboard"
                        className="text-blue-500 font-medium hover:underline text-center block"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/login-signup-react/settings"
                        className="text-blue-500 font-medium hover:underline text-center block"
                    >
                        Settings
                    </Link>

                    <Link
                        onClick={handleLogout}
                        to="#"
                        className="text-blue-500 font-medium hover:underline text-center block"
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile
