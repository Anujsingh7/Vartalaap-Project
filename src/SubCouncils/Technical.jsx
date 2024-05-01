import React from 'react';
import EventCard from './CustomCard';

const Technical = () => {
    return (
        <EventCard
            eventName="TECHNICAL"
            imageUrl="https://media.licdn.com/dms/image/C560BAQEwbnVn_UcttQ/company-logo_200_200/0/1650995427017?e=2147483647&v=beta&t=9mq_RnQyohNr0WGtgZ6XXd2YHRHh1DMifQEr6f49lk0"
            description="The Technical Subcouncil is dedicated to fostering technical skills and innovation among students. Through various technical events, workshops, and competitions, we aim to provide students with opportunities to learn and apply technical knowledge, develop problem-solving skills, and explore emerging technologies. Join us in our journey to embrace the world of technology and drive innovation."
            events={['Technika 22', 'Technika 23']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            skills={['Problem Solving', 'Programming', 'Engineering Design', 'Data Analysis']}
        />
    );
}

export default Technical;
