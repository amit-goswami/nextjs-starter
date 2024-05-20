import { USER_ROLES } from '../shared/shared.interface'
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

export interface ICreateUserPayload {
  email: string
  otp: string
  password: string
  username: string
  usertype: USER_TYPE
}

export enum LOGIN_ALERT {
  SUCCESS = 'success',
  ERROR = 'Login failed',
  OTP_SENT = 'OTP sent to your email',
  USER_NOT_CREATED = 'User not created',
  USER_NOT_FOUND = 'User not found'
}
