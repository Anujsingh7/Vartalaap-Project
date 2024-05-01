import React from 'react';
import EventCard from './CustomCard';

const Ascpc = () => {
    return (
        <EventCard
            eventName="ASCPC"
            imageUrl="https://hbtu.in/assets/images/clubs/psmscclub-bg.png"
            description="The Alumni Student Connect Program Committee (ASCPC) is dedicated to fostering a strong relationship between the alumni and current students of our institution. Through various events and initiatives, ASCPC aims to provide networking opportunities, mentorship, and career guidance to students from experienced alumni. Join us in our efforts to bridge the gap between the past and present, and to create a vibrant community of alumni and students."
            events={['Samvaad 1.0', 'Samvaad 2.0']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Networking', 'Communication', 'Event Planning', 'Community Building']}
        />
    );
}

export default Ascpc;
