import React from 'react'
import { HeroSection } from './components/hero-section'
import { AboutUsSection } from './components/about-section'

export const HomeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutUsSection />
    </React.Fragment>
  )
}
