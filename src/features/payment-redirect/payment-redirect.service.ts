import HttpService from '@/services/HttpService'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const createOrder = async (data: string) => {
  try {
    const response = await HttpService.post(`${apiUrl}/payment/initiate`, data)
    return response
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

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

const verifyPayment = async (orderId: string) => {
  try {
    const response = await HttpService.post(`${apiUrl}/payment/verify/`, {
      order_id: orderId
    })
    return response
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const retryPayment = async (orderId: string) => {
  try {
    const response = await HttpService.post(`${apiUrl}/payment/retry/`, {
      order_id: orderId
    })
    return response
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const PaymentRedirectService = {
  createOrder,
  getTrekRequestDetail,
  verifyPayment,
  retryPayment
}

export default PaymentRedirectService
