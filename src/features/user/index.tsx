'use client'

import useUserDetails from './hooks/useUserDetails'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Loader } from '@/components/molecules/loader'
import { UserProfileComponent } from './components/profile'
import { Container } from '@/components/atoms/container'
import { UpcomingTreksDetailsComponent } from './components/upcoming-treks'
import { BookingHistoryComponent } from './components/booking-history'
import { PaymentHistoryDetailsComponent } from './components/payment-history'

export const UserLayoutComponent = () => {
  const { userDetails, recentTreks, paymentHistory, isLoading } =
    useUserDetails()

  console.log('userDetails', {
    userDetails,
    recentTreks,
    paymentHistory,
    isLoading
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container className="h-[calc(100vh-200px)]">
      <BackGroundDiv>
        <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-310px)] overflow-y-scroll">
          <UserProfileComponent profileDetails={userDetails} />
          <hr className="border-t border-gray-300 my-4" />
          <UpcomingTreksDetailsComponent recentTreks={recentTreks} />
          <hr className="border-t border-gray-300 my-4" />
          <PaymentHistoryDetailsComponent recentTreks={recentTreks} />
          <hr className="border-t border-gray-300 my-4" />
          <BookingHistoryComponent />
        </Container>
      </BackGroundDiv>
    </Container>
  )
}
