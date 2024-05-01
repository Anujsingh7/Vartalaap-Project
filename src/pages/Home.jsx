import React from 'react'
import SocialNavbar from '../components/SocialNavbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Footer from '../components/Footer'
import SubCouncilsList from '../components/SubcouncilList'
import TimeCapsule from '../components/TimeCapsule'

const Home = () => {
    return (
        <>
            <SocialNavbar />
            <Navbar />
            <Hero/>
            <TimeCapsule/>
            <SubCouncilsList/>
            <Footer/>
        </>
    )
}

export default Home