'use client'

import React from 'react'
import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { BestSeasonalTreksCarousel } from './components/BestSeasonalTreksCarousel'

export const BestSeasonalTreks: React.FC = () => {
  const { bestSeasonalTreks } = useHomeStore()
  return (
    <Container className="py-12">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Container className="lg:text-center">
          <Text
            as="h2"
            className="font-heading mb-4 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font"
          >
            Best Seasonal Treks
          </Text>
        </Container>
      </Container>
      <BestSeasonalTreksCarousel bestSeasonalTreks={bestSeasonalTreks} />
    </Container>
  )
}
