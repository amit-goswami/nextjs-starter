import { Button } from '@/components/atoms/button'
import { paymentCheckOut } from '@/features/shared/payment-redirect'
import PaymentRedirectService from '../../payment-redirect.service'

type PaymentFailedProps = {
  orderId: string | null
}

export const PaymentFailed: React.FC<PaymentFailedProps> = ({ orderId }) => {
  const handlePayAgain = async () => {
    const response: any = await PaymentRedirectService.retryPayment(
      orderId as string
    )
    await paymentCheckOut(response.data.payment_session_id)
  }
  return (
    <div className="">
      <div className="p-6  md:mx-auto">
        <svg
          viewBox="0 0 208.891 208.891"
          className="text-red-600 w-16 h-16 mx-auto my-6"
          fill="currentColor"
        >
          <path
            d="M0,170l65.555-65.555L0,38.891L38.891,0l65.555,65.555L170,0l38.891,38.891l-65.555,65.555L208.891,170L170,208.891
	l-65.555-65.555l-65.555,65.555L0,170z"
          />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed!
          </h3>
          <div className="mt-4">
            <Button btnText="Try Again" onClick={() => handlePayAgain()} />
          </div>
        </div>
      </div>
    </div>
  )
}
