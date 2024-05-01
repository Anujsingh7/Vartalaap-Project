import React from 'react';
import EventCard from './CustomCard';

const Nss = () => {
    return (
        <EventCard
            eventName="NSS"
            imageUrl="https://th.bing.com/th/id/OIP.G-akwqQmf8fDwEJduQad7wHaHM?rs=1&pid=ImgDetMain"
            description="The National Service Scheme (NSS) is a youth-centric program aimed at developing the personality and character of students through community service. It provides opportunities for students to actively contribute to the betterment of society while gaining practical experience, leadership skills, and a sense of social responsibility. Join us in making a positive impact on the community and fostering a spirit of volunteerism."
            events={['Blood Donation Campaign 22', 'Blood Donation Campaign 23']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Volunteer Management', 'Community Outreach', 'Event Planning', 'Leadership']}
        />
    );
}

export default Nss;
