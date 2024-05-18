import HttpService from '@/services/HttpService'
import { IProfileDetails, IRecentTrek, IUserAllDetails } from './user.interface'

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
  try {
    const { data } = await HttpService.put(`${baseUrl}/user/updatedetails`, {
      user: {
        ...updateDetailsPayload
      }
    })
    return data
  } catch (error) {
    console.error('Error during updateUserProfile request:', error)
    return null
  }
}

const userService = {
  getProfileDetails,
  getRecentTreks,
  getUserAllDetails,
  updateUserProfile
}

export default userService
