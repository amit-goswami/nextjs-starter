export enum PENDING_PAYMENT_QUERY_KEYS {
  GET_PAYMENT_REDIRECT = 'GET_PAYMENT_REDIRECT'
}

export interface IPaymentRedirect {
  _id: string
  trek: {
    trek_id: string
    trek_name: string
  }
  sourceLocation: string
  destinationLocation: string
  contactNumber: number
  startDate: string
  endDate: string
  email: string
  price: number
  advanceBooking: number
}
