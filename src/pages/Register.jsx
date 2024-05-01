import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/firebase';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon

// Eye icon for showing password
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-300 dark:text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 9.94l1.76 1.76-1.5 1.5-6.5-6.5-1.5-1.5 1.5-1.5 6.5 6.5zM7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM13 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
  </svg>
);

// Eye with a line through it icon for hiding password
const EyeSlashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-600 dark:text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M12.72 12.72a9.974 9.974 0 0 1-1.44-1.44l-1.41 1.41a7.96 7.96 0 0 0 1.44 1.44l1.41-1.41zm-1.44-10.28C6.3 3.22 3.1 6.42 2 10c1.42 4.53 4.62 7.74 9.15 9.16.34-.88.79-1.78 1.3-2.67l-1.77-1.77c-1.55.8-3.12 1.43-4.73 1.89a17.97 17.97 0 0 1-1.88-4.73l-1.77-1.77c-.89.51-1.79.96-2.67 1.3zM10 18c-1.6-.51-3.19-1.12-4.76-1.8l-1.95 1.95C4.43 17.62 7.23 19 10 19c2.76 0 5.56-1.38 7.7-3.85l-1.95-1.95c-.68 1.57-1.29 3.16-1.8 4.76a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z" />
    <path d="M16.64 7.93l-12-12-.71.71 12 12 .71-.71z" />
  </svg>
);

const Signup = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firebaseError, setFirebaseError] = useState('');

  // Regular expression for email validation
  const emailRegex = /^[0-9]{9}@hbtu\.ac\.in$/;

  // Regular expression for password validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Check if email is valid
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address in the format xxxxxxxxx@hbtu.ac.in');
      return;
    }

    // Check if password is valid
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be at least 8 characters long');
      return;
    }

    try {
      // Attempt to create a new user account with the provided email and password
      await firebase.signupWithEmailAndPassword(email, password).then(()=>{
        window.location.href="/"
      })
      // Show success message
      setShowSuccessMessage(true);
    } catch (error) {
      // If an error occurs during user creation, log the error code and message
      console.error("Error creating user:", error.code, error.message);
      if (error.code === 'auth/email-already-in-use') {
        setFirebaseError('Email already exists. Please use a different email address.');
      } else {
        setFirebaseError('An error occurred. Please try again later.');
      }
    }
  };

  useEffect(() => {
    // Clear error messages when email or password change
    setEmailError('');
    setPasswordError('');
    setFirebaseError('');
  }, [email, password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-orange-300 mb-10 mt-5">
          Register at Vartalaap
        </h1>
        <form onSubmit={handleSubmit}>
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
            {/* Email error message */}
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm mb-2 font-medium text-gray-700 dark:text-gray-400"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-blue-400"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Toggle password visibility */}
              <button
                type="button"
                className="absolute dark:text-black-400 right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </button>
            </div>
            {/* Password error message */}
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>

          {/* Error message from Firebase */}
          {firebaseError && <p className="text-red-500 text-sm mt-1">{firebaseError}</p>}

          {/* Link to Login */}
          <p className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link to='/login' className="text-green-600 hover:text-green-700 dark:text-green-400">
              Login
            </Link>
          </p>
        </form>

        {/* Success Message Popup */}
        {showSuccessMessage && (
          <div className="bg-green-200 text-green-700 py-2 px-4 rounded-md mb-4 text-center">
            Successfully registered! Redirecting to home page...
          </div>
        )}

        {/* Sign Up with Google Button */}
        <button
          onClick={() => firebase.signInWithGoogle()}
          className="flex items-center justify-center mt-4 mx-auto text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-600"
        >
          <FaGoogle style={{ marginRight: '8px' }} size={20} color="#DB4437" /> Sign Up with Google
        </button>

        {/* Back to Home Link */}
        <Link to='/' className="block text-center mt-4 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Signup;
