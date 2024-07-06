'use client'

import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { useGetProfileDetails } from './hooks/useGetProfileDetails'
import { Loader } from '@/components/molecules/loader'
import { UserProfileComponent } from './components/profile'
import { Container } from '@/components/atoms/container'
import { UpcomingTreksComponent } from './components/upcoming-treks'
import { BookingHistoryComponent } from './components/booking-history'

export const UserLayoutComponent = () => {
  const { data: userDetails, isLoading } = useGetProfileDetails()
  if (isLoading) return <Loader />
  return (
    <Container className="h-[calc(100vh-200px)]">
      <BackGroundDiv>
        <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-310px)] overflow-y-scroll">
          <UserProfileComponent userDetails={userDetails} />
          <UpcomingTreksComponent />
          <BookingHistoryComponent />
        </Container>
      </BackGroundDiv>
    </Container>
  )
}
