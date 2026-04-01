import { Link, useNavigate } from "react-router-dom"
const Settings = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className="border p-8 shadow-xl mb-3">
                    <h1> Settings</h1>
                    <Link
                        to="/profile"
                        className="text-blue-500 font-medium hover:underline text-center block"
                    >
                        Profile
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Settings