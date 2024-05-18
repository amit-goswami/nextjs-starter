'use client'

import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { PaymentSuccess } from './components/payment-success'
import { PaymentFailed } from './components/payment-failed'
import { useSearchParams } from 'next/navigation'
import { Loader } from '@/components/molecules/loader'
import { useCheckForVerifyPayment } from './hooks/useCheckForVerifyPayment'

type PaymentRedirectProps = {}

export const PaymentRedirect: React.FC<PaymentRedirectProps> = ({}) => {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('order_id')

  const { data: isPaymentDone, isLoading } = useCheckForVerifyPayment(orderId)

  if (isLoading) return <Loader />

  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        {isPaymentDone === true ? (
          <PaymentSuccess />
        ) : (
          <PaymentFailed orderId={orderId} />
        )}
      </Container>
    </BackGroundDiv>
  )
}
