import Link from 'next/link'
import CLASSES from '@/features/shared/tailwind-classes'
import { Container } from '@/components/atoms/container'
import { INavigationData } from '../../header.interface'
import { IUserLogin } from '@/features/auth/auth.interface'

type NavOptionsProps = {
  navigationData: INavigationData[]
  user: IUserLogin | null
}

export const NavBarOptions = ({ navigationData, user }: NavOptionsProps) => {
  return (
    <Container className="flex flex-col lg:gap-y-2">
      {user && (
        <Link href="/user" className={CLASSES.LINKS.BASE}>
          Profile
        </Link>
      )}
      {navigationData.map((item) => (
        <Link key={item.name} href={item.href} className={CLASSES.LINKS.BASE}>
          {item.name}
        </Link>
      ))}
    </Container>
  )
}
