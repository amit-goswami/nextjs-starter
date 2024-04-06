import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

type SeasonalTrekCardProps = {
  seasonalTrekDetails: {
    image: string
    title: string
    description: string
  }
  onClick: () => void
}

export const SeasonalTreksCard: React.FC<SeasonalTrekCardProps> = ({
  seasonalTrekDetails,
  onClick
}: SeasonalTrekCardProps) => {
  return (
    <Link href="/seasonal-treks" onClick={onClick}>
      <Container className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <Container className="h-96 w-72">
          <Image
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 dark:opacity-90"
            src={seasonalTrekDetails.image}
            alt="trek"
            layout="fill"
            placeholder="empty"
          />
        </Container>
        <Container className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 dark:to-gray-800" />
        <Container className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <Text
            as="h1"
            className="font-dmserif text-3xl font-bold text-white dark:text-gray-400"
          >
            {seasonalTrekDetails.title}
          </Text>
          <Text
            as="p"
            className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-400"
          >
            {seasonalTrekDetails.description}
          </Text>
          <Container className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 dark:text-gray-400 dark:bg-gray-600">
            See More
          </Container>
        </Container>
      </Container>
    </Link>
  )
}
