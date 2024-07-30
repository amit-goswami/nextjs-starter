import React from 'react'
import {
  IPaymentHistory,
  IProfileDetails,
  IRecentTrek
} from '../user.interface'
import userService from '../user.service'

const useUserDetails = () => {
  const [userDetails, setUserDetails] = React.useState<
    IProfileDetails | undefined | null
  >(null)
  const [recentTreks, setRecentTreks] = React.useState<
    IRecentTrek | undefined | null
  >(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [paymentHistory, setPaymentHistory] = React.useState<
    IPaymentHistory[] | null
  >(null)

  const fetchUserDetails = async () => {
    const userDetails = await userService.getUserAllDetails()
    const { profileDetails, recentTreks } = userDetails || {}

    setUserDetails(profileDetails)
    setRecentTreks(recentTreks)

    try {
      const { _id: trekId } = recentTreks || {}
      const paymentHistory = await userService.getPaymentHistory(trekId)
      setPaymentHistory(paymentHistory)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchUserDetails()
  }, [])

  return {
    userDetails,
    isLoading,
    recentTreks,
    paymentHistory
  }
}

export default useUserDetails
