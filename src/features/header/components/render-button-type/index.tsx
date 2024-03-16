import React from 'react'
import { Text } from '@/components/atoms/text'
import { Button } from '@/components/atoms/button'
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
  className = 'rounded-full px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-[#f68a1e] hover:bg-opacity-15 border-2 border-[#f68a1e] cursor-pointer',
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
        <Button
          className={`${className}`}
          onClick={() => handleSignOut()}
          btnText={
            <React.Fragment>
              Logout <Text aria-hidden="true">&rarr;</Text>
            </React.Fragment>
          }
        />
      )}
    </React.Fragment>
  )
}
