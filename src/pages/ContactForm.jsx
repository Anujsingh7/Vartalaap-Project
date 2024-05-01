import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submissionMessage, setSubmissionMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xvoedyyz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmissionMessage('Your message has been sent! We will contact you as soon as possible. Thanks!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmissionMessage('There was an error. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setSubmissionMessage('There was an error. Please try again later.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
                        rows="4"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-between">
                    <Link to="/" className="text-gray-600 font-bold hover:underline">Back</Link>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {submissionMessage && (
                <p className="mt-4 text-green-600">{submissionMessage}</p>
            )}
        </div>
    );
};

export default ContactForm;
