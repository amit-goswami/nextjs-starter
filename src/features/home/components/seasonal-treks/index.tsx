'use client'

import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { BackGroundDiv } from '@/features/shared/components/BackGroundDiv'
import { SeasonalTreksCard } from './components/SeasonalTreksCard'

export const SeasonalTreks: React.FC = () => {
  const { seasonalTreks } = useHomeStore()
  return (
    <Container
      className="mx-auto max-w-screen-xl py-6 px-4 sm:py-24 sm:px-6 lg:py-24"
      id="seasonal-treks"
    >
      <BackGroundDiv>
        <Container className="flex flex-col items-center justify-center my-8">
          <Text
            as="p"
            className="font-heading text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl"
          >
            Seasonal Treks
          </Text>
          <Text
            as="p"
            className="mt-4 max-w-3xl text-lg text-center text-gray-500"
          >
            Explore the best of the season with our curated collection of treks
          </Text>
        </Container>
      </BackGroundDiv>
      <Container className="flex items-center justify-center">
        <Container className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {seasonalTreks.map((seasonalTrek, index) => (
            <SeasonalTreksCard key={index} seasonalTrekDetails={seasonalTrek} />
          ))}
        </Container>
      </Container>
    </Container>
  )
}
