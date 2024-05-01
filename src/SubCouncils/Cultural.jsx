import React from 'react'
import EventCard from './CustomCard'

const Cultural = () => {
    return (
        <EventCard
            eventName="CULTURAL"
            imageUrl="https://th.bing.com/th/id/OIP.yiaJ6mLaRkBoe8XXGDQzWgHaFj?rs=1&pid=ImgDetMain"
            description="The cultural event, a celebration of diversity and tradition, encapsulates the vibrant essence of our society. It's a platform where students showcase their talents, creativity, and cultural heritage, fostering a sense of unity and belongingness. Through mesmerizing performances, colorful displays, and interactive experiences, the cultural event transcends boundaries, connecting individuals from various backgrounds and fostering mutual respect and understanding. From traditional dances and musical performances to art exhibitions and culinary delights, every facet of culture finds expression in this grand celebration. Participants not only entertain but also educate, sharing the rich tapestry of their customs, rituals, and folklore. Moreover, the cultural event serves as a catalyst for social cohesion, promoting inclusivity, tolerance, and cross-cultural dialogue. It's a testament to the beauty of diversity and the power of cultural exchange to inspire, enlighten, and enrich lives."
            events={['Adhyaay 22', 'Adhyaay 23']}
            applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
        />
    )
}

export default Cultural
