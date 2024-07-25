import verifyService from '../verify.service'
import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from '../../shared/hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from '@/features/shared/shared.interface'
import { useFirebaseAuth } from '@/providers/auth-provider'
import { IGetOtpPayload } from '../verify.interface'

export const useGetOtpMutation = () => {
  const { setItem: setUserDetails } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USER_DETAILS
  )
  const { logOut } = useFirebaseAuth()

  return useMutation({
    mutationFn: (getOtpPayload: IGetOtpPayload) => {
      return verifyService.sentOtp(getOtpPayload)
    },
    onSuccess: (data) => {
      if (!data) return logOut()
      setUserDetails(data.user)
    },
    onError: () => {
      logOut()
    }
  })
}
