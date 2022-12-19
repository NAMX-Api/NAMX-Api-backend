import React from 'react'
import TopSection from '../components/topSection'
import AboutSection from '../components/aboutSection';
import FeaturedSection from '../components/featuredSection';

function Home() {
  return (
    <div className='overflow-hidden'>
      <TopSection />
      <AboutSection />
      <FeaturedSection />
    </div>
  )
}

export default Home