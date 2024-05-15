import userService from '../user.service'
import { useQuery } from '@tanstack/react-query'
import { USER_PROFILE_QUERY_KEYS } from '../user.interface'
import { useUserManagementStore } from '../store/user.store'

export const useGetProfileDetails = () => {
  const { setUserAllDetails } = useUserManagementStore()
  return useQuery({
    queryKey: [USER_PROFILE_QUERY_KEYS.GET_PROFILE_DETAILS],
    queryFn: () => userService.getUserAllDetails(),
    select(data) {
      if (!data) return null
      setUserAllDetails(data)
      return data
    }
  })
}
