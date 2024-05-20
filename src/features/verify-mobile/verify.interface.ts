import { USER_ROLES } from '@/features/shared/shared.interface'

export interface IGetOtpPayload {
  uid: string
  mobile: string
  role: USER_ROLES
}

export interface IVerifyOtpPayload {
  uid: string
  mobile: string
  otp: string
}
