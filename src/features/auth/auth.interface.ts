import { USER_ROLES } from '@/shared/shared.interface'
import { USER_TYPE } from '../user/user.interface'

export interface IUser {
  _id: string
  uid: string
  email: string
  isMobileVerified: boolean
  role: USER_ROLES
  __v: number
  lastOtpSentAt?: string
}

export interface IUserLoginPayload {
  uid: string
  email: string
  role: USER_ROLES
}

export interface IUserLogin {
  username: string
  token: string
  user_type: string
}

export interface IUserLoginBaha {
  email: string
  password: string
  user_type: USER_TYPE
}

export interface IUserLoginResponse {
  username: string
  token: string
  user_type: string
  email: string
  bio: string
  image: string | null
}

export enum LOGIN_ALERT {
  SUCCESS = 'success',
  ERROR = 'Login failed'
}
