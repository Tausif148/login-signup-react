import { Link } from "react-router";
import pagenotfound from "../image/pagenotfound.webp";

export default function PageNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">
                    404 - Page Not Found
                </h2>

                <p className="text-gray-600 text-lg">
                    Click below to go to the login page
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition duration-300"
                >
                    Go to Login Page
                </Link>
            </div>

            <img
                src={pagenotfound}
                alt="Page Not Found"
                className="w-full max-w-lg mt-8 mx-auto"
            />
        </div>
    );
}