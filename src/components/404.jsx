// NotFound.js


import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
