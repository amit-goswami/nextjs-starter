import { load } from '@cashfreepayments/cashfree-js'

const mode = process.env.NEXT_PUBLIC_CASH_FREE_APP_ID

export const paymentCheckOut = async (sessionID) => {
  const cashfree = await load({
    mode: mode
  })
  const checkoutOptions = {
    paymentSessionId: sessionID,
    redirectTarget: '_self'
  }
  cashfree.checkout(checkoutOptions)
}
