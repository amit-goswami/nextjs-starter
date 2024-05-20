import HttpService from '@/services/HttpService'
import Logger from '@/libs/logger.util'
import { IUserLoginBaha, IUserLoginResponse } from './auth.interface'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const userLogin = async (userLoginPayload: IUserLoginBaha) => {
  try {
    const { data } = await HttpService.post(`${baseUrl}/users/login`, {
      user: {
        ...userLoginPayload
      }
    })
    if (!data.user) throw new Error('User not found')
    return data.user as IUserLoginResponse
  } catch (error) {
    Logger.error('User login error')
    return null
  }
}

const AuthService = {
  userLogin
}

export default AuthService
