import React from 'react';
import EventCard from './CustomCard';

const Sports = () => {
    return (
        <EventCard
            eventName="SPORTS"
            imageUrl="https://i.ytimg.com/vi/eUapV8oB45Q/maxresdefault.jpg"
            description="Sports play a crucial role in promoting physical health, teamwork, and discipline. Whether it's competing on the field, cheering from the sidelines, or organizing sports events, sports bring people together and instill values of determination and sportsmanship. Join us in celebrating the spirit of sportsmanship and camaraderie through our various sports events and activities."
            events={['Agaaz 22', 'Agaaz 23']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Teamwork', 'Leadership', 'Sportsmanship', 'Event Planning']}
        />
    );
}

export default Sports;
