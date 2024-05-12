import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { ClockIcon } from '@heroicons/react/20/solid'

type CardProps = {
  title: string
  location: string
  distance: string
  duration: string | number
}

export const Card = ({ title, location, distance, duration }: CardProps) => {
  return (
    <Container className="bg-transparent rounded-sm overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
      <Container className="w-full aspect-w-16 aspect-h-8 lg:h-80">
        <Image
          src="/assets/hero.jpg"
          alt="Product 1"
          className="h-full w-full object-cover object-top dark:opacity-90"
          width={300}
          height={300}
          placeholder="empty"
        />
      </Container>
      <Container className="p-6">
        <Text
          as="h3"
          className="text-lg font-bold text-gray-800 dark:text-gray-400"
        >
          {title}
        </Text>
        <Text as="p" className="text-sm text-gray-600">
          {location}
        </Text>
        <Container className="mt-4 flex items-center justify-between flex-wrap gap-2">
          <Text as="p" className="text-sm text-gray-700">
            {distance}
          </Text>
          <Container className="flex items-center space-x-1">
            <ClockIcon className="h-4 w-4 text-brand" />
            <Text as="p" className="text-sm text-gray-700">
              {duration} days
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
