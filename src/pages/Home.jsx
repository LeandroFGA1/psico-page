import React from 'react'
import Hero from '../components/Hero'
import CardsSection from '../components/CardsSection'
import Presentation from '../components/Presentation'
import ContactSection from '../components/ContactSection'
import Locations from '../components/Locations'

function Home() {
  return (
    <>
      <Hero/>
      <Presentation/>
      <CardsSection/>
      <Locations/>
      <ContactSection/>
      
    </>
    
  )
}

export default Home