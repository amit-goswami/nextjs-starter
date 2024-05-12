'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Container } from '@/components/atoms/container'
import { SeasonalTreks } from '../home/components/seasonal-treks'
import { Text } from '@/components/atoms/text'
import { ROUTES } from '@/shared/shared.interface'
import { Card } from '@/components/molecules/card'
import { CardSkeleton } from '@/components/molecules/card/card-skeleton'
import { useGetBestTreksList } from '../home/hooks/useGetBestTreksList'

export const AllTreksComponent: React.FC = () => {
  const { data: bestTreksList } = useGetBestTreksList()

  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-180px)] overflow-y-scroll">
        <Container className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
          <Text
            as="h2"
            className="text-4xl font-bold text-gray-800 mb-12 dark:text-gray-400"
          >
            All Treks
          </Text>
          <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestTreksList &&
              bestTreksList?.treks?.map((trek, index) => (
                <Link
                  href={ROUTES.TREK_PLANNER.replace(':id', trek.trek_id)}
                  key={index}
                >
                  <Card
                    title={trek.trek_name}
                    location={trek.state}
                    distance={trek.altitude}
                    duration={trek.days}
                  />
                </Link>
              ))}
            {!bestTreksList &&
              new Array(9)
                .fill(0)
                .map((_, index) => <CardSkeleton key={index} />)}
          </Container>
        </Container>
        <SeasonalTreks />
      </Container>
    </BackGroundDiv>
  )
}
