import React from 'react'
import footerConstants from './constants'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { SocialLinks } from './components/social-links'

export const FooterComponent: React.FC = () => {
  return (
    <footer className="flex flex-grow py-2 bg-gray-100 dark:bg-gray-800">
      <Container className="mx-auto w-full max-w-screen-xl p-2 py-0 lg:py-2 flex flex-col justify-between">
        <Container className="sm:flex sm:items-center sm:justify-between">
          <Container className="flex items-center justify-center gap-4">
            <Text className="text-bold text-gray-950 sm:text-center dark:text-gray-600">
              © 2024{' '}
              <a href="#" className="hover:underline">
                Baha™
              </a>
              . All Rights Reserved.
            </Text>
          </Container>
          <Container className="hidden sm:flex justify-center mt-0">
            {footerConstants.socialLinks.map((link, index) => (
              <SocialLinks
                key={index}
                href={link.href}
                svg={link.svg}
                label={link.label}
              />
            ))}
          </Container>
        </Container>
      </Container>
    </footer>
  )
}
