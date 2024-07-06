export enum PENDING_PAYMENT_QUERY_KEYS {
  GET_PAYMENT_REDIRECT = 'GET_PAYMENT_REDIRECT'
}

interface ITrek {
  trek_id: string
  trek_name: string
  _id: string
}

export interface IPaymentRedirect {
  _id: string
  trek: ITrek
  sourceLocation: string
  destinationLocation: string
  contactNumber: number
  startDate: string
  endDate: string
  email: string
  price: number
  advanceBooking: number
}
