import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { IBestTreksList } from '@/features/home/home.interface'
import { ROUTES } from '@/features/shared/shared.interface'

type BestSeasonalTrekProps = {
  bestSeasonalTreks: { image: string; title: string; description: string }[]
  bestTreksList: IBestTreksList | null | undefined
}

export const BestSeasonalTreksCarousel: React.FC<BestSeasonalTrekProps> = ({
  bestSeasonalTreks,
  bestTreksList
}: BestSeasonalTrekProps) => {
  return (
    <Container className="flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide">
      {bestTreksList?.treks &&
        bestTreksList.treks.map((trek, index) => {
          return (
            <Container className="min-w-[fit-content]" key={index}>
              <Link href={ROUTES.TREK_PLANNER.replace(':id', trek.trek_id)}>
                <Container
                  key={index}
                  className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shaodw-lg"
                >
                  <Container className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                  <Container className="absolute z-20 bottom-5 left-5 text-white">
                    {trek.trek_name}
                    <Container className="text-xs font-light flex items-center justify-between">
                      <Container>
                        <span className="text-xs font-light">{trek.state}</span>
                        <span className="ml-2">{trek.altitude} Altitude</span>
                        <span className="ml-2">|</span>
                        <span className="ml-2 text-brand">
                          {trek.days} days
                        </span>
                      </Container>
                      {/* <span className="ml-2">₹ {trek.price} onwards</span> */}
                    </Container>
                  </Container>
                  <Image
                    className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md 
              shadow-gray-900 drop-shadow-xl dark:opacity-90"
                    src={`https://mapmymap.github.io/baha-assets/${trek.media[0].replace('.jpg', '.png')}`}
                    alt={trek.trek_id}
                    width={1920}
                    height={1080}
                  />
                </Container>
              </Link>
            </Container>
          )
        })}
    </Container>
  )
}
