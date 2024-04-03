import Link from 'next/link'
import Image from 'next/image'
import { ROUTES } from '@/shared/shared.interface'
import { Container } from '@/components/atoms/container'

export const Logo = () => {
  return (
    <Container className="flex lg:flex-1">
      <Link href={ROUTES.HOME}>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="filter dark:drop-shadow-lg dark:shadow-inherit"
          placeholder="empty"
        />
      </Link>
    </Container>
  )
}
