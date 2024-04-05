import React from 'react'
import { Text } from '@/components/atoms/text'
import { User } from 'firebase/auth'
import { Container } from '@/components/atoms/container'

type renderButtonTypeProps = {
  user: User | null
  className?: string
  handleSignOut: () => void
  handleSignIn: () => void
}

export const RenderButtonType = ({
  user,
  className = 'rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200',
  handleSignOut,
  handleSignIn
}: renderButtonTypeProps) => {
  return (
    <React.Fragment>
      {user === null && (
        <Container className={`${className}`} onClick={() => handleSignIn()}>
          Login <Text aria-hidden="true">&rarr;</Text>
        </Container>
      )}
      {user !== null && (
        <Container className={`${className}`} onClick={() => handleSignOut()}>
          Logout <Text aria-hidden="true">&rarr;</Text>
        </Container>
      )}
    </React.Fragment>
  )
}
