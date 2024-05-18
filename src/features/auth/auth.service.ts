import HttpService from '@/services/HttpService'
import { IUserLoginBaha, IUserLoginResponse } from './auth.interface'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const userLogin = async (userLoginPayload: IUserLoginBaha) => {
  try {
    const { data } = await HttpService.post(`${baseUrl}/users/login`, {
      user: {
        ...userLoginPayload
      }
    })
    console.log('data:', data)
    return data.user as IUserLoginResponse
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const AuthService = {
  userLogin
}

export default AuthService
