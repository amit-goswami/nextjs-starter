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
import { Loader } from '@/components/molecules/loader'

export const HomeComponent: React.FC = () => {
  const { data: bestTreksList, isLoading } = useGetBestTreksList()

  if (isLoading) return <Loader />

  return (
    <React.Fragment>
      <HeroSection />
      <AllTreksComponent className="w-full relative mx-auto px-4 sm:px-8 py-3" />
      <BestSeasonalTreks bestTreksList={bestTreksList} />
      <WhyChooseUs />
      <AboutUs />
      <PlanYourTrip />
      <ContactUs />
      <EnquireNow />
    </React.Fragment>
  )
}
