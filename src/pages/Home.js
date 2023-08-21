import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Features from '../components/Features/Features'
import FeatureDetailRight from '../components/FeatureDetailRight/FeatureDetailRight'
import FeatureDetailLeft from '../components/FeatureDetailLeft/FeatureDetailLeft'

const Home = () => {
  return (
    <div>
    <HeroSection/>
    <Features/>
    <FeatureDetailRight/>
    <FeatureDetailLeft/>
    </div>
  )
}

export default Home