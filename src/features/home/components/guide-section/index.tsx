import Image from 'next/image'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { USER_ROLES } from '@/shared/shared.interface'

type GuideSectionProps = {
  handleSignIn: (role: USER_ROLES) => void
}

export const GuideSection: React.FC<GuideSectionProps> = ({
  handleSignIn
}: GuideSectionProps) => {
  return (
    <Container className="flex items-center justify-center gap-4 py-16 px-4">
      <Container className="max-w-[1240px] flex flex-col md:flex-row items-center justify-center sm:space-x-6">
        <Container className="relative flex flex-col items-strt justify-center space-y-4 z-[9]">
          <Text as="h1" className="text-3xl md:text-5xl font-bold">
            Empowering Guides Worldwide
          </Text>
          <Text as="p" className="text-xl md:text-xl text-start text-gray-600">
            Join our global community of knowledgeable guides and share your
            expertise with travelers from around the world.
          </Text>
          {/* <Container
            onClick={() => handleSignIn(USER_ROLES.GUIDE)}
            className="rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200"
          >
            Get Started <Text aria-hidden="true">&rarr;</Text>
          </Container> */}
          <Container
            onClick={() => handleSignIn(USER_ROLES.GUIDE)}
            className="rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200"
          >
            Coming Soon
          </Container>
        </Container>
        <Image
          src="/assets/guide.jpg"
          alt="guide-section"
          width={1920}
          height={1080}
          placeholder="empty"
          className="w-[500px] object-cover rounded-sm shadow-lg"
        />
      </Container>
    </Container>
  )
}
