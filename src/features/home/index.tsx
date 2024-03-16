import React from 'react'
import { HeroSection } from './components/hero-section'
import { PlanYourTrip } from './components/plan-your-trip'
import { SeasonalTreks } from './components/seasonal-treks'
import { WhyChooseUs } from './components/why-choose-us'
import { ContactUs } from './components/contact-us'
import { AboutUs } from './components/about-us'

export const HomeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <SeasonalTreks />
      <AboutUs />
      <WhyChooseUs />
      <PlanYourTrip />
      <ContactUs />
    </React.Fragment>
  )
}
