// About.js

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Vartalaap</h1>
      <p className="text-lg text-gray-600 mb-8">
        Vartalaap is an advanced platform designed for student interaction and engagement. Our platform aims to facilitate communication, collaboration, and knowledge sharing among students in educational institutions.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">Dedicated Subcouncils Page: Students can apply to various subcouncils dedicated to different activities and interests.</li>
        <li className="mb-2">Notes Portal: Access a comprehensive repository of study materials and notes, available for download.</li>
        <li className="mb-2">Dynamic Discussion Forum: Engage in meaningful discussions with peers using our dynamic discussion forum powered by WordPress.</li>
      </ul>
      <p className="text-lg text-gray-600 mb-8">
        At Vartalaap, we believe in fostering a vibrant community where students can connect, learn, and grow together. Whether you're seeking academic resources, opportunities for involvement, or simply a place to share ideas, Vartalaap is here for you.
      </p>
      <p className="text-lg text-gray-600">
        Join us today and be a part of the conversation!
      </p>
    </div>
  );
};

export default About;
