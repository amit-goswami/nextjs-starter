import { load } from '@cashfreepayments/cashfree-js'

const mode = process.env.NEXT_PUBLIC_CASH_FREE_APP_ID

const paymentCheckOut = async (sessionID) => {
  const cashfree = await load({
    mode: mode
  })
  const checkoutOptions = {
    paymentSessionId: sessionID,
    redirectTarget: '_self'
  }
  cashfree.checkout(checkoutOptions)
}

const Payment = {
  paymentCheckOut
}

export default Payment
