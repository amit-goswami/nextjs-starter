import React from 'react'
import Image from 'next/image'
import { Circles } from './components/Circles'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { BackGroundDiv } from '@/features/shared/components/BackGroundDiv'

export const AboutUs = () => {
  return (
    <BackGroundDiv>
      <section className="overflow-hidden pt-20 pb-12 pl-6 pr-6" id="about">
        <Container className="container mx-auto">
          <Container className="flex flex-wrap items-center justify-between -mx-4">
            <Container className="w-full px-4 lg:w-6/12">
              <Container className="flex items-center -mx-3 sm:-mx-4">
                <Container className="w-full px-3 sm:px-4 xl:w-1/2">
                  <Container className="py-3 sm:py-4">
                    <Image
                      className="w-full rounded-sm dark:opacity-90"
                      src="/assets/about-2.jpg"
                      alt="about-2"
                      width={1920}
                      height={1080}
                      placeholder="empty"
                    />
                  </Container>
                  <Container className="py-3 sm:py-4">
                    <Image
                      className="w-full rounded-sm dark:opacity-90"
                      src="/assets/about-3.jpg"
                      alt="about-3"
                      width={1920}
                      height={1080}
                      placeholder="empty"
                    />
                  </Container>
                </Container>
                <Container className="w-full px-3 sm:px-4 xl:w-1/2">
                  <Container className="relative z-10 my-4">
                    <Image
                      className="w-full rounded-sm dark:opacity-90"
                      src="/assets/about-1.jpg"
                      alt="about-1"
                      width={1920}
                      height={1080}
                      placeholder="empty"
                    />
                    <Circles />
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <Container className="mt-10 lg:mt-0">
                <Text
                  as="h2"
                  className="mb-5 text-3xl font-bold text-dark text-gray-900 sm:text-[40px]/[48px] dark:text-gray-600"
                >
                  Our <span className="text-[#f68a1e]">Story.</span>
                </Text>
                <Text
                  as="p"
                  className="mb-5 text-base text-body-color dark:text-dark-6"
                >
                  Embark on a journey with Baha and explore the world like never
                  before. From breathtaking landscapes to vibrant cultures, our
                  travel experts are here to craft unforgettable experiences
                  that leave a lasting impression. Join us as we share our love
                  for travel and create memories that last a lifetime.
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
      </section>
    </BackGroundDiv>
  )
}
