import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { PaymentSuccess } from './components/payment-success'
import { PaymentFailed } from './components/payment-failed'

type PaymentRedirectProps = {}

export const PaymentRedirect: React.FC<PaymentRedirectProps> = ({}) => {
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <PaymentSuccess />
        <PaymentFailed />
      </Container>
    </BackGroundDiv>
  )
}
