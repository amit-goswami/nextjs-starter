'use client'

import React from 'react'
import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const WhyChooseUs: React.FC = () => {
  const { features } = useHomeStore()

  return (
    <Container className="py-12">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Container className="lg:text-center">
          <Text
            as="h2"
            className="font-heading mb-4 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font"
          >
            Why choose us?
          </Text>
          <Text
            as="p"
            className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Commitment to You.
          </Text>
          <Text
            as="p"
            className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto"
          >
            See why clients continue to choose us for their needs
          </Text>
        </Container>

        <Container className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <Container className="relative" key={index}>
                <dt>
                  <Container className="absolute flex items-center justify-center rounded-md bg-primary-500">
                    <feature.icon
                      className="absolute left-1 top-1 h-12 w-12 text-[#f68a1e]"
                      aria-hidden="true"
                    />
                  </Container>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </Container>
            ))}
          </dl>
        </Container>
      </Container>
    </Container>
  )
}
