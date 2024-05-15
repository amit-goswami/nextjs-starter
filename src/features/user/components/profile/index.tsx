'use client'

import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { FileUpload } from '@/components/organisms/image-upload'
import { useUserManagementStore } from '../../store/user.store'

export const UserProfileComponent = () => {
  const tabsState = {
    username: 'John Doe',
    email: ''
  }
  return (
    <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-310px)] overflow-y-scroll">
      {tabsState && (
        <Container className="flex space-x-2">
          <Image
            className="w-32 h-32 rounded-full overflow-hidden object-cover border-2 border-primary-500"
            src={'/assets/hero.jpg'}
            alt="profile picture"
            width={128}
            height={128}
          />
          <Container className="flex flex-col">
            <Container className="text-lg font-bold text-dark text-gray-900 dark:text-gray-600">
              {tabsState.username}
            </Container>
            <Container className="text-sm text-body-color dark:text-gray-600">
              {tabsState.email}
            </Container>
          </Container>
        </Container>
      )}
      <FileUpload />
    </Container>
  )
}
