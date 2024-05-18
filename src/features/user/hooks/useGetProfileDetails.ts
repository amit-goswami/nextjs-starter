import userService from '../user.service'
import { useQuery } from '@tanstack/react-query'
import { USER_PROFILE_QUERY_KEYS } from '../user.interface'

export const useGetProfileDetails = () => {
  return useQuery({
    queryKey: [USER_PROFILE_QUERY_KEYS.GET_PROFILE_DETAILS],
    queryFn: () => userService.getUserAllDetails()
  })
}
