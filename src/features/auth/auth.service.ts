import HttpService from '@/services/HttpService'
import { IUserLoginPayload } from './auth.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const userLogin = async (userData: IUserLoginPayload) => {
  try {
    const { data } = await HttpService.post(`${baseUrl}/login`, userData)
    return data
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const AuthService = {
  userLogin
}

export default AuthService
