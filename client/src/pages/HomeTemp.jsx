import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

const HomeTemp = () => {
  console.log('Home component is rendering')
  return (
    <>
        <Hero />
        <FeaturedSection />
        <Banner />
        <Testimonial />
    </>
  )
}

export default HomeTemp