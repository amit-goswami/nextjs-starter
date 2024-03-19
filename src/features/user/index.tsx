'use client'

import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Container } from '@/components/atoms/container'

type UserLayoutProps = {
  children: React.ReactNode
  profile: React.ReactNode
  bookings: React.ReactNode
}

export const UserLayoutComponent = ({
  children,
  profile,
  bookings
}: UserLayoutProps) => {
  return (
    <BackGroundDiv>
      {children}
      <Tabs>
        <Panel title="User Profile">{profile}</Panel>
        <Panel title="Recent Bookings">{bookings}</Panel>
      </Tabs>
    </BackGroundDiv>
  )
}
