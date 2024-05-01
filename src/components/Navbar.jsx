import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/firebase';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, logout } = useFirebase();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleDiscussion=()=>{
        window.location.href="https://vartalaap.free.nf/?i=1"
    }
  

    return (
        <nav className="bg-green-600 sticky top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* NavBrand */}
                    <Link to="/" className="text-white text-2xl font-bold">Vartalaap</Link>

                    {/* Links for larger screens */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link className="px-3 py-2 rounded-md text-sm font-medium text-white" to="/profile">Hello! {user.email}</Link>
                                <button className="px-3 py-2 rounded-md text-sm font-medium text-white" onClick={logout}>Logout</button>
                                <Link to="/Notes" className="px-3 py-2 rounded-md text-sm font-medium text-white">Notes</Link>
                                <button onClick={handleDiscussion} className="px-3 py-2 rounded-md text-sm font-medium text-white">Discussion Forum</button>
                            </>
                        ) : (
                            <>
                                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white">Home</Link>
                                <Link className="px-3 py-2 rounded-md text-sm font-medium text-white" to="/login">Login</Link>
                                <Link to="/signup" className="px-3 py-2 rounded-md text-sm font-medium text-white">Register</Link>
                            </>
                        )}
                    </div>

                    {/* Responsive toggle button for small screens */}
                    <button className="inline-flex items-center justify-center p-2 text-white rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={toggleSidebar}>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown menu for small screens */}
            {isSidebarOpen && (
                <div className="md:hidden bg-green-600 px-2 pt-2 pb-3 space-y-1">
                    {user ? (
                        <>
                            <Link className="block px-3 py-2 rounded-md text-base font-medium text-white" to="/profile">Hello! {user.email}</Link>
                            <button className="block px-3 py-2 rounded-md text-base font-medium text-white" onClick={logout}>Logout</button>
                            <Link to="/Notes" className="block px-3 py-2 rounded-md text-base font-medium text-white">Notes</Link>
                            <button onClick={handleDiscussion} className="block px-3 py-2 rounded-md text-base font-medium text-white">Discussion Forum</button>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white">Home</Link>
                            <Link className="block px-3 py-2 rounded-md text-base font-medium text-white" to="/login">Login</Link>
                            <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-white">Register</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
