import React from 'react'
import { HeroSection } from './components/hero-section'
import { PlanYourTrip } from './components/plan-your-trip'
import { SeasonalTreks } from './components/seasonal-treks'
import { WhyChooseUs } from './components/why-choose-us'
import { ContactUs } from './components/contact-us'
import { AboutUs } from './components/about-us'
import { BestSeasonalTreks } from './components/best-seasonal-treks'
import { EnquireNow } from './components/enquire-now'

export const HomeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <SeasonalTreks />
      <BestSeasonalTreks />
      <WhyChooseUs />
      <AboutUs />
      <PlanYourTrip />
      <ContactUs />
      <EnquireNow />
    </React.Fragment>
  )
}
