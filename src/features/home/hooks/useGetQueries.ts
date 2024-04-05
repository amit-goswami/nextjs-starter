import HomeService from '../home.service'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../home.interface'

export const useGetQueries = (email: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_QUERIES],
    queryFn: () => HomeService.getQueries(email),
    enabled: !!email
  })
}
