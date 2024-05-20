import React from 'react'
import Link from 'next/link'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { IUserLogin } from '@/features/auth/auth.interface'
import { ROUTES } from '@/features/shared/shared.interface'

type renderButtonTypeProps = {
  user: IUserLogin | null
  className?: string
  handleSignOut: () => void
  handleSignIn: () => void
}

export const RenderButtonType = ({
  user,
  className = 'rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200',
  handleSignOut
  // handleSignIn
}: renderButtonTypeProps) => {
  return (
    <React.Fragment>
      {user === null && (
        <Link href={ROUTES.AUTH}>
          <Container className={`${className}`}>
            Login <Text aria-hidden="true">&rarr;</Text>
          </Container>
        </Link>
      )}
      {user !== null && (
        <Container className={`${className}`} onClick={() => handleSignOut()}>
          Logout <Text aria-hidden="true">&rarr;</Text>
        </Container>
      )}
    </React.Fragment>
  )
}
