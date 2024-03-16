import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const AboutUsSection: React.FC = () => {
  return (
    <Container className="mx-auto max-w-screen-xl py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <Container className="flex flex-col items-center justify-center gap-8">
        <Text
          as="h2"
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          About Us
        </Text>
        <Text as="p" className="text-lg leading-8 text-gray-500">
          Baha is a travel company that provides a platform for travelers to
          discover and book unique travel experiences. We offer a wide range of
          accommodations, tours, and activities to suit every traveler’s needs.
        </Text>
      </Container>
    </Container>
  )
}
