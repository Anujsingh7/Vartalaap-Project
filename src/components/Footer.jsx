
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Come together to make a change.</h1>
                        <p className="text-lg text-gray-400 leading-relaxed">Vartalaap: An advanced interaction platform for HPTU students. Explore sub-council details, discover ongoing events, download notes, and engage in dynamic discussions with senior members. Elevate your academic experience with Vartalaap.</p>
                    </div>
                    <div className="md:w-1/4 mt-8 md:mt-0">
                        <NavLink to="/contact" className="bg-green-500 text-white py-3 px-6 rounded-lg block text-center font-semibold transition duration-300 hover:bg-green-600">Contact Us</NavLink>
                    </div>
                </div>
                <hr className="border-gray-600 my-8" />
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <NavLink to="/" className="text-xl font-bold mb-2 block">vartalaap</NavLink>
                        <NavLink to="/" className="text-lg text-gray-400 pr-2 hover:text-white transition duration-300">Home</NavLink>
                        <NavLink to="/about" className="text-lg pr-2 text-gray-400 hover:text-white transition duration-300">About</NavLink>
                        <NavLink to="/contact" className="text-lg pr-2 text-gray-400 hover:text-white transition duration-300">Contact Us</NavLink>
                    </div>
                    <p className="text-gray-600 text-center md:text-right">Copyright © 2024 vartalaap</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
