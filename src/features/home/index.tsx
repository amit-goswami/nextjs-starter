'use client'

import React from 'react'
import { HeroSection } from './components/hero-section'
import { PlanYourTrip } from './components/plan-your-trip'
import { WhyChooseUs } from './components/why-choose-us'
import { ContactUs } from './components/contact-us'
import { AboutUs } from './components/about-us'
import { BestSeasonalTreks } from './components/best-seasonal-treks'
import { EnquireNow } from './components/enquire-now'
import { useGetBestTreksList } from './hooks/useGetBestTreksList'
import { AllTreksComponent } from '../all-treks'
// import { DriverSection } from './components/driver-section'
// import { GuideSection } from './components/guide-section'
// import { useFirebaseAuth } from '@/providers/AuthProvider'

export const HomeComponent: React.FC = () => {
  // const { googleSignIn } = useFirebaseAuth()
  const { data: bestTreksList } = useGetBestTreksList()

  return (
    <React.Fragment>
      <HeroSection />
      {/* <DriverSection handleSignIn={googleSignIn} />
      <GuideSection handleSignIn={googleSignIn} /> */}
      <AllTreksComponent className="w-full relative mx-auto px-4 sm:px-8 py-3 overflow-y-scroll" />
      <BestSeasonalTreks bestTreksList={bestTreksList} />
      <WhyChooseUs />
      <AboutUs />
      <PlanYourTrip />
      <ContactUs />
      <EnquireNow />
    </React.Fragment>
  )
}
