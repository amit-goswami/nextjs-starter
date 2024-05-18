// const verifyPayment = async () => {
//     try {
//       await verifyPaymentService(orderID);
//       setPaymentStatus(true);
//     } catch (err) {
//       setPaymentStatus(false);
//     }
//   };

import PaymentRedirectService from '../payment-redirect.service'
import { useQuery } from '@tanstack/react-query'
import { PAYMENT_REDIRECT_QUERY_KEYS } from '../payment-redirect.interface'

export const useCheckForVerifyPayment = (orderId: string | null) => {
  return useQuery({
    queryKey: [PAYMENT_REDIRECT_QUERY_KEYS.VERIFY_PAYMENT, orderId],
    queryFn: () => PaymentRedirectService.verifyPayment(orderId),
    enabled: !!orderId
  })
}
