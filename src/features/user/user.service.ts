import HttpService from '@/services/HttpService'
import {
  IBookingHistoryDetails,
  IPaymentHistory,
  IProfileDetails,
  IRecentTrek,
  IUserAllDetails
} from './user.interface'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const getProfileDetails = async () => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/user/getdetails`)
    if (!data) {
      throw new Error('No data found')
    }
    return data.user as IProfileDetails
  } catch (error) {
    console.error('Error during getProfileDetails request:', error)
    return null
  }
}

const getRecentTreks = async () => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/user/recent-trek`)
    return data as IRecentTrek
  } catch (error) {
    console.error('Error during getRecentTreks request:', error)
    return null
  }
}

const getUserAllDetails = async () => {
  try {
    const [profileDetails, recentTreks] = await Promise.all([
      getProfileDetails(),
      getRecentTreks()
    ])
    return {
      profileDetails,
      recentTreks
    } as IUserAllDetails
  } catch (error) {
    console.error('Error during getUserAllDetails request:', error)
    return null
  }
}

const updateUserProfile = async (updateDetailsPayload: Record<string, any>) => {
  const appendFormData = new FormData()
  appendFormData.append('user', JSON.stringify(updateDetailsPayload))
  try {
    const { data } = await HttpService.put(
      `${baseUrl}/user/updatedetails`,
      appendFormData,
      {
        headers: {
          'Content-Type': undefined
        }
      }
    )
    return data
  } catch (error) {
    console.error('Error during updateUserProfile request:', error)
    return null
  }
}

const getPaymentHistory = async (trekId: string | undefined) => {
  try {
    const paymentHistory: {
      data: IPaymentHistory[]
    } = await HttpService.get(
      `${baseUrl}/trek-request/${trekId}/payment-history`
    )
    return paymentHistory.data
  } catch (error) {
    console.error('Error during getPaymentHistory request:', error)
    return null
  }
}

const paymentInitilize = async (trekRequestId: string | null | undefined) => {
  try {
    const { data } = await HttpService.post(`${baseUrl}/payment/initiate`, {
      trekRequestId
    })
    return data
  } catch (error) {
    console.error('Error during paymentInitilize request:', error)
    return null
  }
}

const downloadTicket = async (trekId: string | undefined) => {
  const { data } = await HttpService.get(
    `agent/trek-request/${trekId}/ticket/download/`,
    {
      responseType: 'blob'
    }
  )
  return data
}

const bookingHistory = async (): Promise<IBookingHistoryDetails[] | []> => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/user/treks`)
    return data as IBookingHistoryDetails[]
  } catch (error) {
    console.error('Error during bookingHistory request:', error)
    return []
  }
}

const userService = {
  getProfileDetails,
  getRecentTreks,
  getUserAllDetails,
  updateUserProfile,
  getPaymentHistory,
  paymentInitilize,
  downloadTicket,
  bookingHistory
}

export default userService
