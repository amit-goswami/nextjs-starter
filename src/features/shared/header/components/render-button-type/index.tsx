import React from 'react'
import Link from 'next/link'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { IUserLogin } from '@/features/auth/auth.interface'
import { ROUTES } from '@/features/shared/shared.interface'
import { usePathname } from 'next/navigation'

type renderButtonTypeProps = {
  user: IUserLogin | null
  className?: string
  showProfile?: boolean
  handleSignOut: () => void
  handleSignIn: () => void
}

export const RenderButtonType = ({
  user,
  className = 'rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200',
  showProfile = false,
  handleSignOut
  // handleSignIn
}: renderButtonTypeProps) => {
  const pathname = usePathname()

  const isUserOnProfilePage = () => {
    return pathname === ROUTES.USER
  }

  return (
    <React.Fragment>
      {user === null && (
        <Link href={ROUTES.AUTH}>
          <Container className={`${className}`}>
            Login <Text aria-hidden="true">&rarr;</Text>
          </Container>
        </Link>
      )}
      {user !== null && !showProfile && (
        <Container className={`${className}`} onClick={() => handleSignOut()}>
          Logout <Text aria-hidden="true">&rarr;</Text>
        </Container>
      )}
      {user !== null && showProfile && !isUserOnProfilePage() && (
        <Link href={ROUTES.USER}>
          <Container className={`${className}`}>
            My Profile <Text aria-hidden="true">&rarr;</Text>
          </Container>
        </Link>
      )}
      {user !== null && showProfile && isUserOnProfilePage() && (
        <Link href={ROUTES.HOME}>
          <Container className={`${className}`}>
            Home <Text aria-hidden="true">&rarr;</Text>
          </Container>
        </Link>
      )}
    </React.Fragment>
  )
}
