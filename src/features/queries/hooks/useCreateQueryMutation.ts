import QueryService from '../queries.service'
import { ICreateQueryPayload, IQuery } from '../queries.interface'
import { useMutation } from '@tanstack/react-query'

export const useCreateQueryMutation = () => {
  return useMutation({
    mutationFn: (createQueryPayload: ICreateQueryPayload) => {
      return QueryService.createQuery(createQueryPayload)
    },
    onSuccess: (data: IQuery) => {
      if (!data) return null
      return data
    },
    onError: () => {}
  })
}
