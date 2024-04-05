'use client'

import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { SeasonalTreksCard } from './components/SeasonalTreksCard'
import { BackGroundDiv } from '@/features/shared/components/BackGroundDiv'
import { Text } from '@/components/atoms/text'

export const SeasonalTreks: React.FC = () => {
  const { seasonalTreks } = useHomeStore()
  return (
    <Container
      className="mx-auto max-w-screen-xl py-6 px-4 sm:py-24 sm:px-6 lg:py-24"
      id="seasonal-treks"
    >
      <Container className="lg:text-center">
        <Text
          as="h2"
          className="font-heading text-center mb-4 px-6 rounded-full md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font ring-2 ring-brand leading-7 dark:text-gray-600"
        >
          Seasonal Treks
        </Text>
      </Container>
      <BackGroundDiv>
        <Container className="flex items-center justify-center">
          <Container className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {seasonalTreks.map((seasonalTrek, index) => (
              <SeasonalTreksCard
                key={index}
                seasonalTrekDetails={seasonalTrek}
              />
            ))}
          </Container>
        </Container>
      </BackGroundDiv>
    </Container>
  )
}
