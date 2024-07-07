import {
  IPaymentHistory,
  IProfileDetails,
  IRecentTrek
} from '../user.interface'
import userService from '../user.service'
import { useEffect, useState } from 'react'

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState<
    IProfileDetails | undefined | null
  >(null)
  const [recentTreks, setRecentTreks] = useState<
    IRecentTrek | undefined | null
  >(null)
  const [isLoading, setIsLoading] = useState(true)
  const [paymentHistory, setPaymentHistory] = useState<
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

  useEffect(() => {
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
