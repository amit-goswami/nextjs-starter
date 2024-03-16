'use client'

import Image from 'next/image'
import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const ContactUs = () => {
  const { stats } = useHomeStore()

  return (
    <Container
      className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-24"
      id="contact"
    >
      <Container
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <Container
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-t from-gray-950 to-gray-100"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </Container>
      <Image
        src="/assets/about.jpg"
        alt="Support image"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={2830}
        height={1500}
      />
      <Container className="mx-auto max-w-7xl px-6 lg:px-8">
        <Container className="mx-auto max-w-2xl lg:mx-0">
          <Text
            as="h2"
            className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl"
          >
            Get in Touch
          </Text>
          <Text as="p" className="mt-6 text-lg leading-8 text-gray-100">
            We are here to help you with any questions you may have. Reach out
            to us and we will respond as soon as we can.
          </Text>
        </Container>
        <Container className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Container key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-100">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-100">
                  {stat.value}
                </dd>
              </Container>
            ))}
          </dl>
        </Container>
      </Container>
    </Container>
  )
}
