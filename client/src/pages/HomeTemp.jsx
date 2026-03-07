import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Fotter from '../components/Fotter'

const HomeTemp = () => {
  console.log('Home component is rendering')
  return (
    <>
        <Hero />
        <FeaturedSection />
        <Banner />
        <Testimonial />
        <Newsletter />
        
    </>
  )
}

export default HomeTemp