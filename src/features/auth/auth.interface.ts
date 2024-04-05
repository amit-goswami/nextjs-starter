import { USER_ROLES } from '@/shared/shared.interface'

export interface IUser {
  _id: string
  uid: string
  email: string
  isMobileVerified: boolean
  lastOtpSentAt?: string
  __v: number
}

export interface IUserLoginPayload {
  uid: string
  email: string
  role: USER_ROLES
}
