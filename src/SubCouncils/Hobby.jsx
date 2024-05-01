import React from 'react';
import EventCard from './CustomCard';

const Hobby = () => {
    return (
        <EventCard
            eventName="HOBBY"
            imageUrl="https://th.bing.com/th/id/OIP.8g9qrnEsDhuekAmGbSfd2gHaEK?rs=1&pid=ImgDetMain"
            description="The Hobby Subcouncil encourages students to explore their interests and passions outside of academic pursuits. Whether you're into arts and crafts, music, sports, or any other hobby, this subcouncil provides a platform for you to connect with like-minded individuals, hone your skills, and showcase your talents. Join us in our various hobby-related events and unleash your creativity!"
            events={['Hobby 1.0', 'Hobby 2.0']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Creativity', 'Teamwork', 'Organization', 'Event Planning']}
        />
    );
}

export default Hobby;
