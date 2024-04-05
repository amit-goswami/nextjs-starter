import QueryService from '../queries.service'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../queries.interface'

export const useGetQueries = (email: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_QUERIES],
    queryFn: () => QueryService.getQueries(email),
    enabled: !!email
  })
}
