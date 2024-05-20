import AuthService from '../auth.service'
import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from '../../shared/hooks/useLocalStorage'
import { IUser, IUserLoginPayload } from '../auth.interface'
import { useFirebaseAuth } from '@/providers/AuthProvider'

export interface IResponse {
  message: string
  user: IUser
}

export const useCreateUserMutation = () => {
  // const { setItem: setUserDetails } = useLocalStorage(
  //   LOCAL_STORAGE_KEYS.USER_DETAILS
  // )
  // const { logOut } = useFirebaseAuth()
  // return useMutation({
  //   mutationFn: (userData: IUserLoginPayload) => {
  //     return AuthService.userLogin(userData)
  //   },
  //   onSuccess: (data: IResponse) => {
  //     if (!data) return logOut()
  //     setUserDetails(data.user)
  //   },
  //   onError: () => {
  //     logOut()
  //   }
  // })
}
