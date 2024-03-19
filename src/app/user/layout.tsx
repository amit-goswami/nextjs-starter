import { UserLayoutComponent } from '@/features/user'

type UserLayoutProps = {
  children: React.ReactNode
  profile: React.ReactNode
  bookings: React.ReactNode
}

const UserLayout: React.FC<UserLayoutProps> = ({
  children,
  profile,
  bookings
}: UserLayoutProps) => {
  return (
    <UserLayoutComponent profile={profile} bookings={bookings}>
      {children}
    </UserLayoutComponent>
  )
}

export default UserLayout
