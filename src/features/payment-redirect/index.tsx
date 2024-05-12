import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { PaymentSuccess } from './components/payment-success'
import { PaymentFailed } from './components/payment-failed'

type PaymentRedirectProps = {}

export const PaymentRedirect: React.FC<PaymentRedirectProps> = ({}) => {
  // const {} = useVerifyPayment()
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <PaymentSuccess />
        <PaymentFailed />
      </Container>
    </BackGroundDiv>
  )
}

// const [searchParams] = useSearchParams();
// const [isPaymentSucceess, setPaymentStatus] = useState();
// const orderID = searchParams.get('order_id');

// const retryPayment = async () => {
//   try {
//     const response = await retryPaymentService(orderID);
//     await paymentCheckOut(response.data.payment_session_id);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const verifyPayment = async () => {
//   try {
//     await verifyPaymentService(orderID);
//     setPaymentStatus(true);
//   } catch (err) {
//     setPaymentStatus(false);
//   }
// };
// useEffect(() => {
//   verifyPayment();
// }, [orderID]);
