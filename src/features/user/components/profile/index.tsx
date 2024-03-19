'use client'
import { Container } from '@/components/atoms/container'
import { useFirebaseAuth } from '@/providers/AuthProvider'

export const UserProfileComponent = () => {
  const { user } = useFirebaseAuth()

  return (
    <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-270px)] overflow-y-scroll">
      {user && (
        <Container className="flex space-x-2">
          <img
            className="w-32 h-32 rounded-full overflow-hidden object-cover border-2 border-primary-500"
            src={user.photoURL || '/assets/heor.jpg'}
            alt="profile picture"
          />
          <Container className="flex flex-col">
            <Container className="text-lg font-bold text-dark text-gray-900">
              {user.displayName}
            </Container>
            <Container className="text-sm text-body-color dark:text-dark-6">
              {user.email}
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  )
}
