import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Card } from '@/components/molecules/card'
import { Text } from '@/components/atoms/text'
import { ROUTES } from '@/shared/shared.interface'

export const SeasonalTreksComponent: React.FC = () => {
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <Container>
          <Container className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <Text as="h2" className="text-4xl font-bold text-gray-800 mb-12">
              Seasonal Treks
            </Text>
            <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {new Array(10).fill(0).map((_, index) => (
                <Link href={ROUTES.TREK_PLANNER} key={index}>
                  <Card />
                </Link>
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
