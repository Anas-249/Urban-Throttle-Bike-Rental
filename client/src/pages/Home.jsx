import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'

const Home = () => {
  console.log('Home component is rendering')
  return (
    <>
        <Hero />
        <FeaturedSection />
    </>
  )
}

export default Home