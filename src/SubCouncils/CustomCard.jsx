import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const EventCard = ({ eventName, imageUrl, description, events, applyLink, skills }) => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                {/* Big image with event name */}
                <div className="relative w-full h-96">
                    <img
                        src={imageUrl}
                        alt={eventName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-white text-4xl font-bold">{eventName}</h1>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-8 max-w-lg text-center">
                    <p className="text-gray-700">{description}</p>
                </div>

                {/* Skills */}
                {skills && (
                    <div className="mt-8 max-w-lg text-center">
                        <h2 className="text-lg font-semibold">Skills Required:</h2>
                        <ul className="mt-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="text-gray-700">{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Types of events */}
                {events && (
                    <div className="mt-8 max-w-lg text-center">
                        <h2 className="text-lg font-semibold">Types of Events:</h2>
                        <ul className="mt-2">
                            {events.map((event, index) => (
                                <li key={index} className="text-gray-700">
                                    <Link to="/404"><b>{event}</b></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Apply button */}
                <a href={applyLink} className="mt-8 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
                    Apply Now
                </a>
                <br/><br/>
            </div>
        </>
    );
};

export default EventCard;
