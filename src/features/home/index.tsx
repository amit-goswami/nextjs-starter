'use client'

import React from 'react'
import { HeroSection } from './components/hero-section'
import { PlanYourTrip } from './components/plan-your-trip'
import { SeasonalTreks } from './components/seasonal-treks'
import { WhyChooseUs } from './components/why-choose-us'
import { ContactUs } from './components/contact-us'
import { AboutUs } from './components/about-us'
import { BestSeasonalTreks } from './components/best-seasonal-treks'
import { EnquireNow } from './components/enquire-now'
// import { DriverSection } from './components/driver-section'
// import { GuideSection } from './components/guide-section'
// import { useFirebaseAuth } from '@/providers/AuthProvider'
import { useGetBestTreksList } from './hooks/useGetBestTreksList'

export const HomeComponent: React.FC = () => {
  // const { googleSignIn } = useFirebaseAuth()
  const { data: bestTreksList } = useGetBestTreksList()

  return (
    <React.Fragment>
      <HeroSection />
      {/* <DriverSection handleSignIn={googleSignIn} />
      <GuideSection handleSignIn={googleSignIn} /> */}
      <SeasonalTreks />
      <BestSeasonalTreks bestTreksList={bestTreksList} />
      <WhyChooseUs />
      <AboutUs />
      <PlanYourTrip />
      <ContactUs />
      <EnquireNow />
    </React.Fragment>
  )
}
