import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signInUser(email, password).then(() => {
        window.location.href = '/';

      })

    } catch (error) {
      // Display an error message to the user
      setErrorMessage('Unable to login. Please check your email and password or register for an account.');
      console.error('Error signing in:', error.code, error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-orange-300 mb-10 mt-10">Login to Vartalaap</h1>

        <form className="max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm mb-2 font-medium text-gray-700 dark:text-gray-400"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-blue-400"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm mb-2 font-medium text-gray-700 dark:text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-blue-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {/* Remember Me Checkbox and Forgot Password Link */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="w-4 h-4 text-peach-600 border border-gray-300 rounded focus:ring-1 focus:ring-green-500 dark:focus:ring-green-400"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-400"
              >
                Remember me
              </label>
            </div>
            <Link
              to="#"
              className="text-sm font-medium text-green-600 hover:underline dark:text-green-400"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-400"
          >
            Log in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-600 hover:text-green-700 dark:text-green-400">
            Sign up
          </Link>
        </p>

        {/* Back to Home Link */}
        <Link to="/" className="block text-center mt-4 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;