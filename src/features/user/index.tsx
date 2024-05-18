'use client'

import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { useGetProfileDetails } from './hooks/useGetProfileDetails'
import { Loader } from '@/components/molecules/loader'
import { RecentBookingsComponent } from './components/recent-bookings'
import { UserProfileComponent } from './components/profile'

type UserLayoutProps = {}

export const UserLayoutComponent = ({}: UserLayoutProps) => {
  const { data: userDetails, isLoading } = useGetProfileDetails()
  if (isLoading) return <Loader />
  return (
    <BackGroundDiv>
      <Tabs tabsState={{ userDetails }}>
        <Panel title="User Profile">
          <UserProfileComponent />
        </Panel>
        <Panel title="Recent Bookings">
          <RecentBookingsComponent />
        </Panel>
      </Tabs>
    </BackGroundDiv>
  )
}
