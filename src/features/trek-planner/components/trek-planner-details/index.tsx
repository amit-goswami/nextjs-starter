'use client'

import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { StarIcon } from '@heroicons/react/20/solid'
import { ITrekDetail } from '../../trek-planner.interface'

const generateRandomNumber = () => Math.floor(Math.random() * 100)

type TrekPlannerDetailsProps = {
  trekDetails?: ITrekDetail
}

export const TrekPlannerDetailsComponent = ({
  trekDetails
}: TrekPlannerDetailsProps) => {
  console.log(trekDetails)
  return (
    <Container className="space-y-2">
      <Text
        as="h2"
        className="text-sm title-font text-gray-500 tracking-widest"
      >
        TREK NAME
      </Text>
      <Text
        as="h1"
        className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-gray-400"
      >
        {trekDetails?.trek?.trek_name}
      </Text>
      <Container className="flex mb-4">
        <Text className="flex items-center">
          <StarIcon className="w-4 h-4 text-brand" />
          <Text className="text-gray-600 ml-3">
            {generateRandomNumber()} Reviews
          </Text>
        </Text>
      </Container>
      <Text as="p" className="leading-relaxed dark:text-gray-600">
        {trekDetails?.trek?.details.overview}
      </Text>
      <Container className="flex justify-between items-center">
        <Text className="title-font font-medium text-2xl text-gray-900">
          {trekDetails?.trek?.state}
        </Text>
        <Button btnText="Book Now" />
      </Container>
    </Container>
  )
}
