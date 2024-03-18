import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const Card = () => {
  return (
    <Container className="bg-white rounded-sm overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
      <Container className="w-full aspect-w-16 aspect-h-8 lg:h-80">
        <Image
          src="/assets/hero.jpg"
          alt="Product 1"
          className="h-full w-full object-cover object-top"
          width={300}
          height={300}
        />
      </Container>
      <Container className="p-6">
        <Text as="h3" className="text-lg font-bold text-gray-800">
          Himachal
        </Text>
        <Container className="mt-4 flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm text-gray-700">6 km</p>
          <p className="text-sm text-gray-700">3 days</p>
        </Container>
      </Container>
    </Container>
  )
}
