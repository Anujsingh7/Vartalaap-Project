import React from 'react';
import EventCard from './CustomCard';

const Yoga = () => {
    return (
        <EventCard
            eventName="YOGA"
            imageUrl="https://th.bing.com/th/id/OIP.Ih1TsRYRAJ1iobpvNl-5YgHaFj?rs=1&pid=ImgDetMain"
            description="Yoga is a practice that combines physical postures, breathing exercises, and meditation or relaxation. It originated in ancient India and is now practiced worldwide as a way to improve health and well-being. Yoga is known for its many benefits, including increased flexibility, strength, and balance, as well as stress reduction and improved mental clarity. Whether you're a beginner or an experienced practitioner, yoga offers something for everyone. Join us in celebrating the annual Yoga day and experience the transformative power of this ancient practice."
            skills={['Body Stretching', 'Flexibility', 'Strength', 'Balance', 'Mindfulness', 'Breathing Techniques']}
            events={['Annual Yoga day 2022', 'Annual Yoga day 2023']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
        />
    );
}

export default Yoga;
