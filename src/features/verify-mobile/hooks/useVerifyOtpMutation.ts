import verifyService from '../verify.service'
import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from '../../shared/hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from '@/shared/shared.interface'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import { IVerifyOtpPayload } from '../verify.interface'
import useVerifyStore from '../store/verify.store'

export const useVerifyOtpMutation = () => {
  const { setItem: setUserDetails } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USER_DETAILS
  )
  const { logOut } = useFirebaseAuth()
  const { setIsOtpVerified } = useVerifyStore()

  return useMutation({
    mutationFn: (verifyOtpPayload: IVerifyOtpPayload) => {
      return verifyService.verifyOtp(verifyOtpPayload)
    },
    onSuccess: (data) => {
      if (!data) return logOut()
      setUserDetails(data.user)
      setIsOtpVerified(true)
    },
    onError: () => {
      logOut()
    }
  })
}
