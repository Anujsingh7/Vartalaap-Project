import React from 'react';
import EventCard from './CustomCard';

const Literary = () => {
    return (
        <EventCard
            eventName="LITERARY"
            imageUrl="https://i.pinimg.com/originals/f9/6d/b3/f96db31e806b7ce5aa37a02fa6c70603.jpg"
            description="The Literary Subcouncil is dedicated to promoting literature and fostering a love for reading, writing, and storytelling among students. Through various literary events and activities, we aim to provide a platform for students to express themselves creatively and explore the rich world of literature. Join us in celebrating the beauty of words and the power of storytelling."
            events={['Kavya Sandhya 22', 'Kavya Sandhya 23']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Creative Writing', 'Public Speaking', 'Literary Analysis', 'Event Planning']}
        />
    );
}

export default Literary;
