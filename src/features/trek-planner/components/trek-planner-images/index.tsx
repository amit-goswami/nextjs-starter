import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { ITrekDetail } from '../../trek-planner.interface'

type TrekPlannerImagesProps = {
  trekDetails: ITrekDetail
}

export const TrekPlannerImages = ({ trekDetails }: TrekPlannerImagesProps) => {
  return (
    <Container className="lg:w-1/2 grid grid-cols-2 grid-rows-6 h-[30vh] lg:h-[calc(100vh-198px)] relative">
      <Image
        className="row-span-3 object-cover w-full h-full p-2 dark:opacity-90"
        src={`https://mapmymap.github.io/baha-assets/${trekDetails.trek.media[0].replace('.jpg', '.png')}`}
        alt="image"
        width={1920}
        height={1080}
        placeholder="empty"
      />
      <Image
        className="row-span-2 object-cover w-full h-full p-2 dark:opacity-90"
        src={`https://mapmymap.github.io/baha-assets/${trekDetails.trek.media[1].replace('.jpg', '.png')}`}
        alt="image"
        width={1920}
        height={1080}
        placeholder="empty"
      />
      <Image
        className="row-span-2 object-cover w-full h-full p-2 dark:opacity-90"
        src={`https://mapmymap.github.io/baha-assets/${trekDetails.trek.media[2].replace('.jpg', '.png')}`}
        alt="image"
        width={1920}
        height={1080}
        placeholder="empty"
      />
      <Image
        className="row-span-3 object-cover w-full h-full p-2 dark:opacity-90"
        src={`https://mapmymap.github.io/baha-assets/${trekDetails.trek.media[3].replace('.jpg', '.png')}`}
        alt="image"
        width={1920}
        height={1080}
        placeholder="empty"
      />
      <Image
        className="row-span-2 object-cover w-full h-full p-2 dark:opacity-90"
        src={`https://mapmymap.github.io/baha-assets/${trekDetails.trek.media[4].replace('.jpg', '.png')}`}
        alt="image"
        width={1920}
        height={1080}
        placeholder="empty"
      />
      <Container className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-700 opacity-10 rounded-sm" />
    </Container>
  )
}
