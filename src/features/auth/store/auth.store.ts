import { create } from 'zustand'

type AuthManagementState = {
  isLoginTabActive: boolean
  registeredEmail: Record<string, string | number | boolean> | null
  isGetOtpClicked: boolean
  setIsGetOtpClicked: (isClicked: boolean) => void
  setIsLoginTabActive: (isActive: boolean) => void
  setRegisteredEmail: (
    email: Record<string, string | number | boolean> | null
  ) => void
}

const useAuthStore = create<AuthManagementState>((set) => ({
  isLoginTabActive: true,
  registeredEmail: null,
  isGetOtpClicked: false,
  setIsGetOtpClicked: (isClicked) => set({ isGetOtpClicked: isClicked }),
  setIsLoginTabActive: (isActive) => set({ isLoginTabActive: isActive }),
  setRegisteredEmail: (email) => set({ registeredEmail: email })
}))

export default useAuthStore
