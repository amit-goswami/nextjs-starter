'use client'

import { Container } from '@/components/atoms/container'
import { FileUpload } from '@/components/organisms/image-upload'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import Image from 'next/image'

export const UserProfileComponent = () => {
  const { user } = useFirebaseAuth()

  return (
    <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-310px)] overflow-y-scroll">
      {user && (
        <Container className="flex space-x-2">
          <Image
            className="w-32 h-32 rounded-full overflow-hidden object-cover border-2 border-primary-500"
            src={user.photoURL || '/assets/hero.jpg'}
            alt="profile picture"
            width={128}
            height={128}
          />
          <Container className="flex flex-col">
            <Container className="text-lg font-bold text-dark text-gray-900 dark:text-gray-600">
              {user.displayName}
            </Container>
            <Container className="text-sm text-body-color dark:text-gray-600">
              {user.email}
            </Container>
          </Container>
        </Container>
      )}
      <FileUpload />
    </Container>
  )
}
