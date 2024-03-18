import { create } from 'zustand'

type VerifyManagementState = {
  isOtpVerified: boolean
  setIsOtpVerified: (isOtpVerified: boolean) => void
}

const useVerifyStore = create<VerifyManagementState>((set) => ({
  isOtpVerified: false,
  setIsOtpVerified: (isOtpVerified) => set({ isOtpVerified })
}))

export default useVerifyStore
