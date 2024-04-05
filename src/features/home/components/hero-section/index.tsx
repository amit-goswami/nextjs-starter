'use client'

import React from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { useTheme } from 'next-themes'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { EnquireNow } from '../enquire-now'

export const HeroSection: React.FC = () => {
  const { theme } = useTheme()

  useGSAP(() => {
    gsap.to('.hero', { opacity: 1, y: -10, delay: 0.5, duration: 1 })
  }, [])

  return (
    <Container className="w-full relative h-screen -mt-24">
      <Image
        src={theme !== 'light' ? '/assets/heroDark.jpg' : '/assets/hero.jpg'}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <Container className="hero mx-auto max-w-2xl py-32 sm:py-48 lg:py-36 opacity-0">
        <Container className="relative flex flex-col text-center items-center">
          <Text
            as="h1"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-700"
          >
            Discover Your Next Adventure
          </Text>
          <Link
            href={'#seasonal-treks'}
            className="relative rounded-full px-6 py-1 my-3 text-sm leading-6 text-black ring-2 ring-[#f68a1e] hover:bg-[#f68a1e] hover:bg-opacity-15 cursor-pointer dark:text-gray-600 dark:ring-gray-700/20 transition-all ease-in-out duration-300 dark:hover:bg-gray-900/20"
          >
            Explore Popular Seasonal Treks{' '}
            <Text aria-hidden="true" className="mx-1">
              &rarr;
            </Text>
          </Link>
        </Container>
      </Container>
      <EnquireNow />
    </Container>
  )
}
