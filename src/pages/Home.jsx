import React from 'react'
import Hero from '../components/Hero'
import CardsSection from '../components/CardsSection'
import Presentation from '../components/Presentation'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
      <Hero/>
      <Presentation/>
      <CardsSection/>
      <ContactSection/>
    </>
    
  )
}

export default Home