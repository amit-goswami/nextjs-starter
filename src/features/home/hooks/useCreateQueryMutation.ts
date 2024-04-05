import HomeService from '../home.service'
import { useMutation } from '@tanstack/react-query'
import { ICreateQueryPayload, IQuery } from '../home.interface'

export const useCreateQueryMutation = () => {
  return useMutation({
    mutationFn: (createQueryPayload: ICreateQueryPayload) => {
      return HomeService.createQuery(createQueryPayload)
    },
    onSuccess: (data: IQuery) => {
      if (!data) return null
      return data
    },
    onError: () => {}
  })
}
