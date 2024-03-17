import React from 'react'
import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'

export const SeasonalTreksComponent: React.FC = () => {
  return (
    <Container className="w-full relative h-screen">
      <BackGroundDiv>
        <Container className="mx-auto max-w-2xl py-10">
          Seasonal Treks List
        </Container>
      </BackGroundDiv>
    </Container>
  )
}
