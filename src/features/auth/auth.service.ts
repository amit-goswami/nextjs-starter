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
    if (!data.user) return false
    return data.user as IUserLoginResponse
  } catch (error) {
    return null
  }
}

const AuthService = {
  userLogin
}

export default AuthService
