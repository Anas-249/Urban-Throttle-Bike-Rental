import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'

const HomeTemp = () => {
  console.log('Home component is rendering')
  return (
    <>
        <Hero />
        <FeaturedSection />
        <Banner />
    </>
  )
}

export default HomeTemp