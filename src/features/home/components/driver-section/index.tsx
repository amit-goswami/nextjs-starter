import Image from 'next/image'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '@/features/shared/components/BackGroundDiv'
import { USER_ROLES } from '@/shared/shared.interface'

type DriverSectionProps = {
  handleSignIn: (role: USER_ROLES) => void
}

export const DriverSection: React.FC<DriverSectionProps> = ({
  handleSignIn
}: DriverSectionProps) => {
  return (
    <BackGroundDiv>
      <Container className="flex items-center justify-center gap-4 py-16 px-4">
        <Container className="max-w-[1240px] flex flex-col md:flex-row items-center justify-center sm:space-x-6">
          <Image
            src="/assets/driver.jpg"
            alt="driver-image"
            width={1920}
            height={1080}
            placeholder="empty"
            className="w-[500px] object-cover rounded-sm shadow-lg"
          />
          <Container className="flex flex-col items-strt justify-center space-y-4">
            <Text as="h1" className="text-3xl md:text-5xl font-bold">
              Drive when you want, make what you need
            </Text>
            <Text
              as="p"
              className="text-xl md:text-xl text-start text-gray-600"
            >
              Make money on your schedule with deliveries or rides.
            </Text>
            <Container
              onClick={() => handleSignIn(USER_ROLES.DRIVER)}
              className="rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200"
            >
              Get Started <Text aria-hidden="true">&rarr;</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
