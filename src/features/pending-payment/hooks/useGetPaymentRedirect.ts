import { useQuery } from '@tanstack/react-query'
import { pendingPaymentService } from '../pending-payment.service'
import { PENDING_PAYMENT_QUERY_KEYS } from '../pending-payment.interface'

export const useGetPaymentRedirect = (trekRequestId: string) => {
  return useQuery({
    queryKey: [PENDING_PAYMENT_QUERY_KEYS.GET_PAYMENT_REDIRECT, trekRequestId],
    queryFn: () => pendingPaymentService.getTrekRequestDetail(trekRequestId),
    enabled: !!trekRequestId
  })
}
