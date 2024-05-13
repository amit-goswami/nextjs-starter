'use client'

import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'

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
      <Tabs tabsState={{}}>
        <Panel title="User Profile">{profile}</Panel>
        <Panel title="Recent Bookings">{bookings}</Panel>
      </Tabs>
    </BackGroundDiv>
  )
}
