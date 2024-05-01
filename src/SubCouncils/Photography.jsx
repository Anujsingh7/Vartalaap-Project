import React from 'react';
import EventCard from './CustomCard';

const Photography = () => {
    return (
        <EventCard
            eventName="PHOTOGRAPHY"
            imageUrl="https://th.bing.com/th/id/OIP._keVWT8onGFF2YW9hiHJJwHaHa?rs=1&pid=ImgDetMain"
            description="Photography is an art form that allows us to capture and preserve moments in time. Whether it's capturing the beauty of nature, the excitement of an event, or the emotions of a person, photography has the power to evoke feelings and tell stories. Join us in exploring the world through the lens and expressing your creativity through photography."
            events={['Capture the Moment', 'Event 23']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Composition', 'Lighting', 'Editing', 'Creative Vision']}
        />
    );
}

export default Photography;
