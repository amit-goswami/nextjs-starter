import HttpService from '@/services/HttpService'
import { IGetOtpPayload, IVerifyOtpPayload } from './verify.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const sentOtp = async (getOtpPayload: IGetOtpPayload) => {
  try {
    const { data } = await HttpService.post(
      `${baseUrl}/user/sentotp`,
      getOtpPayload
    )
    return data
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const verifyOtp = async (verifyOtpPayload: IVerifyOtpPayload) => {
  try {
    const { data } = await HttpService.post(
      `${baseUrl}/user/verifyotp`,
      verifyOtpPayload
    )
    return data
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const verifyService = {
  sentOtp,
  verifyOtp
}

export default verifyService
