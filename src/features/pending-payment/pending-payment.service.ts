import HttpService from '@/services/HttpService'
import { IPaymentRedirect } from './pending-payment.interface'

const getTrekRequestDetail = async () => {
  try {
    const { data } = await HttpService.get('/trek-request/${trekRequestId}')
    return data as IPaymentRedirect
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const createOrder = async (data: string) => {
  try {
    const response = await HttpService.post('/payment/initiate', {
      trek_request: data
    })
    return response
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

export const pendingPaymentService = {
  getTrekRequestDetail,
  createOrder
}
