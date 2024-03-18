export interface IGetOtpPayload {
  uid: string
  mobile: string
}

export interface IVerifyOtpPayload {
  uid: string
  mobile: string
  otp: string
}
