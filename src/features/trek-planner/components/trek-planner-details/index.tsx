'use client'

import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { StarIcon } from '@heroicons/react/20/solid'
import { ITrekDetail } from '../../trek-planner.interface'

const generateRandomNumber = () => Math.floor(Math.random() * 100)

type TrekPlannerDetailsProps = {
  tabsState?: ITrekDetail
  handleChangeTabs?: (index: number) => void
}

export const TrekPlannerDetailsComponent = ({
  tabsState,
  handleChangeTabs
}: TrekPlannerDetailsProps) => {
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
        {tabsState?.trek?.trek_name}
      </Text>
      {tabsState?.trek?.state}
      <Container className="flex mb-4">
        <Text className="flex items-center">
          <StarIcon className="w-4 h-4 text-brand" />
          <Text className="text-gray-600 ml-3">
            {generateRandomNumber()} Reviews
          </Text>
        </Text>
      </Container>
      <Text as="p" className="leading-relaxed dark:text-gray-600">
        {tabsState?.trek?.details.overview}
      </Text>
      <Container className="flex justify-between items-center">
        <Text className="title-font font-medium text-2xl text-gray-900">
          &#8377; {tabsState?.trek?.price}
        </Text>
        <Button
          btnText="Book Now"
          onClick={() => handleChangeTabs && handleChangeTabs(5)}
        />
      </Container>
      <Container className="mt-4 italic">
        <span className="text-red-500">*</span>
        The price provided is solely for the trek itself. The total price will
        vary based on the comprehensive itinerary crafted after a discussion
        with our Trek Expert.
      </Container>
    </Container>
  )
}
