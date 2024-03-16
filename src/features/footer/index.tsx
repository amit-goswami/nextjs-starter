import React from 'react'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200 flex flex-grow">
      <Container className="mx-auto w-full max-w-screen-xl p-2 py-0 lg:py-2 flex flex-col justify-between">
        <Container className="sm:flex sm:items-center sm:justify-between">
          <Container className="flex items-center justify-center gap-4">
            <Text className="text-sm text-gray-900 sm:text-center dark:text-gray-900">
              © 2024{' '}
              <a href="#" className="hover:underline">
                Baha™
              </a>
              . All Rights Reserved.
            </Text>
          </Container>

          <Container className="hidden sm:flex justify-center mt-0">
            links
          </Container>
        </Container>
      </Container>
    </footer>
  )
}
