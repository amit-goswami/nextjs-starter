import React from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'

export const HeroSection: React.FC = () => {
  return (
    <Container className="w-full relative h-screen -mt-24">
      <Image
        src="/assets/hero.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <Container className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-700 opacity-10" />
      <Container className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
        <Container className="relative flex flex-col text-center items-center z-0">
          <Text
            as="h1"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Discover Your Next Adventure
          </Text>
        </Container>
      </Container>
    </Container>
  )
}
