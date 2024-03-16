import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { INavigationData } from '../../header.interface'

type NavOptionsProps = {
  navigationData: INavigationData[]
}

export const NavBarOptions = ({ navigationData }: NavOptionsProps) => {
  return (
    <Container className="flex flex-col lg:gap-x-12">
      {navigationData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-8 text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </Container>
  )
}
