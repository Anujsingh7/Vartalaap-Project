import React from 'react';

function About() {
  return (
    <section className="bg-green-100 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Responsive video section */}
          <div className="flex-1 lg:flex-grow">
            <video
              src="https://hbtu.ac.in/wp-content/uploads/centenary/Time Capsule-100yr-HBTU.mp4"
              type="video/mp4"
              className="rounded-lg object-cover w-full lg:h-80 md:h-64 h-48" // Set appropriate height breakpoints
              poster="https://hbtu.ac.in/wp-content/uploads/2023/01/hbtu-logo-new.png" // Optional poster image
              controls
              autoPlay
              muted
              loop
            />
          </div>

          {/* Text content section */}
          <div className="flex-1 flex flex-col justify-center lg:flex-grow">
           
            <p className="text-lg text-gray-800 sm:mx-5">
              Harcourt Butler Technical University (HBTI) is a premier technical university located in Kanpur, India. Established in 2016 by the Government of Uttar Pradesh, it has already secured a prestigious NAAC Grade A+ in its first cycle. HBTI aims to be a leading residential university, fostering excellence in research, development, and incubation across various fields, including engineering, technology, basic and applied sciences, humanities, social sciences, management, architecture, and other professional courses.
              <br />
              HBTI's mission is to promote studies, research, and innovation in engineering, enhance skill development through continuous education programs, and achieve excellence in higher technical education. With its dedication to these goals, HBTI is poised to become a center of excellence in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
