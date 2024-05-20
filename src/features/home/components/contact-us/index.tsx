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
      <Image
        src="/assets/about.jpg"
        alt="Support image"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center dark:opacity-90"
        width={2830}
        height={1500}
      />
      <Container className="mx-auto max-w-7xl px-6 lg:px-8">
        <Container className="mx-auto max-w-2xl lg:mx-0">
          <Text
            as="h2"
            className="text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl"
          >
            Get in <span className="text-brand">Touch</span>
          </Text>
          <Text as="p" className="mt-6 text-lg leading-8 text-gray-900">
            We are here to help you with any questions you may have. Reach out
            to us and we will respond as soon as we can.
          </Text>
        </Container>
        <Container className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <a
                key={stat.name}
                href={stat.link}
                className="flex flex-col-reverse"
              >
                <dt className="text-base leading-7 text-gray-100">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-100">
                  {stat.value}
                </dd>
              </a>
            ))}
          </dl>
        </Container>
      </Container>
    </Container>
  )
}
