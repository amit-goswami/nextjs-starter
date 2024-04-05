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

export const AllTreksComponent: React.FC = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <Container className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
          <Text
            as="h2"
            className="text-4xl font-bold text-gray-800 mb-12 dark:text-gray-400"
          >
            All Treks
          </Text>
          <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {!loading &&
              new Array(9).fill(0).map((_, index) => (
                <Link href={ROUTES.TREK_PLANNER} key={index}>
                  <Card
                    title="Trek Title"
                    location="Location"
                    distance="Distance"
                    duration="Duration"
                  />
                </Link>
              ))}
            {loading &&
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
