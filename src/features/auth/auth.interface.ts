export interface IUser {
  _id: string
  uid: string
  email: string
  isMobileVerified: boolean
  createdAt: string
  lastOtpSentAt?: string
  nextOtpWillBeSentIn?: string
  __v: number
}

export interface IUserLoginPayload {
  uid: string
  email: string
}
