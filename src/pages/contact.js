import React from 'react'
import FormCtn from '../components/contact/form'
import WhyCtn from '../components/contact/Why'
import OurOffice from '../components/contact/OurOffice'
import Socialmedia from '../components/contact/Socialmedia'
import StayContactCtn from '../components/contact/StayContact'
import ClientSlider from '../components/ClientSlider'
import Map from '../components/contact/Map'

function Contact() {
    return (
        <div>
            <FormCtn />
            <ClientSlider />
            <OurOffice />
            <Map />
            {/* <Socialmedia /> */}
            <StayContactCtn />
        </div>
    )
}

export default Contact