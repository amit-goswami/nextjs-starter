import { Suspense } from 'react'
import { PaymentRedirect } from '@/features/payment-redirect'

export default function PaymentRedirectPage() {
  return (
    <Suspense>
      <PaymentRedirect />
    </Suspense>
  )
}
