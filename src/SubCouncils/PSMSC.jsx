import React from 'react'
import EventCard from './CustomCard'

const Psmsc = () => {
    return (
        <div>
            <EventCard
                eventName="PSMSC"
                imageUrl="https://hbtu.in/assets/images/clubs/psmscclub-bg.png"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat magnam modi non est? Temporibus possimus dolorum autem consequuntur rerum reiciendis commodi libero earum. Nesciunt quibusdam labore qui ad at neque? In animi labore et veniam id. Atque error sint quasi dolores sapiente sed ipsam non magni repellendus, architecto necessitatibus, recusandae at cupiditate voluptatum doloremque. Distinctio adipisci fugit enim corporis accusantium quo est placeat saepe, facere fuga iusto nam incidunt numquam consectetur maxime tenetur? Deleniti aliquam soluta corrupti, voluptas cum dolor possimus, autem impedit aspernatur ut ex velit quasi omnis quae! Sed placeat reiciendis odit ratione ad suscipit magnam provident."
                events={['Samvaad 1.0', 'Samvaad 2.0']}
                applyLink="https://forms.gle/drRdPZhpfqwbpiuU7"
            />

        </div>
    )
}

export default Psmsc