import HttpService from '@/services/HttpService'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const getTrekRequestDetail = async (trekRequestId: string) => {
  try {
    const response = await HttpService.get(
      `${apiUrl}/trek-request/${trekRequestId}`
    )
    return response
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const verifyPayment = async (orderId: string | null) => {
  try {
    await HttpService.post(`${apiUrl}/payment/verify`, {
      order_id: orderId
    })
    return true
  } catch (error) {
    console.error('Error during query request:', error)
    return false
  }
}

const retryPayment = async (orderId: string) => {
  try {
    const response = await HttpService.post(`${apiUrl}/payment/retry`, {
      order_id: orderId
    })
    return response
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const PaymentRedirectService = {
  getTrekRequestDetail,
  verifyPayment,
  retryPayment
}

export default PaymentRedirectService
