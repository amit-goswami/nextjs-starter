import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

type BestSeasonalTrekProps = {
  bestSeasonalTreks: { image: string; title: string; description: string }[]
}

export const BestSeasonalTreksCarousel: React.FC<BestSeasonalTrekProps> = ({
  bestSeasonalTreks
}: BestSeasonalTrekProps) => {
  return (
    <Container className="flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide">
      {bestSeasonalTreks.map((trek, index) => {
        return (
          <Container
            key={index}
            className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shaodw-lg"
          >
            <Container className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            <Text as="p" className="absolute z-20 bottom-5 left-5 text-white">
              {trek.title}
            </Text>
            <Image
              className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md 
              shadow-gray-900 drop-shadow-xl dark:opacity-90"
              src={trek.image}
              alt={trek.title}
              width={1920}
              height={1080}
            />
          </Container>
        )
      })}
    </Container>
  )
}
