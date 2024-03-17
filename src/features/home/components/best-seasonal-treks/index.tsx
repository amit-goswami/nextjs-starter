'use client'

import React from 'react'
import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { BestSeasonalTreksCarousel } from './components/BestSeasonalTreksCarousel'

export const BestSeasonalTreks: React.FC = () => {
  const { bestSeasonalTreks } = useHomeStore()
  return (
    <section>
      <Container className="py-12">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Container className="lg:text-center">
            <Text
              as="p"
              className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl"
            >
              Best Seasonal Treks for You
            </Text>
          </Container>
        </Container>
        <BestSeasonalTreksCarousel bestSeasonalTreks={bestSeasonalTreks} />
      </Container>
    </section>
  )
}
