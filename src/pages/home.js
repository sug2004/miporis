import React from 'react'
import Hero from '../components/Hero'
import ClientSlider from '../components/ClientSlider'
import Stats from '../components/Stats'
import Why from '../components/Why'
import ClientSays from '../components/ClientSays'
import Deliveries from '../components/Deliveries'
import Unlock from '../components/unlockThePower'
import StayContact from '../components/StayContact'
import Stats2 from '../components/Stats2'
import Why2 from '../components/Why2'
import KeyFeature from '../components/KeyFeature'
import Deliveries2 from '../components/Delivery2'

function Home() {
    return (
        <div className=''>
            <Hero />
            <ClientSlider />
            <Stats2 />
            <Why2 />
            <KeyFeature />
            <Deliveries2 />
            <Unlock />
            {/* <StayContact /> */}
        </div>
    )
}

export default Home